import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Context from "../../context/Context";
import { ReposItem } from "./ReposItem";

function Repos() {
  const { user } = useContext(Context);
  const [reposItems, setReposItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginateLimit = 10;
  const pageCount = Math.ceil(user.public_repos / paginateLimit);

  useEffect(() => {
    getRepos()
    //eslint-disable-next-line
  }, [currentPage]);

  const getRepos = async () => {
    const res = await fetch(
      `https://api.github.com/users/${user.login}/repos?page=${currentPage}&per_page=${paginateLimit}`
    );
    const data = await res.json();
    setReposItems(data);
    console.log('render')
  };

  const handlePageClick = async (data) => {
    await setCurrentPage(data.selected + 1);
  };

  return (
    <div className="repos">
      <h3 className="repos__title">Repositories ({user.public_repos})</h3>
      <ul className="repos-list">
        {reposItems.map((repos) => (
          <ReposItem key={repos.id} repos={repos} />
        ))}
      </ul>
      <div className="repos-paginate">
        <p className="repos-paginate__info">
          1-4 of {user.public_repos} items
        </p>
        <ReactPaginate
          previousLabel={
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M7 11L2 6L7 1" stroke="#0064EB" strokeWidth="2" />
            </svg>
          }
          nextLabel={
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1 1L6 6L1 11" stroke="#0064EB" strokeWidth="2" />
            </svg>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"pagination__item"}
          previousClassName={"pagination-previous__item"}
          nextClassName={"pagination-next__item"}
          breakClassName={"pagination__item"}
          activeClassName={"pagination__item--active"}
        />
      </div>
    </div>
  );
}

export default Repos;

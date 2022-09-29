import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Initial } from "./Initial";
import { NotFound } from "./NotFound";
import { Preloader } from "./Preloader";
import User from "./User";

function UserPage({ serchResult }) {
  const [page, setPage] = useState(<Initial />);
  const pageStatus = useSelector((state) => state.serchSlice.serchStatus);
  
  useEffect(() => {
    function stateReduser() {
      if (pageStatus === "SHOW__INITIAL") {
        setPage(<Initial />);
      } else if (pageStatus === "SHOW__NOTFOUND") {
        setPage(<NotFound />);
      } else if (pageStatus === "SHOW__USER") {
        setPage(<User />);
      } else if (pageStatus === "SHOW__LOADER") {
        setPage(<Preloader />);
      }
    }
    stateReduser();
  }, [pageStatus]);

  return <div className="user-page">{page}</div>;
}

export default UserPage;

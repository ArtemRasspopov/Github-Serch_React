import React, { useContext } from "react";
import Context from "../../context/Context";
import { NotRepos } from "./NotRepos";
import Repos from "./Repos";

function User() {
  const { user } = useContext(Context);

  return (
    <div className="user">
      <div className="container">
        <div className="user__inner">
          <div className="user-info">
            <div
              className="user-info__avatar"
              style={{
                backgroundImage: `url(${user.avatar_url})`,
              }}
            />
            <div className="user-info__info">
              <p className="user-info__name">
                {user.name ? user.name : "No name"}
              </p>
              <a
                href={user.html_url}
                className="user-info__login"
                target={"blank"}
              >
                {user.login}
              </a>
              <div className="user-info__followers">
                <p className="user-info__followers-item">
                  <span>
                    {user.followers > 1000
                      ? (user.followers / 1000).toFixed(1) + "K"
                      : user.followers}{" "}
                  </span>
                  followers
                </p>
                <p className="user-info__followers-item">
                  <span>
                    {user.following > 1000
                      ? (user.following / 1000).toFixed(1) + "K"
                      : user.following}{" "}
                  </span>
                  following
                </p>
              </div>
            </div>
          </div>
          <div className="repos-inner">
            {user.public_repos ? <Repos user={user} /> : <NotRepos />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

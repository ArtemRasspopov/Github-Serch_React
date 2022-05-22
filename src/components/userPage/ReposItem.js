import React from "react";

export const ReposItem = ({repos}) => (
  <li className="repos-list__item">
    <a href={repos.html_url} target={"blank"} className="repos-list__item-title">
      {repos.name}
    </a>
    <p className="repos-list__item-text">
      {repos.description ? repos.description : "No description"}
    </p>
  </li>
);



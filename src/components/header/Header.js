import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserById } from "./../../store/serchSlice/serchSlice";

export default function Header() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  function submit(event) {
    event.preventDefault();
    dispatch(fetchUserById(value))
    setValue("");
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/">
            <img
              className="git-icon"
              src={"./images/git-icon.svg"}
              alt={"git icon"}
            />
          </a>
          <form className="header__form" onSubmit={(event) => submit(event)}>
            <input
              type="text"
              className="header__form-input"
              placeholder="Enter GitHub username"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

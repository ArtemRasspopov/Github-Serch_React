import React, { useContext, useState } from "react";
import Context from "../../context/Context";

export default function Header() {
  const [value, setValue] = useState("");
  const { serchUser } = useContext(Context);

  function submit(event) {
    event.preventDefault();
    serchUser(value);
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

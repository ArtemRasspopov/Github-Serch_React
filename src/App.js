import React, { useState } from "react";
import Header from "./components/header/Header";
import UserPage from "./components/userPage/UserPage";
import Context from "./context/Context";
import {
  SHOW__INITIAL,
  SHOW__LOADER,
  SHOW__NOTFOUND,
  SHOW__USER,
} from "./context/types";

function App() {
  const [serchResult, setSerchResult] = useState(SHOW__INITIAL);
  const [user, setUser] = useState(null);
  
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  function serchUser(value) {
    setSerchResult(SHOW__LOADER);
    fetch(`https://api.github.com/users/${value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setSerchResult(SHOW__NOTFOUND);
        } else {
          setUser(data);
          setSerchResult(SHOW__USER);
        }
      });
  }

  return (
    <Context.Provider value={{ serchUser, user }}>
      <div className="app">
        <Header />
        <UserPage serchResult={serchResult} />
      </div>
    </Context.Provider>
  );
}

export default App;

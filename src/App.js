import React from "react";
import Header from "./components/header/Header";
import UserPage from "./components/userPage/UserPage";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="app">
      <Header />
      <UserPage />
    </div>
  );
}

export default App;

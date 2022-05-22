import React, { useEffect, useState } from "react";
import {
  SHOW__INITIAL,
  SHOW__LOADER,
  SHOW__NOTFOUND,
  SHOW__USER,
} from "../../context/types";
import { Initial } from "./Initial";
import { NotFound } from "./NotFound";
import { Preloader } from "./Preloader";
import User from "./User";

function UserPage({ serchResult }) {
  const [userPageState, setUserPageState] = useState(SHOW__INITIAL);
  const [showState, setShowState] = useState(<Initial />);

  useEffect(() => {
    setUserPageState(serchResult);
  }, [serchResult]);

  useEffect(() => {
    function stateReduser() {
      if (userPageState === SHOW__INITIAL) {
        setShowState(<Initial />);
      } else if (userPageState === SHOW__NOTFOUND) {
        setShowState(<NotFound />);
      } else if (userPageState === SHOW__USER) {
        setShowState(<User />);
      } else if (userPageState === SHOW__LOADER) {
        setShowState(<Preloader />);
      }
    }
    stateReduser();
  }, [userPageState]);

  return <div className="user-page">{showState}</div>;
}

export default UserPage;

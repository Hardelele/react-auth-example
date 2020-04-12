import React from "react";
import { Redirect } from 'react-router-dom';

export const Authorization = () => {

    const isAuthorized = false;

    const authorizationHandler = (event) => {
        const currentUrl = window.location.href;
        window.location.replace(currentUrl + "profile");
    };

    return (
      <div className="authorization-container">
          {isAuthorized && <Redirect to='/profile' />}
          <button onClick={authorizationHandler}>Auth</button>
      </div>
  );
};

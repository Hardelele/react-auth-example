import React from "react";
import { Redirect } from 'react-router-dom';

export const Profile = () => {

    const isAuthorized = false;

    return (
        <div className="profile-container">
            {!isAuthorized && <Redirect to='/' />}
        </div>
    );
};

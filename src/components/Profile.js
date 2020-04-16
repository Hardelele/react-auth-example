import React from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const Profile = ({isAuth}) => {
    return (
        <div className="profile-container">
            {!isAuth && <Redirect to="/"/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, null)(Profile)

import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {postAuth, postRegister} from "../redux/actions/TokensActions";

class Authorization extends Component {

    state = {};

    render() {

        const authorizationHandler = (event) => {
            const authInfo = {
                username: "123", password: "123"
            };
            this.props.postAuth(authInfo);
        };

        return (
            <div className="authorization-container">
                {this.props.isAuth && <Redirect to="/profile"/>}
                <button onClick={authorizationHandler}>Auth</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    postAuth,
    postRegister
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)

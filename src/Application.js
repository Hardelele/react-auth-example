import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './css/application.css';
import Authorization from "./components/Authorization";
import Profile from "./components/Profile";
import {getRefresh, postAuth, postRegister} from "./redux/actions/TokensActions";
import {connect} from "react-redux";

class Application extends Component {

    componentDidMount() {
        this.props.getRefresh();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="application-container">
                    <Switch>
                        <Route path="/" exact component={Authorization}/>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        tokens: state.auth.tokens,
    }
};

const mapDispatchToProps = {
    getRefresh
};

export default connect(mapStateToProps, mapDispatchToProps)(Application)

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import browserHistory from "history/createBrowserHistory";
import Home from "../pages/home";

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/finance" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Router

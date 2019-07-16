import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import browserHistory from "history/createBrowserHistory";

import './../index.css';
import App from './../App';

class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/finance" component={App} />
                </Switch>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(
    <Router/>,
    document.getElementById('root')
);

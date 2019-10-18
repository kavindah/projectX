import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./components/Example";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TaskDetails from "./components/TaskDetails";

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/tasks">Task</Link>
                        <Route path="/tasks" exact component={Example}/>
                        <Route path="/tasks/:id" exact render = {props=><TaskDetails{...props}/>}/>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}

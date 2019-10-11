import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from "./components/Example";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/tasks">Task</Link>
                        <Route path="/"/>
                        <Route path="/tasks" component={Example}/>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}

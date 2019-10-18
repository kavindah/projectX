import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Example extends Component {

    constructor() {
        super();
        this.state = {
            tasks:[]
        }
    }
     componentWillMount() {
        axios.get('/api/tasks').then(
            response=> {
                this.setState({
                    tasks:response.data
                });
            }).catch(errors => {
            console.log(errors);
        });
     }

    render() {
        return (
            <div className="container">
                {this.state.tasks.map((task, key)=>(
                    <ul key={key}>
                        <li>
                            <Link to={"/tasks/" + task.id}>{task.title}</Link>
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
}
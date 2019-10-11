import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {

    constructor() {
        super();
        this.state = {
            tasks:[]
        }
    }
     componentWillMount() {
        axios.get('/api/tasks', {
            headers:  {'Content-type': 'application/json'}
        }).then(
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
                    <div key={key}>{task.title}</div>
                ))}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

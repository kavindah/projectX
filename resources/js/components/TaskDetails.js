import React, { Component } from 'react';
import axios from 'axios';

export default class TaskDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        axios.get("/api/tasks/" + this.props.match.params.id).then(
            response=> {
                this.setState({
                    post:response.data
                });
            }).catch(errors => {
            console.log(errors);
        });
    }

    render() {
        return (
            <div className="container">
               <h1>{this.state.post.title}</h1>
            </div>
        );
    }
}


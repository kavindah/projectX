import React, { Component } from 'react';
import axios from 'axios';

export default class TaskDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEdit(itemid, e){
        e.preventDefault()
        var data = this.state.post
                this.setState({
                    id: data.id,
                    title: data.title,
                })

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
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <div className="col-md-12">
                            <input type="text"
                                   className="form-control"
                                   id="title"
                                   name="title"
                                   value={this.state.post.title || ''}
                                   onChange={this.onChange.bind(this)}
                            />
                        </div>
                    </div>
                </form>
                <button
                    href = ""
                    className="btn btn-info mr-1"
                    onClick={this.onEdit.bind(
                        this,
                        this.state.post.id
                    )}
                >Edit</button>
            </div>
        );
    }
}


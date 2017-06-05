import React, { Component } from 'react';
import axios from 'axios';
import ReactList from './react-list';


export default class ReactResult extends Component {
    constructor() {
        super ();
        this.state = {
            statuses: []
        }
    }

    componentDidMount() {
        return axios.get('http://medlogotyp.se/twitter_react_query/')
            .then((data) => {
                this.setState({ statuses: data.data.statuses })
            })
    }

    render() {
        console.log(this.state.statuses)
        return (
            <div className="reactResult container">
                <h1 className="app__title">REACT</h1>
                <p className="app__description">25 latest tweets for REACT search query</p>
                {this.state.statuses.map((status) => {
                    return <ReactList status={status} key={status.id} />
                })}
            </div>
        );
    }
}

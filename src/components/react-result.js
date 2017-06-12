import React, { Component } from 'react';
import axios from 'axios';
import ReactList from './react-list';



export default class ReactResult extends Component {
    
    render() {
        return (
            <div className="reactResult container">
                <h1 className="app__title">REACT</h1>
                <p className="app__description">25 latest tweets for REACT search query</p>
            </div>
        );
    }
}

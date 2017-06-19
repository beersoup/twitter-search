import React, { Component } from 'react'
import ReactList from './react-list'
import io from 'socket.io-client'

export default class AccountSearch extends Component {
    render() {
        return (
            <div className="accountSearch container">
                <h1 className="app__title">Search latest tweets</h1>
                <p className="app__description"> Please enter a Twitter account name</p>
                {/*<div className="row">
                <div className="col-md-4 col-md-offset-3">
                <form className="search-form">
                    <div className="form-group has-feedback">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <input type="text" className="form-control" name="search" id="search" placeholder="search" />
                            <span className="glyphicon glyphicon-search form-control-feedback"></span>
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </form>
                </div>
                </div> */}
                <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" type="text" name="search" id="search" placeholder="Account name" required />
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"><span>Search</span></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

import React, {Component} from 'react';
import {Link} from 'react-router';


export default class Menu extends Component {

    render() {

        return (
            <ul className="menu">
                <Link to="react-result" className="menu--link" activeClassName="active">
                    <li className="menu__listItem">React</li>
                </Link>
                <Link to="node-result" className="menu--link" activeClassName="active">
                    <li className="menu__listItem">Node</li>
                </Link>
                <Link to="account-search" className="menu--link" activeClassName="active">
                    <li className="menu__listItem">Account Search</li>
                </Link>
            </ul>
        );
    }
}
                     
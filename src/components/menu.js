import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li className="menu__listItem"><Link to="/react-result" className="menu--link" activeClassName="active">React</Link></li>
                <li className="menu__listItem"><Link to="/node-result" className="menu--link" activeClassName="active">Node</Link></li>
                <li className="menu__listItem"><Link to="/account-search" className="menu--link" activeClassName="active">Account Search</Link></li>
            </ul>
        );
    }
}
                     
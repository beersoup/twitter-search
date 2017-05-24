import React, { Component } from 'react';
import Header from './header'

const App = (props) => {
    return (
      <div className="app">
        <Header />
        {props.children}
      </div>
    );
}

export default App;
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './routes/home/Index';
import User from './routes/user/Index';
import Detail from './routes/detail/Index';
import Seat from './routes/seat/Index';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/user" exact component={User}></Route>
					<Route path="/detail" exact component={Detail}></Route>
					<Route path="/seat" exact component={Seat}></Route>
				</Switch>
			</BrowserRouter>
    );
  }
}

export default App;

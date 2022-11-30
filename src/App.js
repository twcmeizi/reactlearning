import React, { Component, useRef, useState } from "react";
import UseCallbackParent from './hooks/UseCallback'
import DialogPage from './DialogPage';
import LiItem from "./hooks/LiItem";
import LifeCycle from './lifeCycle/index';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import BasicExample  from './router/basic'
import  RedirectPage  from './router/Redirect'
import Indexpage from './routerOld'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Indexpage></Indexpage></Router>
      // <Router>
      //   {/* <Link to="/hooks">hooks</Link>
      //   <Link to="/hooks/1">LiItem</Link>
      //   <Link to='/hoc'>hoc</Link>
      //   <Link to='/lifecycle'>lifeCycle</Link> */}

      //   <Switch>
      //     <Route path="/" exact component={BasicExample}></Route>
      //     <Route path="/hooks" exact component={UseCallbackParent}></Route>
      //     <Route path='/hooks/:id' component={LiItem}></Route>
      //     <Route path="/hoc" component={DialogPage}></Route>
      //     <Route path="/lifecycle" component={LifeCycle}></Route>
      //     <Redirect to="/hooks"></Redirect>
      //   </Switch>
      // </Router>
    )
  }
}


import './App.css';
import { Navbar } from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>
        <Navbar/>
        <News pageSize={5} country="in" category="science"/>
        </BrowserRouter>
      </div>
    )
  }
}


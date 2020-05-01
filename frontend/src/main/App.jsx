import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './App.css'
import { HashRouter } from 'react-router-dom'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Routes from './Routes'

export default props =>
      <HashRouter>
            <div className="app">
                  <Logo icon="users" />
                  <Nav />
                  <Routes />
                  <Footer />
            </div>
      </HashRouter>

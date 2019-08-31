import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import { withTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {

  render() {

    const { t, i18n } = this.props;
        
    return (

      <Router>
        <Navbar t={t} i18n={i18n} />

        <Switch>
          <Route exact path="/" component={() => <Home t={t} />} />
        </Switch>
      </Router>
      
    )
  }
}

export default withTranslation('common')(App); 

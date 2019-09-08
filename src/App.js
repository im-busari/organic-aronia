import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { withTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Juice from './pages/products/Juice';
import Fresh from './pages/products/Fresh';
import Dried from './pages/products/Dried';
import Powder from './pages/products/Powder';

class App extends Component {

  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor
  }

  render() {

    const { t, i18n } = this.props;
        
    return (

      <Router>
        <Navbar t={t} i18n={i18n} />

        <section className='content-padding '>
        <Switch>
          <Route exact path="/" component={() => <Home t={t} />} />
          <Route exact path="/products" component={() => <Products t={t} />} />
          <Route exact path="/products/aronia-juice" component={() => <Juice t={t} />} />
          <Route exact path="/products/aronia-fresh" component={() => <Fresh t={t} />} />
          <Route exact path="/products/aronia-dried" component={() => <Dried t={t} />} />
          <Route exact path="/products/aronia-powder" component={() => <Powder t={t} />} />


          <Route exact path="/about" component={() => <About t={t} /> } />
          <Route exact path="/contacts" component={() => <Contacts t={t} />} />
        </Switch>
        </section>

        <Footer t={t} />
      </Router>
      
    )
  }
}

export default withTranslation('common')(App); 

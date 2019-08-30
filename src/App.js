import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import { withTranslation, Trans } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './pages/Home';

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

      
    //   <div className="App">
    //   <header className="App-header">

    //         <Navbar t={t} i18n={i18n}/>

    //     <h1 className="App-title">
    //         { t('welcome.title', { framework: "Organic Aronia, Bulgaria LTD" }) }
    //     </h1>
        
    //       <Trans i18nKey='welcome.intro'>
    //           To get started, edit <code>src/App.js</code> and save to reload.
    //       </Trans>
        
    //   </header>
    // </div>
    )
  }
}

export default withTranslation('common')(App); 

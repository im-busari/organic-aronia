import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import { withTranslation, Trans } from 'react-i18next';

class App extends Component {
  render() {

    const { t, i18n } = this.props;
        
    return (
      <div className="App">
      <header className="App-header">
            <div>
                <button onClick={() => i18n.changeLanguage('de')}>de</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
            </div>

        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="App-title">
            { this.props.t('welcome.title', { framework: "Organic Aronia, Bulgaria LTD" }) }
        </h1>
        
          <Trans i18nKey='welcome.intro'>
              To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        
      </header>
    </div>
    )
  }
}

export default withTranslation('common')(App); 

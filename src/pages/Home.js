import React, { Component } from 'react'
import { withTranslation, Trans } from 'react-i18next';

export default class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
                <h1 className="App-title">
                    { t('welcome.title', { framework: "Organic Aronia, Bulgaria LTD" }) }
                </h1>
                <h1 className="App-title">
                    { t('welcome.title', { framework: "Organic Aronia, Bulgaria LTD" }) }
                </h1>
            
                <Trans i18nKey='welcome.intro'>
                { t('welcome.title', { framework: "Organic Aronia, Bulgaria LTD" }) }
                </Trans>
            </>

        )
    }
}

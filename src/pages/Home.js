import React, { Component } from 'react'
import { withTranslation, Trans } from 'react-i18next';
import Header from '../components/Header';
import Services from '../components/Services';

export default class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
                <Header />
                <Services />
            </>
        )
    }
}

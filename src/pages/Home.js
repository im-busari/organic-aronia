import React, { Component } from 'react'
import { withTranslation, Trans } from 'react-i18next';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Interesting from '../components/Interesting';

export default class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
                <Header />
                <Services />

                <Interesting />

                <Footer />
            </>
        )
    }
}

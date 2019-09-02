import React, { Component } from 'react'
import Header from '../components/Home/Header';
import Services from '../components/Home/Services';
import Interesting from '../components/Home/Interesting';

export default class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
                <Header t={t} />
                <Services t={t} />

                <Interesting t={t} />
            </>
        )
    }
}

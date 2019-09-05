import React, { Component } from 'react'
import History from '../components/About/History';
import Team from '../components/About/Team';

export default class About extends Component {
    render() {

        const { t } = this.props;

        return (
            <section>
                <History />
                <Team />
            </section>
        )
    }
}

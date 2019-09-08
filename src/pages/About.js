import React, { Component } from 'react'
import History from '../components/About/History';
import Team from '../components/About/Team';
import OrganicFarming from '../components/About/OrganicFarming';
import Benefits from '../components/About/Benefits';

import "../components/About/About.css"

export default class About extends Component {
    render() {

        const { t } = this.props;

        return (
            <section>
                <History t={t} />
                <OrganicFarming t={t} />
                <Benefits t={t} />
                <Team t={t} />
            </section>
        )
    }
}

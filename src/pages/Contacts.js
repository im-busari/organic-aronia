import React, { Component } from 'react'

export default class Contacts extends Component {

    render() {

        const { t } = this.props;

        return (
            <div>
                <header className="contacts-header text-white">
                        <div className="row align-items-center">
                            <div className="col-12 text-center my-5">
                                
                            <h1 className="mb-4 text-uppercase mt-5 pt-5"> Contact Us</h1>
                            <p className="mb-3 lead">
                                Want to ask us about prices, offers, partnership or just a couple of questions? Do not hesitate to contact us. We would be happy to talk with you!
                            </p>
                            
                            </div>
                        </div>
                </header>


                <div className="row m-5 text-left">

                    <div className="col-4">

                    <h3> <i className="fas fa-phone-alt"></i> Phone </h3>
                    <hr></hr>

                        <ul className="list-unstyled lead">
                            <li>+359 89 911 5680</li>
                            <li>+359 89 680 2207</li>
                        </ul>

                    </div>
                    <div className="col-4">

                        <h3> <i className="fas fa-at"></i> E-mail </h3>
                        <hr></hr>
                        <p className="lead"> office@organic-aronia-bg.com</p>

                    </div>
                    <div className="col-4">
                        <h3> <i className="fas fa-map-marker-alt"></i>  Address </h3>
                        <hr></hr>
                        <p className="lead"> st. Izvan Regulatsia 1, Plachi dol 
                        <br></br>Dobrich, Bulgaria</p>
                    </div>

                </div>

        </div>
        )
    }
}

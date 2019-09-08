import React, { Component } from 'react'

export default class Contacts extends Component {

    render() {

        const { t } = this.props;

        return (
            <div>
                <header className="contacts-header text-white">
                        <div className="row no-gutters align-items-center">
                            <div className="col-12 text-center my-5">
                                
                            <h1 className="mb-4 text-uppercase mt-5 pt-5"> { t("contacts.header") } </h1>
                            <p className="mb-3 lead">
                            { t("contacts.sub-header") }
                            </p>
                            
                            </div>
                        </div>
                </header>


                <div className="row m-md-5 m-2 text-md-left text-center">

                    <div className="col-md-4 col-12 mt-md-0 mt-5 ">

                    <h3> <i className="fas fa-phone-alt"></i> { t("contacts.phone") } </h3>
                    <hr></hr>

                        <ul className="list-unstyled lead">
                            <li>+359 89 911 5680</li>
                            <li>+359 89 680 2207</li>
                        </ul>

                    </div>
                    <div className="col-md-4 col-12 mt-md-0 mt-5">

                        <h3> <i className="fas fa-at"></i> { t("contacts.mail") } </h3>
                        <hr></hr>
                        <p className="lead"> office@organic-aronia-bg.com</p>

                    </div>
                    <div className="col-md-4 col-12 mt-md-0 mt-5">
                        <h3> <i className="fas fa-map-marker-alt"></i>  { t("contacts.address.topic") } </h3>
                        <hr></hr>
                        <p className="lead"> { t("contacts.address.p-1") } </p>
                        <p className="lead"> { t("contacts.address.p-2") } </p>
                    </div>

                </div>

        </div>
        )
    }
}

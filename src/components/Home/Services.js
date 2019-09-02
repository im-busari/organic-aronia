import React from 'react'
import Service from '../sub/Service';

export default function Services(props) {

    const { t } = props

    return (
        <section className="page-section pt-5 bg-light">
            <div className="container">
            <div className="row pb-5">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{ t("home.services.heading")}</h2>
                </div>
            </div>
            <div className="row text-center mt-5">

            <Service 
                    topic={ t("home.services.headline-one")}
                    stylingClass="fas fa-heart fa-stack-1x fa-inverse"
                    content={
                    <ul className="list-unstyled text-left">
                        <li>
                            <i className="fas fa-check-square fa-1x"/> { t("home.services.text-one-li-one")}
                        </li>
                        <li>
                            <i className="fas fa-check-square fa-1x"/> { t("home.services.text-one-li-two")}
                        </li>
                        <li>
                            <i className="fas fa-check-square fa-1x"/> { t("home.services.text-one-li-three")}
                        </li>
                        
                    </ul>
            } />

                <Service 
                    topic={ t("home.services.headline-two")}
                    stylingClass="fas fa-leaf fa-stack-1x fa-inverse"
                    content={ t("home.services.text-two")} />

                <Service 
                    topic={ t("home.services.headline-three")}
                    stylingClass="fas fa-award fa-stack-1x fa-inverse"
                    content={ t("home.services.text-three")} />

            </div>

            </div>
        </section>
    )
}

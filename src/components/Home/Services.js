import React from 'react'
import Service from '../sub/Service';
import Pdf from '../../images/certificate.pdf'

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
                    <ul className="text-muted mt-3 list-unstyled text-left">
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
                    content={ 
                        <p className="text-muted mt-3"> 
                            { t("home.services.text-two") } 
                        </p> 
                        } 
                        
                    />

                <Service 
                    topic={ t("home.services.headline-three")}
                    stylingClass="fas fa-award fa-stack-1x fa-inverse"
                    content={ 
                        <div>
                            <p className="text-muted mt-3"> 
                                { t("home.services.text-three") } <br></br>
                                <a href={Pdf} target = "_blank" rel="noopener noreferrer" > { t("home.services.text-three-link") } </a>
                            </p>
                        </div>
                        } />

            </div>

            </div>
        </section>
    )
}

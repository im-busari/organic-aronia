import React from 'react'
import Service from './sub/Service';

export default function Services() {
    return (
        <section className="page-section pt-5 bg-light">
            <div className="container">
            <div className="row pb-5">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About the product</h2>
                </div>
            </div>
            <div className="row text-center mt-5">

            <Service 
                    topic="Healthy Bomb!"
                    stylingClass="fas fa-heart fa-stack-1x fa-inverse"
                    content={
                    <ul className="list-unstyled text-left">
                        <li>
                            <i className="fas fa-check-square fa-1x"/> Normalizes blood pressure & increases metabolism.
                        </li>
                        <li>
                            <i className="fas fa-check-square fa-1x"/> Strenghtens immune system & accelerates peristaltic
                        </li>
                        <li>
                            <i className="fas fa-check-square fa-1x"/> Detoxifying effect.
                        </li>
                        
                    </ul>
            } />

                <Service 
                    topic="100% Organic"
                    stylingClass="fas fa-leaf fa-stack-1x fa-inverse"
                    content="Our products come from the nature to your front door. 
                    Our products come from the nature to your front door. 
                    Our products come from the nature to your front door." />

                <Service 
                    topic="Certified"
                    stylingClass="fas fa-award fa-stack-1x fa-inverse"
                    content="Our products have been carefully inspected and 
                    certified by Balkan Biocert. You can check our certificate from the following link: http://blah.com" />

            </div>

            </div>
        </section>
    )
}

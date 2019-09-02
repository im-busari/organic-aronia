import React from 'react'
import image from '../images/interesting.JPG'
import { Link } from 'react-router-dom'

export default function Interesting(props) {

    const { t } = props

    return (
        <section className="page-section bg-white">

        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-lg-4 interesting-image">
                {/* CHECK App.css TO Change image */}
            </div>
            <div class="col-lg-8">
            <div class="featured-text text-center pl-3 pr-3 text-md-left pl-md-5 pr-md-5">
                <h4 className='mt-4'>{ t("home.interesting.heading") }</h4>
                <p class="text-black-50 mb-0 mt-5">
                    { t("home.interesting.p-one") }
                <br></br><hr></hr>
                    { t("home.interesting.p-two") }
                </p>
                <hr></hr>
                <p className='mt-4 text-center'>
                    <Link to='/products'>
                        <i className="fas fa-star"></i> <strong> { t("home.interesting.button")} </strong> <i className="fas fa-star"></i>
                    </Link>
                </p>
            </div>
            </div>
        </div>

        </section>
    )
}

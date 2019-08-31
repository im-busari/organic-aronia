import React from 'react'
import image from '../images/interesting.JPG'
import { Link } from 'react-router-dom'

export default function Interesting(props) {

    const { t } = props

    return (
        <section className="page-section bg-white">

        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-lg-5 interesting-image">
                {/* CHECK App.css TO Change image */}
            </div>
            <div class="col-lg-7">
            <div class="featured-text text-center pl-3 pr-3 text-md-left pl-md-5 pr-md-5">
                <h4 className='mt-0 mt-sm-5'>Did you know..?</h4>
                <p class="text-black-50 mb-0 mt-5">
                Aronia is rich source of dietary fibers, vitamins A, E, C, K and 
                B9 and minerals such as calcium, potassium, iron and manganese. 100g of ripe fruit contains only 47 calories.
                <br></br><hr></hr>
                Aronia can be consumed both in the fresh and dry form. Berries can be used as ingredient of breakfast cereals 
                and for the preparation of cakes, muffins, pies, ice-creams, syrups, juices, jams, jellies and teas.
                <br></br><hr></hr>
                The fruit is often labeled as <strong>"superfood"</strong> due to exceptionally high amount of antioxidants 
                (substances which prevent cell damage and slow down aging process) compared to other types of fruit.
                </p>
                <hr></hr>
                <p className='mt-4 text-center'>
                    <Link to='/products'>
                        <i className="fas fa-star"></i> Grab your <strong>superfood</strong> today! <i className="fas fa-star"></i>
                    </Link>
                </p>
            </div>
            </div>
        </div>

        </section>
    )
}

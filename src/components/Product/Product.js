import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {

    const { image, title, content, learnMore, t, price } = props

    return (

        <div className="card m-2" style={{ maxWidth: '560px', height: "100%"}}>

            <div className="row no-gutters">
                <div className="col-lg-5">
                    <img src={ image } className="card-img" style={{objectFit: 'cover', width: '100%', height:'100%'}} alt="..."/>
                </div>

                <div className="col-lg-7">

                    <div className="card-body">
                        <h5 className="card-title"> { title } </h5>

                        <p className="card-text"> { content } </p>

                        <Link to='/contacts' className="btn btn-primary m-2"> { t("products.buy-btn") }</Link>
                        <Link to={learnMore} className="btn btn-warning m-2">{ t("products.learn-btn") }</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

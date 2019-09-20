import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {

    const { image, title, content, learnMore, t } = props

    return (

        <div className="col-md-6 p-md-4 py-2 p-0 col-12">
        <div className="row card h-100" style={{ maxWidth: '560px', height: "100%"}}>

            <div className="row h-100">
                <div className="col-12">
                    <img src={ image } className="card-img" style={{objectFit: 'cover', width: '100%', height:'100%'}} alt="..."/>
                </div>

                <div className="col-12">

                    <div className="card-body">
                        <h5 className="card-title"> { title } </h5>

                        <p className="card-text"> { content } </p>

                        <Link to='/contacts' className="btn btn-primary m-2 shadow text-uppercase"> { t("products.buy-btn") }</Link>
                        <Link to={learnMore} className="btn btn-warning m-2 shadow text-uppercase">{ t("products.learn-btn") }</Link>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

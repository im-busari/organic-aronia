import React from 'react'

export default function HeaderP(props) {

    const { changeToRetail, changeToWholesale, t } = props

    return (
        <header className="masthead scroll-image-two">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center my-5">
                    <h1 className="font-weight-light text-white"> { t("products.set-offer") } </h1>
                    <p className="lead">
                        <button type="button" className="btn btn-primary m-4 px-4 py-2 
                        text-uppercase font-weight-light" onClick={changeToWholesale}>
                            { t("products.wholesale") }
                        </button>
                        <button type="button" className="btn btn-warning m-4 px-4 py-2 
                        text-uppercase font-weight-light" onClick={changeToRetail}>
                            { t("products.retail") }
                        </button>
                    </p>
                </div>
                </div>
            </div>
        </header>
    )
}

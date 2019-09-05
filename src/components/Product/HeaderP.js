import React from 'react'

export default function HeaderP(props) {

    const { changeToRetail, changeToWholesale, t } = props

    return (
        <header className="masthead scroll-image-two">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center my-5">
                    <h1 className="text-white"> { t("products.set-header") } </h1>
                    
                </div>
                </div>
            </div>
        </header>
    )
}

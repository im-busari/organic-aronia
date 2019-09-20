import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Error extends Component {
    render() {

        const { t } = this.props

        return (
            <div>
                <header className="error-header text-white">
                        <div className="row no-gutters align-items-center">
                            <div className="col-12 text-center my-5">
                                
                            <h1 className="mb-4 text-capitalize mt-5 pt-5"> { t("error.title") } </h1>
                            <p className="mb-3 lead">
                                { t("error.subtitle")}
                            </p>
                            <Link to="/" className="btn btn-warning shadow text-uppercase my-5"> { t("error.home")} </Link>
                            </div>
                        </div>
                </header>
            </div>
        )
    }
}

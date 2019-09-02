import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ImageScroll extends Component {
    
    render() {

        const { styling, topic, subtopic, noButton, t } = this.props

        return (
            <div className={styling}>
                <div className="carousel-caption d-none d-lg-block text-left">
                    <h2 className="display-4 text-uppercase"> { topic }</h2>
                    <p className="lead">{subtopic}</p>
                    <Link to='about' className={`btn btn-primary text-uppercase pr-4 pl-4 pb-2 pt-2 ${noButton ? 'd-none' : ''}`}> { t('home.header.button') } </Link> 
                </div>
                <div className="carousel-caption d-lg-none .d-sm-block text-left">
                    <h2 className="display-6 text-uppercase">{topic}</h2>
                    <p className="lead">{subtopic}</p>
                    <Link to='about' className={`btn btn-primary text-uppercase pr-4 pl-4 pb-2 pt-2 ${noButton ? 'd-none' : ''}`}> { t('home.header.button') } </Link> 
                </div>
            </div>
        )
    }
}


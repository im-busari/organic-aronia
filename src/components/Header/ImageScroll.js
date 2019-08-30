import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ImageScroll extends Component {
    
    render() {

        const { styling, image, topic, subtopic, noButton } = this.props

        return (
            <div className={styling}>
                <div className="carousel-caption d-none d-lg-block text-left">
                    <h2 className="display-4 text-uppercase"> { topic }</h2>
                    <p className="lead">{subtopic}</p>
                    <Link to='about' className={`btn btn-primary text-uppercase pr-4 pl-4 pb-2 pt-2 ${noButton ? 'd-none' : ''}`}>Products</Link> 
                </div>
                <div className="carousel-caption d-lg-none .d-sm-block">
                    <h2 className="display-7">Test</h2>
                    <p className="lead">Test</p>
                </div>
            </div>
        )
    }
}


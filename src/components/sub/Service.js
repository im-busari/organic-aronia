import React from 'react'

export default function Service(props) {


    const {stylingClass, topic, content } = props

    return (
        <div className="col-md-4">
            <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-success"></i>
                <i className={stylingClass}></i>
            </span>
            <h4 className="service-heading mt-4 text-uppercase">{topic}</h4>
            <p className="text-muted mt-3"> { content } </p>
        </div>
    )
}

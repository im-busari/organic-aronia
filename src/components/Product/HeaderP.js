import React from 'react'

export default function HeaderP(props) {

    const { text } = props

    return (
        <header className="masthead scroll-image-two">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center my-5">
                    <h1 className="text-white"> {text} </h1>
                    
                </div>
                </div>
            </div>
        </header>
    )
}

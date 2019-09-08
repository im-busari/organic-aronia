import React from 'react'

export default function PersonCard(props) {

    const { image, name, role } = props

    return (

        <div className="col-lg- col-md-4 col-sm-6 mb-lg-0 mb-5 mt-4 text-center ">
            <div className="mx-auto">
                <img src={image} width="200px" className="rounded-circle z-depth-1 shadow"
                alt="Sample avatar"/>
            </div>
        <h5 className="font-weight-bold mt-4 mb-3 text-success">{ name }</h5>
        <p className="text-uppercase text-secondary">{ role }</p>
      </div>
 )
}

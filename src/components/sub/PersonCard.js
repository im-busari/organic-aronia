import React from 'react'

import image from '../../images/avatar.jpeg'

export default function PersonCard(props) {

    const { name, role, linkedin, gmail } = props

    return (

        <div className="col-lg-4 col-md-4 col-sm-6 mb-lg-0 mb-5 text-center ">
            <div className="mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" width="200px" className="rounded-circle z-depth-1"
                alt="Sample avatar"/>
            </div>
        <h5 className="font-weight-bold mt-4 mb-3 text-success">{ name }</h5>
        <p className="text-uppercase text-secondary">{ role }</p>
      </div>
 )
}

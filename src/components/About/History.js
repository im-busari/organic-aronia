import React from 'react'

export default function History(props) {

    const { t } = props

    return (
        <div>
            <div className="about-header text-white">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-end">
            <div className="col-md-6 pt-5 pr-lg-5 pl-2 pr-2">
                
            <h1 className="mb-4" style={{opacity: "0.818578"}}> 
            
                { t("about.history.header") }
            
            </h1>
            
            <p className="mb-4" style={{opacity: "0.818578"}}> 
            
                { t("about.history.subheader")}
        
            </p>
            
            </div>
            </div>
            </div>
        </div>
    )
}

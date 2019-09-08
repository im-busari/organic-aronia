import React from 'react'
import learnMoreDoc from '../../images/aronia.pdf'

export default function LearnMore(props) {

    const { t, ul, intro, applicationText, storeText, 
        recipesHead, recipesSubHead, recipesText,
        noteText2, app_p, 
        imageOne, imageTwo  } = props

    return (
        <div className="row bg-white no-gutters py-5 px-2">

            <div className="col-sm-4 col-12 pb-5 px-lg-5 px-1 lead">

                <img src={imageOne} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

                { ul }

                <img src={imageTwo} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

            </div>

            <div className="col-sm-8 lead col-12 px-2">
                <p>
                { intro }
                </p>

                <h5> { t("products.sub-pages.application-h")} </h5>
                <p> { applicationText } </p>
                <p> { app_p } </p>
                <a href={learnMoreDoc} id="learnMore" target="_blank" rel="noopener noreferrer"> { t("products.sub-pages.infoLink")} </a>
                
                <hr></hr>

                <h5> { t("products.sub-pages.store-h")}  </h5>
                <p> { storeText } </p>

                <hr></hr>

                <h5> { recipesHead } </h5>
                <p className="font-italic"> { recipesSubHead }</p>
                <p> { recipesText } </p>

                {/* If we have recipesHead show this line. */}
                { recipesHead ? <hr></hr> : "" } 

                <h5>{ t("products.sub-pages.note-h")} </h5>
                <p> { t("products.sub-pages.note-text")} </p>
                <p> { noteText2 }</p>
            </div>
                        
        </div>
    )
}

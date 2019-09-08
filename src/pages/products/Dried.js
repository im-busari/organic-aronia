import React from 'react'
import learnMoreDoc from '../../images/aronia.pdf'
import driedImg from '../../images/aronia-dried.JPG'
import bushImg from '../../images/juice.jpg'
import LearnMore from '../../components/Product/LearnMore'

export default function Dried(props) {

    const { t } = props

    return (

        <LearnMore
            t={t} 
            ul= {
                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> { t("products.sub-pages.no-cons")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> { t("products.sub-pages.no-coloring")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> { t("products.sub-pages.bio-clean")} </li>
                </ul>
            }
            imageOne={driedImg}
            imageTwo={bushImg}
            intro= { t("products.sub-pages.dried.intro")}
            applicationText={ t("products.sub-pages.dried.applicationText")}
            storeText={ t("products.sub-pages.dried.storeText")}
            recipesHead={ t("products.sub-pages.dried.recipesHead")}
            recipesSubHead={ t("products.sub-pages.dried.recipesSubHead")} 
            recipesText={ t("products.sub-pages.dried.recipesText")}
            />
    )
}

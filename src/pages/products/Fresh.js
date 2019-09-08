import React from 'react'
import LearnMore from '../../components/Product/LearnMore'
import freshImg from '../../images/aronia-fresh.JPG'
import bushImg from '../../images/juice.jpg'

export default function Fresh(props) {

    const { t } = props

    return (

        <LearnMore
            t={t} 
            ul= {
                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-pest")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.natural-growth")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.bio-clean")} </li>
                </ul>
            }
            imageOne={freshImg}
            imageTwo={bushImg}
            intro= { t("products.sub-pages.fresh.intro")}
            applicationText={ t("products.sub-pages.fresh.applicationText")}
            storeText={ t("products.sub-pages.fresh.storeText")}
            />
            
    )
}

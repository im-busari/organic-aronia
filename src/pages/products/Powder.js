import React from 'react'
import LearnMore from '../../components/Product/LearnMore'
import powderImg from '../../images/powder.jpg'
import milkImg from '../../images/milk-powder.jpg'

export default function Powder(props) {

    const { t } = props

    return (

        <LearnMore
            t={t} 
            ul= {
                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-coloring")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-aroma")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-cons")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.bio-clean")} </li>
                </ul>
            }
            imageOne={powderImg}
            imageTwo={milkImg}
            intro= { t("products.sub-pages.powder.intro")}
            applicationText={ t("products.sub-pages.powder.applicationText")}
            app_p= { t("products.sub-pages.powder.app_p")}
            storeText={ t("products.sub-pages.powder.storeText")}
            />
    )
}

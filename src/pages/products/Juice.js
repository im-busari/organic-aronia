import React from 'react'
import LearnMore from '../../components/Product/LearnMore'
import juiceImg from '../../images/aronia-juice.JPG'
import bushImg from '../../images/juice.jpg'

export default function Juice(props) {

    const { t } = props

    return (

        <LearnMore
            t={t} 
            ul= {
                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-cons")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-coloring")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-sugar")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.no-water")} </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i>  { t("products.sub-pages.bio-clean")} </li>
                </ul>
            }
            imageOne={juiceImg}
            imageTwo={bushImg}
            intro= { t("products.sub-pages.juice.intro")}
            applicationText={ t("products.sub-pages.juice.applicationText")}
            storeText={ t("products.sub-pages.juice.storeText")}
            noteText2={ t("products.sub-pages.juice.noteText")}
            />
    )
}

import React from 'react'
import PersonCard from '../sub/PersonCard';
import NinaAvatar from '../../images/NinaBusari.jpg'
import ImAvatar from '../../images/ImBusari.jpg'
import SarahAvatar from '../../images/SarahBusari.jpg'
import RuthAvatar from '../../images/RuthBusari.png'
import EstherAvatar from '../../images/EstherBusari.png'
import TaiwoAvatar from '../../images/TaiwoBusari.jpg'

export default function Team(props) {
    const {t} = props
    return (
        <section className="page-section bg-white pt-5 pb-5">

        <div className="row no-gutters mb-4 mb-lg-5 align-items-center">
            <div className="col-lg-2 col-12 text-lg-right text-center pt-lg-0 pb-lg-0 pt-5 pb-5 pl-3 pr-3">
                <h1 className='text-uppercase'> { t("about.team.header") }  </h1>
            </div>
            <div className="col-lg-10 col-12">
            <div className="pl-3 pr-3">
                <div className="row">

                    <PersonCard image={TaiwoAvatar} name={ t("about.team.taiwo.name") } role={ t("about.team.taiwo.role") }  />

                    <PersonCard image={NinaAvatar} name={ t("about.team.nina.name") } role={ t("about.team.nina.role") } />

                    <PersonCard image={SarahAvatar} name={ t("about.team.sarah.name") } role={ t("about.team.sarah.role") } />

                    <PersonCard image={ImAvatar} name={ t("about.team.emmy.name") } role={ t("about.team.emmy.role") } />

                    <PersonCard image={RuthAvatar} name={ t("about.team.ruth.name") } role={ t("about.team.ruth.role") } />

                    <PersonCard image={EstherAvatar} name={ t("about.team.esther.name") } role={ t("about.team.esther.role") } />
                    
                </div>
            </div>
            </div>
        </div>

        </section>
   )
}
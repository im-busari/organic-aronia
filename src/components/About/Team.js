import React from 'react'
import PersonCard from '../sub/PersonCard';
import NinaAvatar from '../../images/NinaBusari.jpg'
import ImAvatar from '../../images/ImBusari.jpg'
import SarahAvatar from '../../images/SarahBusari.jpg'
import RuthAvatar from '../../images/RuthBusari.png'
import EstherAvatar from '../../images/EstherBusari.png'
import TaiwoAvatar from '../../images/TaiwoBusari.jpg'
import SimeonAvatar from '../../images/SimeonBusari.jpg'

export default function Team(props) {
    const {t} = props
    return (
        <section className="page-section bg-white pt-5 pb-5" id="about-team">

        <div className="row no-gutters mb-4 mb-lg-5 align-items-center">
            <div className="col-lg-2 col-12 text-lg-right text-center pt-lg-0 pb-lg-0 pt-5 pb-5 pl-3 pr-3">
                <h1 className='text-uppercase'> { t("about.team.header") }  </h1>
            </div>
            <div className="col-lg-10 col-12">
            <div className="pl-3 pr-3">
                <div className="row justify-content-center">

                    <PersonCard image={TaiwoAvatar} name={ t("about.team.taiwo.name") } role={ t("about.team.taiwo.role") }  />

                    <PersonCard image={NinaAvatar} name={ t("about.team.nina.name") } role={ t("about.team.nina.role") } />
                    
                </div>
                <div className="row justify-content-center">

                <PersonCard image={RuthAvatar} name={ t("about.team.ruth.name") } role={ t("about.team.ruth.role") } />
                <PersonCard image={SarahAvatar} name={ t("about.team.sarah.name") } role={ t("about.team.sarah.role") } />
                <PersonCard image={EstherAvatar} name={ t("about.team.esther.name") } role={ t("about.team.esther.role") } />
                <PersonCard image={ImAvatar} name={ t("about.team.emmy.name") } role={ t("about.team.emmy.role") } />
                <PersonCard image={SimeonAvatar} name={ t("about.team.simeon.name") } role={ t("about.team.simeon.role") } />

                </div>
            </div>
            </div>
        </div>

        </section>
   )
}
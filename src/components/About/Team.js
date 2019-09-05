import React from 'react'
import PersonCard from '../sub/PersonCard';
import image from '../../images/avatar.jpeg'

export default function Team(props) {
    const {t} = props
    return (
        <section className="page-section bg-light pt-5">

        <div class="row mb-4 mb-lg-5 align-items-center">
            <div class="col-lg-2 col-12 text-lg-right text-center pt-lg-0 pb-lg-0 pt-5 pb-5 pl-3 pr-3">
                <h1 className='text-uppercase'> Our amazing Team</h1>
            </div>
            <div className="col-lg-10 col-12">
            <div className="pl-3 pr-3">
                <div className="row">

                    <PersonCard name="Taiwo Busari" role="CEO, Founder" />

                    <PersonCard name="Nina Busari" role="CAO, Founder" />

                    <PersonCard name="Sarah Busari" role="Japanese Translator" />

                    <PersonCard name="Immanuella Busari" role="Web Developer" />

                    <PersonCard name="Ruth Busari" role="Content Writer" />

                    <PersonCard name="Esther Busari" role="German Translator" />
                    
                </div>
            </div>
            </div>
        </div>

        </section>
   )
}
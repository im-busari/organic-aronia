import React from 'react'

export default function OrganicFarming(props) {

    const { t } = props

    return (
        <section className="page-section bg-white pt-5 pb-5" id="organic-farming">

        <div className="row no-gutters mb-4 mb-lg-5">
            <div className="col-12 pl-lg-5 pr-lg-5 pl-md-1 pr-md-1">
                
            <div className="featured-text pl-3 pr-3 text-left pl-md-5 pr-md-5">
                <h1 className='mt-4 text-uppercase'> { t("about.organic-farming.header") } </h1>

                <ul className="nav nav-tabs mt-5 lead">
                    <li className="nav-item" >
                        <a href="#bioFarming" className="nav-link active" id="tab-button" data-toggle="tab"> { t("about.organic-farming.btn-bio") } </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#advantages" className="nav-link" id="tab-button" data-toggle="tab"> { t("about.organic-farming.btn-adv") } </a>
                    </li>
                </ul>
                <div className="tab-content mt-5 lead">
                    <div className="tab-pane fade show active" id="bioFarming">
                        <p>
        
                        { t("about.organic-farming.bio.p-1") }
                        
                        </p>
                        <p> 
                        
                        { t("about.organic-farming.bio.p-2") }

                        </p>
                    </div>
                    <div className="tab-pane fade" id="advantages">
                        <p> { t("about.organic-farming.adv.intro") } </p>
<p> { t("about.organic-farming.adv.ul-head") } </p>
<hr></hr>
<li>    { t("about.organic-farming.adv.li-1") } </li>
<li>    { t("about.organic-farming.adv.li-2") } </li>

<li>    { t("about.organic-farming.adv.li-3") } </li>

<li>    { t("about.organic-farming.adv.li-4") } </li>

                    </div>
                </div>
                <hr></hr>
            </div>
            </div>
        </div>

        </section>
    )
}

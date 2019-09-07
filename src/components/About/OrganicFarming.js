import React from 'react'

export default function OrganicFarming(props) {

    const { t } = props

    return (
        <section className="page-section bg-light pt-5 pb-5">

        <div className="row no-gutters mb-4 mb-lg-5">
            <div className="col-lg-4 d-none d-lg-block interesting-image">
                {/* CHECK App.css TO Change image */}
            </div>
            <div className="col-lg-8 col-12">
            <div className="featured-text pl-3 pr-3 text-left pl-md-5 pr-md-5">
                <h4 className='mt-4'> Organic Farming </h4>

                <ul className="nav nav-tabs mt-5">
                    <li className="nav-item">
                        <a href="#bioFarming" className="nav-link active" data-toggle="tab"> BIO Farming </a>
                    </li>
                    <li className="nav-item">
                        <a href="#advantages" className="nav-link" data-toggle="tab"> Advantages </a>
                    </li>
                </ul>
                <div className="tab-content mt-5">
                    <div className="tab-pane fade show active" id="bioFarming">
                        <p>
        
                        Nowadays, at the time of wild rush for more and faster, at the time of scientific progress and high farming, 
                        which has to feed the increasing Earth population, it looks like as if there is no place left for bringing back 
                        the traditional farming. But all this hurrying and trying to achieve much with very little effort is reflected in 
                        the quality of our food. And "man is what he eats". Therefore, if the twentieth century was marked by the influence of 
                        modern chemistry, in the twenty-first century people turn back to old time food quality. The mania on fast food gradually 
                        shifts from the pleasures of slow food. And what pleasure can there be in a rapidly grown and forcefully ripened tomato? 
                        So, by necessity, we need to replace the word "chemical" in our food with "biological" (or "organic"). 
                        
                        <br></br> BIO can be an 
                        abbreviation of all Bulgarian farming: Bulgarian Ideal Organic ... :) Beyond the pun "Bio" or "Organic" reflects the 
                        special quality of agricultural products produced without the use of synthetic fertilizers or any pesticides - herbicides, 
                        fungicides or zoocides. "Bio" or "organic" means free from chemicals.



                        </p>
                    </div>
                    <div className="tab-pane fade" id="advantages">
                        <p>
                        Bio-farming is a way of producing organic agricultural products. We have to give prominence to mechanical elimination of weeds because we do not use herbicids. There is a place for the tractor too, but there is still much handwork to do. Pest control is done with hands or with cunning appliances and herb teas. The bio-farming is definitely not a dull and drag kind of job. It is a path wich encourages farmer`s creativity and inventiveness, a place where a man can and has to voice his excellence to the other creations given to him from God.

<br></br><br></br>BIO-farming:
<li>Stops the use of chemical sinthetical products such as mineral compost for feeding up the soil, pesticides and for vegetable life defence or hormones of growth for agricultural animals.</li>

<li>Uses balanced foodstuffs in the soil and the organic ground - improves the structure of the soil and the fruitfulness, protects the environment.</li>

<li>Uses effectively the water, soil, plant and animal resources - the natural and local resources are used to the best advantage.</li>

<li>Gives an opportunity of protecting the biological diversity and cultivation of more than one culture (for instance after cropping the land with aronia you can plant melons, watermelons, beans and others between the rows).</li>

                        </p>
                    </div>
                </div>
                <hr></hr>
            </div>
            </div>
        </div>

        </section>
    )
}

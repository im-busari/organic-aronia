import React from 'react'
import Product from './Product';
import imgJuice from '../../images/aronia-juice.JPG'
import imgFresh from '../../images/aronia-fresh.JPG'
import imgDried from '../../images/aronia-dried.JPG'

export default function ProductList(props) {

    const { t, retail } = props

    return (

        <section className="py-5">
                    <div className="card-group m-2 p-2 justify-content-center">
                        <Product 
                            t = {t}
                            price={ retail ? "12.80 EUR per 3L" : "Contact for more information" }
                            image={ imgJuice }
                            title="100% Organic Aronia Juice"
                            content="We offer you 100% cold-pressed and pasteurized chokeberry juice! It has beneficial effects on metabolism, blood formation 
                            and promotes regeneration of muscle and bone tissue. Aronia juice is suitable for diabetics because of its lack of 
                            saccharose and high content of sorbitol."
                            learnMore="/products/aronia-juice"/>

                        <Product 
                            t = {t}
                            price={ retail ? "XX EUR per 1kg" :"1 000.00 EUR per 1 TON" }
                            image={ imgFresh }
                            title="Fresh Organic Chokeberries"
                            content="Fresh aronia berries have pleasant taste. They are rich in vitamins and polyphenols 
                            and are used as natural source of antioxidants in variety of healthy diets. 
                            Fruits are recommended mainly for the prevention and cotreatment of cardiovascular diseases and dieabetes."
                            learnMore="/products/aronia-fresh"/>
                    </div>

                    <div className="card-group m-2 p-2 justify-content-center">
                        <Product 
                                t = {t}
                                price={ retail ? "XX EUR per 1kg" : "4 600.00 EUR per 1 TON" }
                                image={ imgDried }
                                title="Dried Organic Aronia"
                                content="The dried organic chokeberries have all healthy ingredients that are found in the fresh fruit, 
                                but in higher concentration. Dried fruits are ready for immediate consumption. They can be used for the 
                                preparation of various dishes and drinks (tea, etc.)."
                                learnMore="/products/aronia-dried"/>

                        <Product 
                                t = {t}
                                price={ retail ? "XX EUR per 100g" : "12 500.00 EUR per 1 TON" }
                                image={ imgDried }
                                title="Organic Aronia Powder"
                                content="The powder has no preservatives and no color additive. It is made of 100% micronized dried organic aronia. 
                                Easy to store and use. You can add it to your yoghurt or flour for example. It improves 
                                the metabolism and strenghtens the immune system."
                                learnMore="/products/aronia-dried"/>
                    </div>

                </section>
    )
}

import React from 'react'
import Product from './Product';
import imgJuice from '../../images/aronia-juice.JPG'
import imgFresh from '../../images/aronia-fresh.JPG'
import imgDried from '../../images/aronia-dried.JPG'
import imgPowder from '../../images/powder.jpg'

export default function ProductList(props) {

    const { t, retail } = props

    return (

        <div className="container py-3">
        <div className="row justify-content-center">
                    
                        <Product 
                            t = {t}
                            price={ retail ?  t("products.aronia-juice.retail-price") : t("products.aronia-juice.wholesale-price") }
                            image={ imgJuice }
                            title={ t("products.aronia-juice.title")}
                            content={ t("products.aronia-juice.content")}
                            learnMore="/products/aronia-juice"/>

                        <Product 
                            t = {t}
                            price={ retail ? t("products.aronia-fresh.retail-price") : t("products.aronia-fresh.wholesale-price") }
                            image={ imgFresh }
                            title={ t("products.aronia-fresh.title")}
                            content={ t("products.aronia-fresh.content")}
                            learnMore="/products/aronia-fresh"/>
                    

                    
                        <Product 
                                t = {t}
                                price={ retail ? t("products.aronia-dried.retail-price") : t("products.aronia-dried.wholesale-price") }
                                image={ imgDried }
                                title={ t("products.aronia-dried.title")}
                                content={ t("products.aronia-dried.content")}
                                learnMore="/products/aronia-dried"/>

                        <Product 
                                t = {t}
                                price={ retail ? t("products.aronia-powder.retail-price") : t("products.aronia-powder.wholesale-price") }
                                image={ imgPowder }
                                title={ t("products.aronia-powder.title")}
                                content={ t("products.aronia-powder.content")}
                                learnMore="/products/aronia-powder"/>
                    
                </div>
                </div>
    )
}

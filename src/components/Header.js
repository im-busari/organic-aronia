import React from 'react'
import ImageScroll from './Header/ImageScroll';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="8000">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner" role="listbox">

                    {/* Slide One */}
                    <ImageScroll 
                        styling={"carousel-item active scroll-image-one"} 
                        topic='Organic Aronia'
                        subtopic='LTD, Bulgaria'
                        noButton={true} />

                    {/* Slide Two */}
                    <ImageScroll 
                        styling={"carousel-item scroll-image-two"} 
                        topic='10+ years of experience'
                        subtopic="And numerous smiles on our clients' faces. "
                        noButton={true} />                        

                    {/* Slide Three */}
                    <ImageScroll 
                        styling={"carousel-item scroll-image-three"} 
                        topic='Explore our Products'
                        subtopic='Whether you are Retail Client or a Wholesale one, we have an offer for you.'
                        noButton={false} /> 

                </div>
                
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </header>

    )
}

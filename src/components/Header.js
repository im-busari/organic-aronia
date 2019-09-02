import React from 'react'
import ImageScroll from './sub/ImageScroll';
import { Link } from 'react-router-dom'

export default function Header(props) {

    const { t } = props

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
                        t={t}
                        styling={"carousel-item active scroll-image-one"} 
                        topic={ t('home.header.topicOne') }
                        subtopic={ t('home.header.subtopicOne') }
                        noButton={true} />

                    {/* Slide Two */}
                    <ImageScroll 
                        t={t}
                        styling={"carousel-item scroll-image-two"} 
                        topic={ t('home.header.topicTwo') }
                        subtopic={ t('home.header.subtopicTwo') }
                        noButton={true} />                        

                    {/* Slide Three */}
                    <ImageScroll 
                        t={t}
                        styling={"carousel-item scroll-image-three"} 
                        topic={ t('home.header.topicThree') }
                        subtopic={ t('home.header.subtopicThree') }
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

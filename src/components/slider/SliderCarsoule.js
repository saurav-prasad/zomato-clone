import React from 'react'
import './slider.css'
import NextArrow from './arrows/NextArrow';
import PreviousArrow from './arrows/PreviousArrow';
import { Zoom } from 'react-awesome-reveal';
import Slider from 'react-slick';

function SliderCarsoule({ collectionData, collectionName }) {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        swipeToSlide: false,
    };

    return (
        <div className='sliderCollContainer maxWidth'>
            <div className='collTitle'>
                <h3 className='collName'>{collectionName}</h3>
            </div>
            <Slider {...settings}>
                {collectionData && collectionData.map((data) =>
                    <div className='collBox'>
                        <Zoom duration={100}>
                            <div className='collImageBox'>
                                <img className='collImage' src={data.image} alt="" />
                            </div>
                        </Zoom>
                        <p className='collImageName'>{data.name}</p>
                        <p className='collImageName ' style={{ fontSize: '0.9rem', marginTop: '3px' }}>{data.time}</p>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default SliderCarsoule
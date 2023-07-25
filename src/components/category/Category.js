import React from 'react'
import './category.css'
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
const categoryData = [
    {
        image: 'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
        title: 'Order Online',
        desc: 'Stay home and order to your doorstep',
        url:'/collections/delivery'
    },
    {
        image: 'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
        title: 'Dining',
        desc: "View the city's favourite dining venues",
        url:'/collections/diningout'
    },
]

function Category() {
    return (
        <div className='category maxWidth flexCenter'>
            {categoryData && categoryData.map((data) =>
                <div className="categoryCard card mb-3">
                    <Link className='Link' to={data.url}>
                        <Zoom cascade duration={200} triggerOnce={true}>
                            <img src={data.image} className="card-img-top categoryImage" alt="..." />
                        </Zoom>
                        <div className="card-body">
                            <h5 className="card-title categoryTitle">{data.title}</h5>
                            <p className="card-text categoryText">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Category
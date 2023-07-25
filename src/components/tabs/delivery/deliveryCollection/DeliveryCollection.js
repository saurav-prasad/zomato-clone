import React from 'react'
import './deliverycollection.css'
import SliderCarsoule from '../../../slider/SliderCarsoule';

const collectionData = [
    {
        id: 1,
        image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        name: 'Biryani',
    },
    {
        id: 2,
        image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        name: 'Pizza',
    },
    {
        id: 3,
        image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        name: 'Thali',
    },
    {
        id: 4,
        image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        name: 'Chicken',
    },
    {
        id: 5,
        image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        name: 'Cake',
    },
    {
        id: 6,
        image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        name: 'Fried Rice',
    },
    {
        id: 7,
        image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        name: 'Burger',
    },
    {
        id: 8,
        image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
        name: 'North Indian',
    },
    {
        id: 9,
        image: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        name: 'Noodles',
    },
    {
        id: 10,
        image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        name: 'Paneer',
    },
    {
        id: 11,
        image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        name: 'Sandwich',
    },
    {
        id: 12,
        image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        name: 'Rolls',
    },
]


function DeliveryCollection() {

    return (
        <div className='deliveryColl'>
            <SliderCarsoule collectionData={collectionData} collectionName="Inspiration for your first order" />
        </div>
    )
}



export default DeliveryCollection
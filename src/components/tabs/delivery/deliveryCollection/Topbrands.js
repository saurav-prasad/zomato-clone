import React from 'react'
import SliderCarsoule from '../../../slider/SliderCarsoule'

const topbrands = [
    {
        id: 1,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433489.png?output-format=webp',
        name: 'KFC',
        time: '16 min',
    },
    {
        id: 2,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550060828.png?output-format=webp',
        name: "Domino's Pizza",
        time: '16 min',
    },
    {
        id: 3,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613213714.png?output-format=webp',
        name: 'Pizza Hut',
        time: '24 min',
    },
    {
        id: 4,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/6838ce479c502d58795524e15621545a_1669021918.png?output-format=webp',
        name: 'Biryani By Kilo',
        time: '66 min',
    },
    {
        id: 5,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/7bd8d15b440414feab366ee63b046f5d_1672388958.png?output-format=webp',
        name: 'WOW! China',
        time: '35 min',
    },
    {
        id: 6,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/8d0bc4a5fd823a212cd82fddbbaedfd9_1611317831.png?output-format=webp',
        name: 'Sarada Biriyani House',
        time: '33 min',
    },
    {
        id: 7,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675834116.png?output-format=webp',
        name: 'The Belgian Waffle Co.',
        time: '39 min',
    },
    {
        id: 8,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/bd2614a1ae2bee6495a5a517635a509f_1611321285.png?output-format=webp',
        name: 'Sagar',
        time: '36 min',
    },
    {
        id: 9,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389286.png?output-format=webp',
        name: 'WOW! Momo',
        time: '19 min',
    },
    {
        id: 10,
        image: 'https://b.zmtcdn.com/data/brand_creatives/logos/249c5f52774cf0f8268daa1c7e0aa1b7_1611321263.png?output-format=webp',
        name: 'Zaika Biriyani House',
        time: '24 min',
    },
]
function Topbrands() {
    return (
        <div style={{marginBottom:'50px'}}>
            <SliderCarsoule collectionData={topbrands} collectionName='Top brands for you' />
        </div>
    )
}

export default Topbrands
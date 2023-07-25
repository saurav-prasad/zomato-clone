import React from 'react'
import './collection.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Zoom } from 'react-awesome-reveal';

const collectionData = [
    {
        image: 'https://b.zmtcdn.com/data/collections/a2611dbaaed9db9090eead8cf9ed0059_1528284670.jpg?output-format=webp',
        title: 'Vegeterians Delight',
        place: '5 Places'
    },
    {
        image: 'https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582082248.jpg?output-format=webp',
        title: 'For The Family',
        place: '12 Places '
    },
    {
        image: 'https://b.zmtcdn.com/data/collections/532af3ab24d29dbddcdcd16921ada06f_1535628640.jpg?output-format=webp',
        title: 'Great Breakfasts',
        place: '10 Places'
    },
    {
        image: 'https://b.zmtcdn.com/data/collections/f672e9556e44fe33ff47bf751639c0bd_1535356450.jpg?output-format=webp',
        title: 'Best Pizza Places in Town',
        place: '8 Places'
    },
]
function Collection() {
    return (
        <div className='collection'>
            <div className='collectionContainer maxWidth'>
                <h1 className='collectionTitle'>Collections</h1>
                <p className='collectionPara'>Explore curated lists of top restaurants, cafes, pubs, and bars in Siliguri, based on trends</p>
                <div className='collectionLists flexCenter'>
                    {collectionData &&
                        collectionData.map((data) =>
                            <div className='collectionCard cursorPointer flexCenter'>
                                <Zoom cascade duration={200} triggerOnce={true}>

                                    <img className='collectionImage' src={data.image} alt="" />
                                </Zoom>
                                <section className='collectionImageText'>
                                    <span className=' collectionImageTitle'>{data.title}</span>
                                    <span className=' collectionImagePlace'>{data.place}<ArrowRightIcon /></span>
                                </section>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection
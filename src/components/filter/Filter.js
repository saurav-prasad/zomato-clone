import { useState } from 'react'
import './filter.css'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

function Filter({ filters, rating, deliveryFilter }) {

    const bgColor = {
        backgroundColor: 'rgb(230 82 98)',
        color: 'white',
    }
    const [rating1, setRating1] = useState({ rating: 4 })
    const [rating2, setRating2] = useState({ rating: 3.5 })
    const [deliveryFilt, setdeliveryFilt] = useState({ sort: true })

    const setFilt = (data) => {
        switch (data) {
            case 1:
                rating(rating1.rating)
                break
            case 2:
                rating(rating2.rating)
                break
            case 3:
                deliveryFilter(deliveryFilt.sort)
                break
            default:
        }
    }

    return (
        <div className="maxWidth filterContainer">
            {/* filters */}
            <div
                className='filterItem flexCenter userSelect cursorPointer'>
                <TuneRoundedIcon fontSize='small' />
                Filters
            </div>
            {/* rating 4 */}
            <div
                style={rating1}
                onClick={() => {
                    rating1.rating === 0 ? setRating1({ rating: 4 }) : setRating1({ ...bgColor, rating: 0 });
                    setFilt(1);
                }}
                className='filterItem flexCenter userSelect cursorPointer'>
                Rating: 4.0+
            </div>
            {/* rating 3.5 */}
            <div
                onClick={() => {
                    rating2.rating === 0 ? setRating2({ rating: 3.5 }) : setRating2({ ...bgColor, rating: 0 });
                    setFilt(2);
                }}
                style={rating2}
                className='filterItem flexCenter userSelect cursorPointer'>
                Rating: 3.5+
            </div>

            {/* delivery time */}
            <div
                onClick={() => {
                    deliveryFilt.sort ? setdeliveryFilt({ ...bgColor, sort: false }) :  setdeliveryFilt({ sort: true })
                    setFilt(3);
                }}
                style={deliveryFilt}
                className='filterItem flexCenter userSelect cursorPointer'>
                Sort by Delivery time
            </div>
        </div >
    )
}
export default Filter
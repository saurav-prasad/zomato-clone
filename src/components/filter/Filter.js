import { useState } from 'react'
import './filter.css'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Filter({ rating, deliveryFilter }) {
    const bgColor = {
        backgroundColor: 'rgb(230 82 98)',
        color: 'white',
    }
    const [rating1, setRating1] = useState({ rating: 4 })
    const [rating2, setRating2] = useState({ rating: 3.5 })
    const [deliveryFilt, setdeliveryFilt] = useState({ sort: true })
    const [counter, setCounter] = useState(0)

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
                {counter === 0 ? <TuneRoundedIcon style={{ width: '1rem', marginRight: '3px' }} fontSize='small' /> :
                    <span className='filterCounter' style={bgColor}>{counter}</span>}
                Filters
            </div>
            {/* rating 4 */}
            <div
                style={rating1}
                onClick={() => {
                    rating1.rating === 0 ? setRating1({ rating: 4 }) : setRating1({ ...bgColor, rating: 0 });
                    rating1.rating === 0 ? setCounter(counter - 1) : setCounter(counter + 1);;
                    setFilt(1);
                }}
                className='filterItem flexCenter userSelect cursorPointer'>
                Rating: 4.0+
                {rating1.rating === 0 ? <CloseRoundedIcon fontSize='small' style={{ marginLeft: '3px' }} /> : ""}
            </div>
            {/* rating 3.5 */}
            <div
                onClick={() => {
                    rating2.rating === 0 ? setRating2({ rating: 3.5 }) : setRating2({ ...bgColor, rating: 0 });
                    rating2.rating === 0 ? setCounter(counter - 1) : setCounter(counter + 1);;
                    setFilt(2);
                }}
                style={rating2}
                className='filterItem flexCenter userSelect cursorPointer'>
                Rating: 3.5+
                {rating2.rating === 0 ? <CloseRoundedIcon fontSize='small' style={{ marginLeft: '3px' }} /> : ""}
            </div>

            {/* delivery time */}
            {deliveryFilter &&
                < div
                    onClick={() => {
                        deliveryFilt.sort ? setdeliveryFilt({ ...bgColor, sort: false }) : setdeliveryFilt({ sort: true });
                        deliveryFilt.sort ? setCounter(counter + 1) : setCounter(counter - 1);
                        setFilt(3);
                        console.log(counter);
                    }}
                    style={deliveryFilt}
                    className='filterItem flexCenter userSelect cursorPointer'>
                    Delivery time
                    <DeliveryDiningIcon style={{ marginLeft: '3px' }} fontSize='small' />
                    {deliveryFilt.sort ? "" : <CloseRoundedIcon fontSize='small' style={{ marginLeft: '3px' }} />}
                </div >
            }
        </div >
    )
}
export default Filter
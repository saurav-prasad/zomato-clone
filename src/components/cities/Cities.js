import React from 'react'
import './cities.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const citiesData = [
    {
        title: 'Pradhan Nagar',
        places: '33 places'
    },
    {
        title: 'Khalpara',
        places: '24 places'
    },
    {
        title: 'Bankim Nagar',
        places: '49 places'
    },
    {
        title: 'Janta Nagar',
        places: '21 places'
    },
    {
        title: 'Pritam More',
        places: '77 places'
    },
    {
        title: 'Subash Pally',
        places: '32 places'
    },
    {
        title: 'Champasari',
        places: '85 places'
    },
    {
        title: 'Haidar Para',
        places: '43 places'
    },
    {
        title: 'Sarkar Para',
        places: '58 places'
    },
]
function Cities() {
    return (
        <div className='cities maxWidth'>
            <h1 className='citiesheader'>Popular localities in and around <strong>Siliguri</strong></h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)' }}>
                {citiesData && citiesData.map((data) =>
                    <div className='citiesItems flexCenter'>
                        <div className='flexCenter citiesPlaces'>
                            <p className='citiesTitle'>{data.title}</p>
                            <p className='citiesPlace'>{data.places}</p>
                        </div>
                        <ArrowForwardIosIcon className='citiesIcon' />
                    </div>
                )}
            </div>
        </div >
    )
}

export default Cities
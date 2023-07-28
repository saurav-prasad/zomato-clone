import React, { useState } from 'react'
import Header from './header/Header'
import TabOption from './tabOption/TabOption'
import Delivery from './tabs/delivery/delivery/Delivery'
import DiningOut from './tabs/diningOut/DiningOut'
import Footer from './footer/Footer'
import NightLife from './tabs/nightLife/NightLife'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Accordion from './accordion/Accordion'
import { useLocation } from 'react-router-dom'

function Home() {
    const url = useLocation()
    const [activeTab, setactiveTab] = useState(url.pathname)
    return (<>
        <div style={{ position: 'relative' }}>
            <div id='header' ><Header  /></div>
            <TabOption activeTab={activeTab} setactiveTab={setactiveTab} />
            {getCorrectScreen(url.pathname)}
            <div className='upArrowBox flexCenter cursorPointer'>
                <a href="#header" className='upArrow flexCenter'>
                    <KeyboardArrowUpIcon fontSize='large' />
                </a>
            </div>
            <Accordion />
            <Footer />
        </div>
    </>
    )
}

const getCorrectScreen = (tab,Name) => {
    switch (tab) {
        case "/collections/delivery":
            return <Delivery />
        case "/collections/diningout":
            return <DiningOut />
        case "/collections/nightlife":
            return <NightLife />
        default:
            return <Delivery />
    }
}
export default Home
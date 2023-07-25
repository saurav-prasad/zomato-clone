import React from 'react'
import './tabOption.css'
import { Link } from 'react-router-dom'
const tabs = [
    {
        id: 1,
        name: 'Delivery',
        active_img: 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp',
        inactive_img: 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
        backdrop: '#FCEEC0',
        url: '/collections/delivery'
    },
    {
        id: 2,
        name: 'Dining Out',
        active_img: 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
        inactive_img: 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
        backdrop: '#E5F3F3',
        url: '/collections/diningout'
    },
    {
        id: 3,
        name: 'Night Life',
        active_img: 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
        inactive_img: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
        backdrop: '#EDF4FF',
        url: '/collections/nightlife'
    },
]

function TabOption({ activeTab, setactiveTab }) {
    
    return (
        <>
            <div className='tabContainer'>
                <div className='maxWidth tabWrapper'>
                    {tabs.map((tab) => {
                        return (
                            // tab items
                            <Link to={tab.url} className='Link'>
                                <div onClick={() => setactiveTab(tab.url)}
                                    className={`cursorPointer flexCenter tabItem ${activeTab === tab.url && "activeTab"}`}
                                >

                                    <div className='tabImageContainer flexCenter'
                                        style={{ backgroundColor: `${activeTab === tab.url ? tab.backdrop : '#F8F8F8'}` }}>
                                        <img src={activeTab === tab.url ? tab.active_img : tab.inactive_img} className='tabImg' alt={tab.name} />
                                    </div>
                                    <p className='tabName userSelect' style={{ color: `${activeTab === tab.url ? '#EF4F5F' : "#696969"}` }}>{tab.name}</p>

                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default TabOption
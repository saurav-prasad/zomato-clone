import React from 'react'
import './mainHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { Link } from 'react-router-dom';

function MainHeader() {
    return (
        <div className='mainHeader'>
            <div className='maxWidth flexCenter mainHeaderNavContainer'>
                <span className='flexCenter'><AppShortcutIcon fontSize='small' />Get the App</span>
                <ul className='flexCenter' style={{ margin: '0' }}>
                    <li className='navItems'>Investor Relations</li>
                    <li className='navItems'>Add resturants</li>
                    <li className='navItems'>Log in</li>
                    <li className='navItems'>Sign up</li>
                </ul>
            </div>
            <div className='mainHeaderContainer maxWidth'>
                <img className='mainHeaderImage' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                <h1 className='mainHeaderTitle'>Discover the best food & drinks in Siliguri</h1>
                {/* search section */}
                <div className='mainHeaderSearch'>
                    <div className='searchSection  flexCenter'>

                        {/* Location */}
                        <div className="locationBox flexCenter">
                            <LocationOnIcon style={{ color: 'rgb(247 128 141)' }} />
                            <input type="text" className='searchInput locationInput' placeholder='Block A, Uttorayan Town-ship, Ashrampara, Haidar Para, Siliguri' />
                            <ArrowDropDownIcon style={{ color: 'rgb(79 79 79)' }} className='arrowIcon cursorPointer' />
                        </div>
                        {/* Searchbox */}
                        <div className='flexCenter line'></div>
                        <SearchIcon style={{ color: '#818181' }} />
                        {/* Inputbox */}
                        <div className="inputBox flexCenter">
                            <input type="text" placeholder='Search for resturant, cuisine or a dish' className='searchInput' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
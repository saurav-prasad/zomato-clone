import React from 'react'
import './header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/* Container */}
            <div className='headerContainer maxWidth flexCenter'>

                {/* logo */}
                <Link className='.Link' to='/'><img className='headerLogo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='' /></Link>

                {/* header section */}
                <div className='headerSection flexCenter'>

                    {/* search section */}
                    <div className='searchSection flexCenter'>

                        {/* Location */}
                        <div className="locationBox flexCenter">
                            <LocationOnIcon style={{ color: 'rgb(247 128 141)' }} />
                            <input type="text" className='searchInput locationInput' placeholder='Block A, Uttorayan Twnp-ship, Ashrampara, Haidar Para, Siliguri' />
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

                    {/* login signup section*/}
                    <div className='userSelect headerLogin flexCenter'>
                        <div className='loginBox flexCenter'><p className='loginPara cursorPointer'>Log in</p></div>
                        <div className='signupBox loginBox flexCenter'><p className='loginPara cursorPointer'>Sign up</p></div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header
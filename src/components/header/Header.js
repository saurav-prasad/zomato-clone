import React, { useState } from 'react'
import './header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useLoginState } from '../login/loginContext/LoginState';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Header({ onchange }) {
    const [{ user }, dispatch] = useLoginState()

    const login = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const userDetail = result.user
                // The signed-in user info.
                // const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                dispatch({
                    type: 'set_user',
                    user: userDetail
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    const logOut = () => {
        dispatch({
            type: 'unset_user',
            user: null
        })
    }

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
                        {/* <div className='loginBox flexCenter'><p className='loginPara cursorPointer'>Log in</p></div> */}
                        <div className='signupBox loginBox flexCenter'>
                            {user ?
                                <div className='flexCenter'>
                                    <img className='loginPara cursorPointer loginImage' src={user.photoURL} />
                                    <p className='loginName cursorPointer'>{user.displayName}</p>
                                    <LogoutIcon className='logoutBtn cursorPointer' onClick={logOut} />
                                </div>
                                :
                                <p className='loginPara cursorPointer' onClick={login}>Sign up</p>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header
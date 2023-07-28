import React from 'react'
import './mainHeader.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { useLoginState } from '../login/loginContext/LoginState';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function MainHeader() {
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
        <div className='mainHeader'>
            <div className='maxWidth flexCenter mainHeaderNavContainer'>
                <span className='flexCenter'><AppShortcutIcon fontSize='small' />Get the App</span>
                <ul className='flexCenter' style={{ margin: '0' }}>
                    <li className='navItems'>Investor Relations</li>
                    <li className='navItems'>Add resturants</li>
                    {/* <li className='navItems'>Log in</li> */}
                    <li className='navItems'>   {user ?
                        <div className='flexCenter'>
                            <img className='loginPara cursorPointer loginImage' src={user.photoURL} />
                            <p style={{color:'white',}} className='loginName cursorPointer'>{user.displayName}</p>
                            <LogoutIcon style={{color:'white',}} className='logoutBtn cursorPointer' onClick={logOut} />
                        </div>
                        :
                        <span className='cursorPointer' onClick={login}>Sign up</span>
                    }</li>
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
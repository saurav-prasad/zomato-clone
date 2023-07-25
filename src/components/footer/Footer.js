import React from 'react'
import './footer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerContainer maxWidth'>
        {/* first footer */}
        <div className='firstFooter flexCenter'>
          <img className='footerLogo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
          <div className='flexCenter'>
            {/* footer button box */}
            <div className='footerButtonBox '>
              <img className='footerButtonBoxImage' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" alt="" />
              India
              <KeyboardArrowDownIcon className='footerButtonBoxArrow' />
            </div>
            {/* footer button box */}
            <div className='footerButtonBox '>
              <LanguageIcon className='footerButtonBoxImage' />
              India
              <KeyboardArrowDownIcon className='footerButtonBoxArrow' />
            </div>
          </div>
        </div>

        {/* bottom footer */}

        <div className="footerRow flexCenter">
          <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
            <h5 className='bottomFooterName'>ABOUT ZOMATO</h5>
            <ul className="nav flex-column">
              <li className="nav-item bottomFooterNameList mb-2"> Who We Are</li>
              <li className="nav-item bottomFooterNameList mb-2">Blog</li>
              <li className="nav-item bottomFooterNameList mb-2">Work With Us</li>
              <li className="nav-item bottomFooterNameList mb-2">Investor Relations</li>
              <li className="nav-item bottomFooterNameList mb-2">Report Fraud</li>
              <li className="nav-item bottomFooterNameList mb-2">Contact Us</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
            <h5 className='bottomFooterName'>ZOMAVERSE</h5>
            <ul className="nav flex-column">
              <li className="nav-item bottomFooterNameList mb-2">Zomato</li>
              <li className="nav-item bottomFooterNameList mb-2">Blinkit</li>
              <li className="nav-item bottomFooterNameList mb-2">Feeding India</li>
              <li className="nav-item bottomFooterNameList mb-2">Hyperpure</li>
              <li className="nav-item bottomFooterNameList mb-2">Zomaland</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
            <h5 className='bottomFooterName'>FOR RESTAURANTS</h5>
            <ul className="nav flex-column">
              <li className="nav-item bottomFooterNameList mb-2">Partner With Us</li>
              <li className="nav-item bottomFooterNameList mb-2">Apps For You</li>
            </ul>
            <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
              <h5 className='bottomFooterName'>FOR ENTERPRISES</h5>
              <ul className="nav flex-column">
                <li className="nav-item bottomFooterNameList mb-2">Zomato For Enterprise</li>
              </ul>
            </div>
          </div>
          
          <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
            <h5 className='bottomFooterName'>LEARN MORE</h5>
            <ul className="nav flex-column">
              <li className="nav-item bottomFooterNameList mb-2">Privacy</li>
              <li className="nav-item bottomFooterNameList mb-2">Security</li>
              <li className="nav-item bottomFooterNameList mb-2">Terms</li>
              <li className="nav-item bottomFooterNameList mb-2">Sitemap</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 bottomFooterBoxes">
            <h5 className='bottomFooterName'>SOCIAL LINKS</h5>
            <ul className="nav flex-column">
              <li className="nav-item bottomFooterNameList mb-2"><img className='footerDownloadImage' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></li>
              <li className="nav-item bottomFooterNameList mb-2"><img className='footerDownloadImage' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></li>

            </ul>
          </div>

        </div>

        <div className="d-flex flex-column pt-4 flex-sm-row justify-content-between border-top">
          <p className='footerText pb-2'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
        </div>

      </div>
    </div >
  )
}

export default Footer
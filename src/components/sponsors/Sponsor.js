import React from 'react'
import './sponsor.css'

function Sponsor() {
    return (
        <div className='sponsor flexCenter'>
            <img className='sponsorImage' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
            <div className='sponsorElements'>
                <h1 className='sponsortHeader'>Get the Zomato app</h1>
                <p className='sponsorFirstPara'>We will send you a link, open it on your phone to download the app</p>
                {/* radio buttons */}
                <div className='sponsorRadioContainer'>
                    <div className="form-check   form-check-inline">
                        <input className="form-check-input cursorPointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked value="option1" />
                        <label className="form-check-label cursorPointer" for="inlineRadio1">Email</label>
                    </div>
                    <div className="form-check  form-check-inline">
                        <input className="form-check-input cursorPointer text-danger" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label cursorPointer" for="inlineRadio2">Phone</label>
                    </div>
                </div>
                {/* input */}
                <div className='sponsorInputSection'>
                    <input className='sponsorInput' type="text" placeholder='Type here'/>
                    <button className='btn btn-danger sponsorInputBtn' type="button" >Share App Link</button>
                </div>
                <p className='sponsorSecondPara'>Download app from</p>
                {/* images */}
                <div>
                    <img className='footerDownloadImage' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                    <img className='footerDownloadImage' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sponsor
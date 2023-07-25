import React from 'react'
import Collection from '../collections/Collection'
import Sponsor from '../sponsors/Sponsor'
import Accordion from '../accordion/Accordion'
import Footer from '../footer/Footer'
import Category from '../category/Category'
import MainHeader from '../mainHeader/MainHeader'
import Cities from '../cities/Cities'

function Main() {
  return (
    <div>
        <MainHeader/>
        <Category/>
        <Collection/>
        <Cities/>
        <Sponsor/>
        <Accordion/>
        <Footer/>
    </div>
  )
}

export default Main
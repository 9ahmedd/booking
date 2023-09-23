import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featutred/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
      <div>
        <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer/>
      </div>
      </div>
  )
}

export default Home
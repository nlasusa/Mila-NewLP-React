import * as React from "react";
import "./App.css";
import AOS from 'aos'

import Header from './components/Header'
import Photothingy from './components/Photothingy'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Banner from './components/BannerOne'
import Header2 from './components/Header2'
import Footer from './components/Footer'


const photoThingData = require('./staticData/photoThingy')


function App() {
  // Luckily AOS also has an npm node module so let use that instead of the script tag at the bottom of your index.html
  
  AOS.init()
  return (
    <>
      <Header/>
      <div className="bg-image img1">
        <div className="container">
          <div className="row">
            <div className="lg-col-12">
              <Banner/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image img2">
        <div id="login">
          <div className="container" data-aos="fade-left">
            <div className="row">
              <div className="lg-col-6">
                <RegistrationForm/>
              </div>
            </div>
            <div className="row">
              <div className="lg-col-6">
                <LoginForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image img3">
      <div className="container">
        <div className="row">
        <Header2/> 
          <div className="lg-col-12">
            {photoThingData && photoThingData.map((item, i) => {
              return <Photothingy
                textclass={item.typeclass}
                key={i}
                item={item.classname}
                aosAction={item.aosAction}
                captions={item.captions}
              />
            })}
          </div>
        </div>
        </div>
      </div>
      <div className="bg-image img4">
      <Footer/>
      </div>
    </>
  )
}

export default App;


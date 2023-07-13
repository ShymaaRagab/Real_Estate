import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import  Contact from "../../components/Contact/Contact"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import Slider from "../../components/Slider/Slider"


function Home() {
  return (
    <>
    <Header />
    <Contact />
    <Footer/>
    <ScrollToTop />
    </>
)
}

export default Home;
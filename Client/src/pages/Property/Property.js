import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import Slider from "../../components/Slider/Slider"
import PropertyPage from '../../components/Property/PropertyPage'
import Search from '../../components/Search/Search'


function Home() {
return (
    <>
    <Header />
    <Slider />
    <Search />
    <PropertyPage/>
    <Footer/>
    <ScrollToTop />
    </>
)
}

export default Home;

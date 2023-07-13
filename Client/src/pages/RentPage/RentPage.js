import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import RentPage from "../../components/RentPage/RentPage"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import Slider from "../../components/Slider/Slider"
import Search from "../../components/Search/Search"


function Home() {
return (
    <>
    <Header />
    <Slider/>
    <Search/>
    <RentPage/>
    <Footer/>
    <ScrollToTop />
    </>
)
}

export default Home;
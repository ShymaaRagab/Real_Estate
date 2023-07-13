import React from 'react'
import Buy from "../../components/Buy/Buy"
import Checkout from "../../components/Checkout/Checkout"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import More from "../../components/More/More"
import Rent from "../../components/Rent/Rent"
import Sale from "../../components/Sale/Sale"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import Slider from "../../components/Slider/Slider"
import Search from "../../components/Search/Search"


function Home() {
return (
    <>
    <Header />
    <Slider/>
    <Search/>
    <Footer/>
    <ScrollToTop />
    </>
)
}

export default Home;

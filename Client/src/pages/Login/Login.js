import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"
import Login from "../../components/Login/Login"


function Home() {
return (
    <>
    <Header />
    <Login/>
    <Footer/>
    <ScrollToTop />
    </>
)
}

export default  Home;
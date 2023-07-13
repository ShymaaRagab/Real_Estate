import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter,Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Property from "./pages/Property/Property";
import Contact from "./pages/Contact/Contact";
import HomeServices from "./pages/HomeServices/HomeServices";
import Search from "./pages/Search/Search";
import Submit from "./pages/Submit/Submit";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { SearchProvider } from "../src/components/Search/SearchContext";
import SalePage from "./pages/SalePage/SalePage";
import RentPage from "./pages/RentPage/RentPage";
import Cairo from "./pages/Cairo/cairo";
import Giza from "./pages/Giza/giza";
import Alex from "./pages/Alex/alex";


function App() {
  return (
<SearchProvider>
<div className="App">
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route path="/property/:id" element={<Property/>} />
      <Route path = "/Contact" element={<Contact/>}/>
      <Route path = "/HomeServices" element={<HomeServices/>}/>
      <Route path = "/Search" element={<Search/>}/>
      <Route path = "/Submit" element={<Submit/>}/>
      <Route path = "/Login" element={<Login/>}/>
      <Route path = "/User-Profile" element={<Profile/>}/>
      <Route path = "/Sale-Page" element={<SalePage/>}/>
      <Route path = "/Rent-Page" element={<RentPage/>}/>
      <Route path = "/Cairo-Page" element={<Cairo/>}/>
      <Route path = "/Giza-Page" element={<Giza/>}/>
      <Route path = "/Alex-Page" element={<Alex/>}/>
    </Routes>
</div>
</SearchProvider>
  );
}



export default App;

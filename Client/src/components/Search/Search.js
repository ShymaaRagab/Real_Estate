import React from 'react';
import axios from 'axios';
import './Search.scss';
import { useEffect, useState } from "react";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import  { useContext } from 'react';
import { SearchContext } from './SearchContext';
import { useNavigate } from "react-router-dom";




const Search = ({task,deleteTask,onToggle}) =>  {
  const navigate = useNavigate();
  const { searchResults, setSearchResults,} = useContext(SearchContext);
  const [Data,setData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [Status,setStatus] = useState("rent");
  const [Type,setType] = useState('Apartment');
  const [Location,setLocation] = useState('Cairo');
  const config = {
        headers:{
            'Access-Control-Allow-Origin': '*',
        }
    };

  const statusChange = (event) => {
    setStatus(event.target.value);
  }
  const locationChange = (event) => {
    setLocation(event.target.value);
  }
  const typeChange = (event) => {
    setType(event.target.value);
  }
  useEffect(() => {
    setSearchResults([]);

    return () => {
      setSearchResults([]);
    };
  }, []);
  const HandleClick = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/properties/search?type=${Type}&status=${Status}&location=${Location}`,config).then(
        (res) => {
          console.log(res.data); // Check the structure of the response data

          setData(res.data.properties);
          const updatedData = res.data.properties.map(property => {
            const updatedImages = property.images.map(imageName => `http://localhost:5000/uploads/properties/${imageName}`);
            return { ...property, images: updatedImages };
          });
    
          setSearchResults(updatedData);
            
        }
        )
        .catch(err => {
            console.log(err);
        // some error handling
        });
        navigate(`/search`);
  }
  return (
<div class="parent">
  <div class="box">
    <div class="search-box">
    <div class="Search-select">
        <div class="sec">
          <div class="label">
            <label for="Property_Status">Property Status</label>
          </div>
          <div class="select">
            <select name="property-Status" onChange={statusChange} id="Property-status">
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>
          </div>
        </div>
      </div>
      <div class="Search-select">
        <div class="sec">
          <div class="label">
            <label for="location">Location</label>
          </div>
          <div class="select">
            <select name="location" onChange={locationChange} id="location">
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
            </select>
          </div>
        </div>
      </div>
      <div class="Search-select">
        <div class="sec">
          <div class="label">
            <label for="Property-Type">Property Type</label>
          </div>
          <div class="select">
            <select onChange={typeChange} name="Property-Type" id="Property-Type">
              <option value="Office">Office</option>
              <option value="Shop">Shop</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
        </div>
      </div>
      <div class="btn1">
        <button type="button" onClick={HandleClick} id="search-button">Search</button>
      </div>
    </div>
  </div>  
  <div className="sale">
      <div className="container-sale">
        <div className="sale-row">
          {searchResults.map(object =>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src={object.images[0]} alt="Property" />
                </a>
                <div className="overlay-sale"></div>
                <button>View Properties</button>
              </div>
              <div className="title-sale">
                <h2>{object.name}</h2>
                <p>{object.description.length > 100
                    ? `${object.description.slice(0, 300)}...`
                    : object.description}
                </p>
                <ul>
                  <li>
                    <BedIcon />
                    {object.rooms}
                  </li>
                  <li>
                    <BathroomIcon />
                    {object.baths}
                  </li>
                  <li>
                    <CropDinIcon />
                    {object.size}
                  </li>
                </ul>
                <div className="bottom-sale">
                  <div className="price-sale">
                  For {object.status} <span className='price-span'>{object.price} EGP</span>
                  </div>
                  <div className="right-sale">
                    <span>
                      <FavoriteIcon />
                      <a href="#"></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>

  );
}
export default Search;
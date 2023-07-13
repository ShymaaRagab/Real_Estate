import React, { useState } from "react";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from 'axios';
import { useEffect } from "react";
import "./Sale.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Sale() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [Data,setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [number, setNumber] = useState("one");
  const [selectedSales, setSelectedSales] = useState([]);
  const userToken = localStorage.getItem("userToken");
  const config =  { 
    headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' 
    ,"Authorization" : `Bearer ${userToken}`}};


  const fetchData = async () => {
    try {
      const url = `http://localhost:5000/properties/sale?page=${currentPage}&limit=${recordsPerPage}`;
      const response = await axios.get(url);

      // Prepend base URL to image names
      const updatedData = response.data.properties.map((property) => {
        const updatedImages = property.images.map(
          (imageName) =>
            `http://localhost:5000/uploads/properties/${imageName}`
        );
        return { ...property, images: updatedImages };
      });

      setData(updatedData);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
      // handle error
    }
  };


  const setRecordsPerPageBasedOnWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1100 && recordsPerPage !== 2) {
      setRecordsPerPage(2); // Set smaller number of records per page
      setCurrentPage(1); // Reset current page when changing records per page
    } else if (windowWidth >= 1100 && recordsPerPage !== 3) {
      setRecordsPerPage(3); // Set default number of records per page
      setCurrentPage(1); // Reset current page when changing records per page
    }
  };
  
  useEffect(() => {
    fetchData();
  
    // Add event listener for window resize
    window.addEventListener("resize", setRecordsPerPageBasedOnWidth);
  
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", setRecordsPerPageBasedOnWidth);
    };
  }, [currentPage, recordsPerPage]);
  
  // Immediately call the function after rendering the component
  setRecordsPerPageBasedOnWidth();
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleViewProperties = (id) => {
    navigate(`/property/${id}`); // Navigate to the property with the given id
  };
  

  const handleFavoriteClick = (saleId) => {
    if (!userToken) {
      Swal.fire('Please login to save it to your likes', '', 'info');
      return;
  }
    setSelectedSales((prevSelectedSales) => {
      if (prevSelectedSales.includes(saleId)) {
        return prevSelectedSales.filter((id) => id !== saleId); // Deselect the sale
      } else {
        return [...prevSelectedSales, saleId]; // Select the sale
      }
    });

    axios
      .post(`http://localhost:5000/properties/${saleId}/like`, {}, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="sale">
      <div className="container-sale">
        <div className="top-sale">
          <span>Properties</span>
          <h3>For Sale</h3>
          <p>Check out latest properties for sale.</p>
        </div>
        <div className="sale-row">
          {Data.map(object =>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src={object.images[0]} alt="Property" />
                </a>
                <div className="overlay-sale"></div>
                <button onClick={() => handleViewProperties(object._id)} >View Properties</button>
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
                  <div className="price">
                  For {object.status} <span>{object.price} EGP</span>
                  </div>
                  <div className="right-sale">
                    <span data-tooltip="Added to favorites">
                    <button
                        className="favorite"
                        onClick={() => handleFavoriteClick(object._id)}
                        style={{
                          color: selectedSales.includes(object._id) ? "darkred" : "#1ea69a",
                        }}
                      >
                        <FavoriteIcon className="favorite-icon" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="btns-sale">
          <button
            style={
              number === "one"
                ? { color: "#fff", backgroundColor: "#0b8278" }
                : { color: "#0b8278", backgroundColor: "#fff" }
            }
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button
            style={
              number === "two"
                ? { color: "#fff", backgroundColor: "#0b8278" }
                : { color: "#0b8278", backgroundColor: "#fff" }
            }
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sale;

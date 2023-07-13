import React, { useState } from "react";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from 'axios';
import { useEffect } from "react";
import "./Myfavorite.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Myfavorite() {
  const [section, setSection] = useState("properties");
  const [number, setNumber] = useState("one");
  const [number2, setNumber2] = useState("one");
  const [Name,setName] = useState("");
  const [Phone,setPhone] = useState('');

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [Data,setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSales, setSelectedSales] = useState([]);

  const [Image, setImage] = useState(null);
  const userToken = localStorage.getItem("userToken");
  const config =  { 
    headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' 
    ,"Authorization" : `Bearer ${userToken}`}};

  const handleImageChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const handleDelete = (id) => {
    if (!userToken) {
      Swal.fire('Please login to save it to your likes', '', 'info');
      return;
    }
    
    axios
      .delete(`http://localhost:5000/properties/delete/${id}`, config)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Property deleted",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // Remove the deleted property from the UI
        setData(Data.filter(property => property._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyFormData = new FormData();
    bodyFormData.append('name', Name);
    bodyFormData.append('telephone', Phone);
    bodyFormData.append('profileImage', Image);

    axios.put("http://localhost:5000/users/UpdateInfo", bodyFormData, config)
      .then((res) => {
        Swal.fire({
          title: "Update done successfully",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch(err => {
        console.log(err);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There is something wrong",
        });
        // some error handling
      });
  };
  
  const handleLikeClick = () => {
    setSection("like");
    fetchDataLikes();
  };

  const fetchDataLikes = async () => {
      try {
        const url = `http://localhost:5000/users/liked-properties?page=${currentPage}&limit=${recordsPerPage}`;
        const response = await axios.get(url, config);
  
        if (response.data && response.data.likedProperties) {
          // Prepend base URL to image names
          const updatedData = response.data.likedProperties.map((property) => {
            const updatedImages = property.images.map(
              (imageName) =>
                `http://localhost:5000/uploads/properties/${imageName}`
            );
            return { ...property, images: updatedImages };
          });
          setData(updatedData);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
  };

  useEffect(() => {
    fetchDataLikes();
  
    // Add event listener for window resize
    window.addEventListener("resize", setRecordsPerPageBasedOnWidth);
  
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", setRecordsPerPageBasedOnWidth);
    };
  }, [currentPage, recordsPerPage]);

  const handlePropertyClick = () => {
    setSection("properties");
    fetchDataProperty();
  };

  const fetchDataProperty = async () => {
      try {
        const url = `http://localhost:5000/properties/Owner?page=${currentPage}&limit=${recordsPerPage}`;
        const response = await axios.get(url, config);
  
        if (response.data && response.data.properties) {
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
          console.log(updatedData);
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
  };
  useEffect(() => {
    fetchDataProperty();
  
    // Add event listener for window resize
    window.addEventListener("resize", setRecordsPerPageBasedOnWidth);
  
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", setRecordsPerPageBasedOnWidth);
    };
  }, [currentPage, recordsPerPage]);


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
        setData(Data.filter(property => property._id !== saleId));

      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
    <div>
      <div className="myfavorite">
        <div className="left">
          <ul>
            <li
              style={
                section === "like"
                  ? { backgroundColor: "#0b8278", color: "#fff" }
                  : { backgroundColor: "#f7f7f7", color: "#000" }
              }
              onClick={handleLikeClick}
            >
              Your Likes
            </li>
            <li
              style={
                section === "properties"
                  ? { backgroundColor: "#0b8278", color: "#fff" }
                  : { backgroundColor: "#f7f7f7", color: "#000" }
              }
              onClick={handlePropertyClick}
            >
              Your Properties
            </li>
            <li
              style={
                section === "update"
                  ? { backgroundColor: "#0b8278", color: "#fff" }
                  : { backgroundColor: "#f7f7f7", color: "#000" }
              }
              onClick={() => setSection("update")}
            >
              Update Information
            </li>
          </ul>
        </div>
        <div className="right">
          {section === "like" ? (
            <div className="likes">
                  <div className="sale">
                    <div className="container-sale">
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
                                  ? `${object.description.slice(0, 100)}...`
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
                                  <span data-tooltip="Removing from favorites">
                                  <button
                                      className="favorite"
                                      onClick={() => handleFavoriteClick(object._id)}
                                      style={{
                                        color: selectedSales.includes(object._id) ? "#1ea69a" : "darkred",
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
            </div>
          ) : section === "properties" ? (
            <div className="properties">
              <div className="sale">
                    <div className="container-sale">
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
                                  ? `${object.description.slice(0, 100)}...`
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
                                  <span data-tooltip="Add to favorites">
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
                              <div className="btns-e" style={{display :'flex', justifyContent:'space-between', marginTop : '4%'}}>
                                  <span style={{color: '#0b8278', fontSize: '2rem'}}>{object.isApproved? "Approved" : object.isRejected? "Rejected" : "Appending"}</span>
                                  <button 
                                    style={{
                                      borderRadius: '15px', 
                                      backgroundColor: 'rgba(255, 0, 0, 0.8)',
                                      cursor: 'pointer'
                                    }} 
                                    onClick={() => handleDelete(object._id)}
                                  >
                                    Delete
                                  </button>
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
            </div>
          ) : (
            <div className="update">
              <h1>Update Information</h1>
              <form>
                <div className="group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="group">
                  <label htmlFor="name">Your phone</label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="image">Profile image</label>
                  <input 
                  type="file" 
                  id="image"
                  onChange={handleImageChange}
                  name="images"
                  accept="image/*"
                  multiple
                  required />
                </div>
                <button onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Myfavorite;

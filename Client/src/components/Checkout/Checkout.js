import React from "react";
import "./Checkout.scss";
import Slider from "react-slick";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import  { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";






const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn-check" onClick={onClick}>
      <button className="Next">&#x2192;</button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn-check" onClick={onClick}>
      <button className="prev">&#x2190;</button>
    </div>
  );
};
function Checkout() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const [Data,setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSales, setSelectedSales] = useState([]);
  const userToken = localStorage.getItem("userToken");
  const config =  { 
    headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' 
    ,"Authorization" : `Bearer ${userToken}`}};

  const handleViewProperties = (id) => {
    navigate(`/property/${id}`); // Navigate to the property with the given id
  };
  

  const fetchData = async () => {
    try {
      const url = `http://localhost:5000/users/featured?page=${currentPage}&limit=${recordsPerPage}`;
      const response = await axios.get(url);

      // Prepend base URL to image names
      const updatedData = response.data.properties.map(property => {
        const updatedImages = property.images.map(imageName => `http://localhost:5000/uploads/properties/${imageName}`);
        return { ...property, images: updatedImages };
      });

      setData(updatedData);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    // autoplay: true,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breackpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        //   infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="checkout">
      <div className="container-check">
        <div className="top-check">
          <span>Checkout out</span>
          <h3>Featured Properties</h3>
          <p>Our hand picked properties for you.</p>
        </div>
        <div className="bottom-check">
          <Slider {...settings}>
          {Data.map(object =>
            <div className="box-check">
              <div className="img">
                <a>
                  <img src={object.images[0]} alt="Property" />
                </a>
                <div className="overlay-sale"></div>
                <button onClick={() => handleViewProperties(object._id)} >View Properties</button>
              </div>
              <div className="info">
                  <h2>{object.name}</h2>
                
                <p>
                {object.description.length > 100
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
                <div className="bottom-check">
                  <div className="price-check">
                  For {object.status} <span>{object.price} EGP</span>
                  </div>
                  <div className="right-check">
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
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

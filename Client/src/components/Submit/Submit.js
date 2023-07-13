import "./Submit.scss";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Submit() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [baths, setBaths] = useState("");
  const [rooms, setRooms] = useState("");
  const [size, setSize] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [video, setVideo] = useState(null);
  const userToken = localStorage.getItem("userToken");
  const config =  { 
    headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' 
    ,"Authorization" : `Bearer ${userToken}`}};
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files);
      setImageArray(Array.from(e.target.files));
    }
  };

  const handleVideoChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!userToken) {
        Swal.fire('Please login to submit your property', '', 'info');
        return;
    }


    const bodyFormData = new FormData();
    bodyFormData.append('name', title);
    bodyFormData.append('description', description);
    bodyFormData.append('price', price);
    bodyFormData.append('location', location);
    bodyFormData.append('address', address);
    bodyFormData.append('type', type);
    bodyFormData.append('status', status);
    bodyFormData.append('rooms', rooms);
    bodyFormData.append('size', size);
    bodyFormData.append('baths', baths);
    imageArray.forEach((file, index) => {
      bodyFormData.append('images', file);
    });
    bodyFormData.append('video', video);
    bodyFormData.append('phone', phone);
    for (var key of bodyFormData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    fetch('http://localhost:5000/users/addproperty', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: bodyFormData,
    }).then(
        (res) => {
          console.log(res);
            Swal.fire({
          title: "Add done successfully",
          icon: "success",
          confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
        )
        .catch(err => {
          console.log(err);
              return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "there is something is Wrong",
            });
        // some error handling
      });
  };

  return (

<div>
<form enctype="multipart/form-data" onSubmit={handleSubmit}>
  <div className="container-submit">
      <div className="box-submit">
          <div className="chose-submit">
              <div className="head-submit">
                    <div className="head-l-submit">
                    <div className="sec0">
                          <input type="text" required onChange={(e) => setTitle(e.target.value)} />
                        <label>Title</label>
                    </div>
                      <div className="sec1">
                        <input type="number" onChange={(e) => setPrice(e.target.value)} required/>
                          <label>Price</label>
                          </div>
                        <div className="sec2">
                          <input type="text" onChange={(e) => setAddress(e.target.value)} required/>
                        <label>Address</label>
                    </div>
                    <div className="sec3">
                      <input type="text" onChange={(e) => setPhone(e.target.value)} required/>
                      <label>Phone Number</label>                      
                    </div>
                    <div className="sec4">
              <label htmlFor="image-upload" className="custom-file-upload">
                <i className="fa-solid fa-camera fa-l"></i>
                Choose Images
              </label>
              <input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                name="images"
                accept="image/*"
                multiple
                required
              />
            </div>
            <div className="secv">
              <label htmlFor="video-upload" className="custom-file-upload">
                <i className="fas fa-regular fa-video"></i>
                Choose Video
              </label>
              <input
                id="video-upload"
                type="file"
                onChange={handleVideoChange}
                name="images"
                accept="video/*"
                
              />
            </div>
                      </div>
                      <div className="head-R-submit">
                      <div className="sec1">
                  <label htmlFor="property-status">Property Status</label>
                  <select name="property-status" onChange={(e) => setStatus(e.target.value)} id="property-status" required>
                  <option value="">Select Status</option>
                    <option value="rent">For Rent</option>
                    <option value="sale">For Sale</option>
                  </select>
                </div>
                <div className="sec2">
                  <label htmlFor="location">Location</label>
                  <select name="location" onChange={(e) => setLocation(e.target.value)} id="location" required>
                    <option value="">Select Location</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alexandria">Alex</option>
                  </select>
                </div>
                <div className="sec3">
                  <label htmlFor="Property-Type">Property Type</label>
                  <select name="Property-Type" onChange={(e) => setType(e.target.value)} id="Property-Type" required>
                    <option value="">Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Shop">Shop</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
  </div>
              </div>
              <div className="center-submit">
                
                <div className="row-div">
                  <div><i className=" fas fa-thin fa-bed"></i><span className="row-submit"><input type="number" onChange={(e) => setRooms(e.target.value)} placeholder="Bedrooms" required/></span></div>  
                </div>
                <div className="row-div">
                  <div><i className="fas fa-shower"></i><span className="row-submit"><input type="number"  onChange={(e) => setBaths(e.target.value)} placeholder="BathRooms"required/></span></div>
                </div>
                <div className="row-div">
                  <div>
                  <i className="fas fa-light fa-ruler-combined"></i><span className="row-submit"><input type="number" onChange={(e) => setSize(e.target.value)} placeholder="Area " required/></span>
                  </div>
                </div>
                
              </div>
              <div className='des-submit'>
              <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} placeholder='Type Detailes...'required></textarea>
                </div>       
          </div>
      </div>
      <div className="btn-submit">
                <button  type="submit">
                    Submit
                  </button>
              </div> 
  </div>
  </form>
</div>

  );
}

export default Submit;


import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneIcon from './PhoneIcon';
import './Propert.css';


const Block = { display: "block" };
const W_100 = { width: 100 };
const config = {
    options: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  };

function openWhatsApp(Data) {
  if (Data.owner && Data.owner.telephone) {
    var phoneNumber = "+20" + Data.owner.telephone;
    var message = "Hello, I'm interested in [Home in Merrick Way] https://demo.realhomes.io/header-three/property/home-in-merrick-way/"; // Replace with your desired message
    var encodedMessage = encodeURIComponent(message);
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;
    window.open(whatsappUrl, "_blank");
  }
}

const Property = () => {
  const { id } = useParams(); // Access the property ID from the URL
    console.log( "this is " + id);
  const [Data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [ownerImageUrl, setOwnerImageUrl] = useState('');

  const fetchExcuse = () => {
    axios
      .get(`http://localhost:5000/properties/${id}`, config) // Use the property ID from the URL
      .then((res) => {
        setData(res.data);
        const urls = res.data.images.map((imageName) => `http://localhost:5000/uploads/properties/${imageName}`);
        setImageUrls(urls);
        const videoUrl = res.data.video ? `http://localhost:5000/${res.data.video}` : ''; // Check if video exists in the response data
        setVideoUrl(videoUrl);
        const ownerImageUrl = res.data.owner.profileImage ? `http://localhost:5000/uploads/profiles/${res.data.owner.profileImage}` : '';
        setOwnerImageUrl(ownerImageUrl);
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listen to window resize event

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  useEffect(() => {
    fetchExcuse();
  }, [id]);

    useEffect(() => {
        if (Data) {
            openWhatsApp(Data);
        }
    }, [Data]);
    
    
    
    return (
        <div className="App">
            <div className="inspiry_show_on_doc_ready rh_prop_search rh_prop_search_init" style={Block}>                    
            </div>
            <section className="rh_section rh_wrap--padding rh_wrap--topPadding">
                <div className="rh_page rh_page--fullWidth">
                    <div className="rh_page__head rh_page__property">
                        <div className="rh_page__property_title">
                            <img className="only-for-print inspiry-qr-code" src="https://chart.googleapis.com/chart?cht=qr&amp;chs=90x90&amp;chl=https://modern.realhomes.io/property/home-in-merrick-way/&amp;choe=UTF-8" alt="Home in Merrick Way"/>
                                <div className="page-breadcrumbs page-breadcrumbs-modern">
                                    <nav className="property-breadcrumbs">
                                        <ul>
                                            <li> <a href="https://modern.realhomes.io/">Home</a><i className="breadcrumbs-separator fas fa-angle-right"></i></li>
                                            <li> <a href="https://modern.realhomes.io/property-city/miami/">{Data.location}</a></li>
                                        </ul>
                                    </nav>
                                </div>

                                <h1 className="rh_page__title">{Data.name}</h1>

                                <p className="rh_page__property_address">
                                    {Data.address} </p>
                        </div>

                        <div className="rh_page__property_price">
                            <p className="status">
                                For {Data.status} </p>
                                <p className="price">
                                {Data.price} EGP</p>
                        </div>
                    </div>
                    <div className="rh_property">
                    <div className="property-detail-slider-wrapper clearfix">
                        <div className="inspiry_property_masonry_style images_7">
                            {imageUrls.map((imageUrl, index) => (
                            <a
                                key={index}
                                className="slider-img"
                                data-fancybox="gallery"
                                href={imageUrl}
                                data-thumb={imageUrl}
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            >
                                <img src={imageUrl} alt={`Image ${index + 1}`} />
                            </a>
                            ))}
                            
                        </div>
                        </div>
                        <div className="rh_property__wrap rh_property--padding">
                                        <div className="rh_property__main">
                                            <div id="property-content" className="rh_property__content clearfix">
                                                <div id="property-content-section-overview" className="property-content-section property-overview">
                                                    <div className="rh_property__row rh_property__meta rh_property--borderBottom">
                                                    <div className="rh_property__id">
                                                        <p className={`title ${isSmallScreen ? 'small' : ''}`}>Property ID:</p>
                                                        <p className={`id ${isSmallScreen ? 'small' : ''}`}>
                                                            &nbsp;{Data._id}
                                                        </p>
                                                        </div>
                                                        <div className="rh_property__print">
                                                            <span className="favorite-btn-wrap favorite-btn-45">
                                                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="45" data-tooltip="Added to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>
                                                                </span>
                                                                <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="45" data-tooltip="Add to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>							
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="rh_property__row rh_property__meta_wrap">
                                                        <div className="rh_property__meta prop_bedrooms">
                                                            <span className="rh_meta_titles">
                                                                Bedrooms
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.rooms}</span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_bathrooms">
                                                            <span className="rh_meta_titles">
                                                                Bathrooms            
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
                                                                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.baths}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="rh_property__meta prop_lot_size">
                                                            <span className="rh_meta_titles">
                                                                Lot Size 
                                                        </span>
                                                            <div>
                                                                <svg width="24" height="24" xmlnsDefault="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                    <rect fill="none" height="26" width="26" y="-1" x="-1"></rect>
                                                                    </g>
                                                                    <g>
                                                                    <rect x="1" y="1" id="svg_1" width="32" height="32" fill="none"></rect>
                                                                    <path className="rh_svg" stroke="null" fill="#1ea69a" id="svg_2" d="m23.952237,12l-4.482089,-4.170255l0,2.78017l-1.49403,0l0,-4.170255l-4.482089,0l0,-1.390085l2.988059,0l-4.482089,-4.170255l-4.482089,4.170255l2.988059,0l0,1.390085l-4.482089,0l0,4.170255l-1.49403,0l0,-2.78017l-4.482089,4.170255l4.482089,4.170255l0,-2.78017l1.49403,0l0,4.170255l4.482089,0l0,1.390085l-2.988059,0l4.482089,4.170255l4.482089,-4.170255l-2.988059,0l0,-1.390085l4.482089,0l0,-4.170255l1.49403,0l0,2.78017l4.482089,-4.170255zm-7.470148,4.170255l-8.964178,0l0,-8.34051l8.964178,0l0,8.34051z"></path>
                                                                    </g>
                                                                </svg> 
                                                                <span className="figure">
                                                                    {Data.size}
                                                                </span>
                                                                <span className="label">
                                                                    M	
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-content" className="property-content-section">
                                                    <h4 className="rh_property__heading">Description </h4>
                                                    <div className="rh_content">

                                                        <p>{Data.description}</p>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-video" className="property-content-section rh_property__video">
                                                    {videoUrl && ( // Check if videoUrl is available
                                                        <div>
                                                            <h4 className="rh_property__heading">Property Video</h4>
                                                            <div className="rh-property-videos-slider-inner-wrap">
                                                                <div className="rh_wrapper_property_videos_slider flexslider">
                                                                    <ul className="slides">
                                                                        <li style={Block}>
                                                                            <div className="rh_property_video">
                                                                                <div className="rh_property_video_inner">
                                                                                    <h5 className="rh_video_title">Video Tour</h5>
                                                                                    {videoUrl ? (
                                                                                        <a
                                                                                            data-fancybox=""
                                                                                            href={videoUrl}
                                                                                            className="inspiry-lightbox-item"
                                                                                            data-autoplay="true"
                                                                                            data-vbtype="video"
                                                                                        >
                                                                                            <div className="play-btn"></div>
                                                                                            {imageUrls.length > 0 ? (
                                                                                                <img src={imageUrls[0]} alt={`Image`} />
                                                                                            ) : (
                                                                                                <div>No image available</div>
                                                                                            )}
                                                                                        </a>
                                                                                    ) : (
                                                                                        <div>No video available</div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="rh_property__sidebar" data-sticky="true" data-top-gap="60" data-bottom-gap="60" style={{position:"sticky",top:'-1168px',height:'fit-content'}}>
                                            <aside className="rh_sidebar">
                                                <section className="widget rh_property_agent  ">
                                                {Data.owner ? (
                                                    <a className="agent-image" href="#">
                                                        <img
                                                        width="210"
                                                        height="210"
                                                        src={ownerImageUrl} // Update to Data.owner.imageUrl
                                                        className="attachment-agent-image size-agent-image wp-post-image"
                                                        alt="Real Estate Agent"
                                                        decoding="async"
                                                        loading="lazy"
                                                        sizes="(max-width: 210px) 100vw, 210px"
                                                        />
                                                    </a>
                                                    ) : (
                                                    <p>Loading...</p>
                                                    )}
                                                    {Data.owner ? (
                                                        <h3 className="rh_property_agent__title">{Data.owner.name}</h3>
                                                            ) : (
                                                                        <p>Loading...</p>
                                                            )}
                                                    <div className="rh_property_agent__agent_info">
                                                        <p className="contact mobile">
                                                            <span>Mobile:&nbsp;</span>
                                                            
                                                            {Data.owner ? (
                                                            <a href="tel:1-234-456-7892">{Data.owner.telephone}</a>
                                                                ) : (
                                                                            <p>Loading...</p>
                                                                )}
                                                        </p>
                                                        
                                                        <p className="contact email">
                                                            <span>Email:&nbsp;</span>
                                                            {/*<a href="mailto:melissa@realhomes.io">{Data.owner.email}</a>*/}
                                                            {Data.owner ? (
                                                            <a href="mailto:melissa@realhomes.io">{Data.owner.email}</a>
                                                                ) : (
                                                                            <p>Loading...</p>
                                                                )}
                                                        </p>
                                                    </div>
                                                </section>
                                                {Data.owner ? (
                                                            <div className="sidebar-agent-form-contact-methods-wrapper">
                                                            <a
                                                                className="btn-whatsapp-chat rh-btn rh-btn-primary rh_property_agent__link"
                                                                href="#"
                                                                onClick={() => openWhatsApp(Data)}
                                                            >
                                                                
                                                                <svg 
                                                                enable-background="new 0 0 336 235.2" 
                                                                height="42.5" viewBox="0 0 42.5 42.5" 
                                                                width="42.5" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m2 0h42.5v42.5h-42.5z" fill="none" style={{ fillOpacity: 0}} pointerEvents="none"></path>
                                                                    <path d="m380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111l-31.5 115 117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" transform="matrix(.09375 0 0 .09375 .333336 -2.833329)"></path>
                                                                </svg>
                                                                <span className="btn-text" style={{ fillOpacity: 0,color: '#fff'}}>WhatsApp</span>
                                                            </a>
                                                            <a className="btn-call-now rh-btn rh-btn-primary rh_property_agent__link" href="tel:1-234-456-7892">
                                                                <PhoneIcon />
                                                                <span className="btn-text">Call Now</span>
                                                                </a>
                                                            </div>
                                                                ) : (
                                                                            <p>Loading...</p>
                                                                )}

                                                
                                            </aside>
                                        </div>
                                        
                                    </div>
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default Property
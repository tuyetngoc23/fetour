/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/tourdetail.css'
import img10 from '../asset/images/img10.jpg'
import img11 from '../asset/images/img11.jpg'
import img12 from '../asset/images/img12.jpg'
import Slider from 'react-slick'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux'



function TourDetail() {
    //show itel
    const onshow = (e) => {
        const collapse = document.querySelectorAll('.collapse');
        collapse.forEach(element => {
            if (element.classList.contains("show")) {
                return element.classList.remove("show");
            } else {
                return element.classList.add("show");
            }
        });
    }
    //slick
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        autoplay: true,
    };
    const settings2 = {
        slidesToShow: 6,
        infinite: true,
        // asNavFor: '#sliderSyncingNav',
        isThumbs: true,
        focusOnSelect: true,
        swipeToSlide: true,
        reponsive: [{
            "breakpoint": 992,
            "settings": {
                "slidesToShow": 4
            }
        }, {
            "breakpoint": 768,
            "settings": {
                "slidesToShow": 3
            }
        }, {
            "breakpoint": 554,
            "settings": {
                "slidesToShow": 2
            }
        }]
    };
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    React.useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    }, [])
    //lay tourPlace theo id tour
    const { id } = useParams();
    const [tourPlace, setTourPlace] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour/tourplace/${id}`)
            .then(res => {
                setTourPlace(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    //
    let soNgay2 = [];
    for(let i = 1; i <= tourPlace.length; i++){
        soNgay2.push(i);
    }
    //book
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infa, setInfa] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const dispatchTour = useDispatch();

    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour/${id}`)
            .then(res => {
                dispatchTour({
                    type: "GET_TOUR",
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }, [id, dispatchTour])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if((Number.parseInt(adult)+Number.parseInt(infa)+Number.parseInt(child)) > tourPlace[0].tour.max_amount){
            alert("Số vé vượt mức cho phép");
        }else{
            if(adult === 0 & (child !== 0 || infa !== 0)){
                alert("Trẻ nhỏ và trẻ em cần có người lớn đi cùng")
            }else{
                if(adult === 0 & child === 0 & infa === 0){
                    alert("Vui lòng chọn ít nhất một vé")
                }else{
                    dispatch({
                        type: "BOOK_AMOUNT",
                        payload: [adult, child, infa]
                    })
                    history.push(`/booking`)
                }
            }
            
        }
    }

    
    return (
        <div className="fix-container" >
            <div className="row" style={{ margin: '50px', paddingTop: '20px' }}>
                {
                    tourPlace.length > 0 &&
                    <div className="col-lg-8 col-xl-9" key={tourPlace[0].tour.id}>
                        <div className="d-block d-md-flex flex-center-between align-items-start mb-3">
                            <div className="mb-1">
                                <div className="mb-2 mb-md-0">
                                    <h2 className="mb-1 mr-3">{tourPlace[0].tour.name}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 mb-4">
                            <ul className="mb-4 list-group list-group-borderless list-group-horizontal row">
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className="text-primary mr-2  far fa-clock" />
                                    <div className="ml-1 text-gray-1"><Moment diff={tourPlace[0].tour.start_day} unit="days">{tourPlace[0].tour.end_day}</Moment> Ngày</div>
                                </li>
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className=" text-primary  mr-2 fas fa-user-friends" />
                                    <div className="ml-1 text-gray-1">Max People : {tourPlace[0].tour.max_amount}</div>
                                </li>
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className="text-primary  mr-2 fas fa-wifi" />
                                    <div className="ml-1 text-gray-1">Wifi Available</div>
                                </li>
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className=" text-primary mr-2 far fa-calendar-alt" />
                                    <div className="ml-1 text-gray-1"><Moment format="D MMM">{tourPlace[0].tour.start_day}</Moment>-<Moment format="D MMM">{tourPlace[0].tour.end_day}</Moment></div>
                                </li>
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className="text-primary mr-2 fas fa-user" />
                                    <div className="ml-1 text-gray-1 ">Min People : {tourPlace[0].tour.min_amount}</div>
                                </li>
                                <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                    <i className=" text-primary mr-2 fas fa-plane" />
                                    <div className="ml-1 text-gray-1">Pickup: {tourPlace[0].tour.vehicle.ten}</div>
                                </li>
                            </ul>
                            <div className="position-relative">
                                {/* Images Carousel */}
                                <div>
                                    <Slider {...settings} ref={slider1} id="sliderSyncingNav" >
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3 resize-img" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].tour.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3 resize-img" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].place.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3 resize-img" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].tour.hotel.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3" src={img10} alt="Image Description" />
                                        </div>
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3" src={img11} alt="Image Description" />
                                        </div>
                                        <div className="js-slide">
                                            <img className="img-fluid border-radius-3" src={img12} alt="Image Description" />
                                        </div>
                                    </Slider>
                                    <div className="position-absolute right-0 mr-3 mt-md-n11 mt-n9">
                                        <div className="flex-horizontal-center">
                                            {/* Video */}
                                            <a className="btn btn-white transition-3d-hover py-2 px-md-5 px-3 shadow-6 mr-1" hidden={true} href="//www.youtube.com/watch?v=Vfk5VuUpJ-o" data-src="//www.youtube.com/watch?v=Vfk5VuUpJ-o" data-speed={700}>
                                                <i className="far fa-play-circle mr-md-2 text-primary" /><span className="d-none d-md-inline">Video</span>
                                            </a>
                                            {/* End Video */}
                                        </div>
                                    </div>
                                    <Slider {...settings2} asNavFor={nav1} id="sliderSyncingThumb"
                                        ref={slider2}>
                                        <div className="js-slide mr-fix" >
                                            <img className="img-fluid1 border-radius-3 height-110 resize1-img" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].tour.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                            <img className="img-fluid1 border-radius-3 height-110 resize1-img" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].place.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                            <img className="img-fluid1 border-radius-3 height-110" src={`${process.env.PUBLIC_URL}/asset/images/${tourPlace[0].tour.hotel.image}`} alt="Image Description" />
                                        </div>
                                        <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                            <img className="img-fluid1 border-radius-3 height-110" src={img10} alt="Image Description" />
                                        </div>
                                        <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                            <img className="img-fluid1 border-radius-3 height-110" src={img11} alt="Image Description" />
                                        </div>
                                        <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                            <img className="img-fluid1 border-radius-3 height-110" src={img12} alt="Image Description" />
                                        </div>
                                    </Slider>
                                </div>
                                {/* End Images Carousel */}
                            </div>
                        </div>
                        <div className="border-bottom position-relative">
                            <h5 id="scroll-description" className="title-nav">
                                Description
                            </h5>
                            <p className="mb-4 article">{tourPlace[0].tour.content}</p>
                            <h4>Note</h4>
                            <p className="mb-4 article">{tourPlace[0].tour.note}</p>
                        </div>
                        <div className="border-bottom py-4">
                            <h5 id="scroll-itinerary" className="title-nav">
                                Itinerary
                            </h5>
                            <div id="basicsAccordion1" >
                                {/* Card */}
                                {
                                    tourPlace.map((item, index) => (
                                        <div className="card border-0 mb-3" key={item.id}>
                                            <div className="card-header border-bottom-0 p-0" id="basicsHeadingOne1">
                                                <h5 className="mb-0">
                                                    <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0" onClick={onshow}>
                                                        <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                            <i className="far fa-circle" />
                                                        </div>
                                                        <div className="text-primary flex-shrink-0">Day {soNgay2[index]}<span className="px-2">-</span> </div>
                                                        <h5 className="font-weight-bold text-gray-3 text-left mb-0">{item.place.name}</h5>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="basicsCollapseOne1" className="collapse" aria-labelledby="basicsHeadingOne1" data-parent="#basicsAccordion1">
                                                <div className="card-body pl-6 pb-0 pt-0">
                                                    <p className="mb-0 article">{item.place.address}</p>
                                                    <p className="mb-0 article">{item.place.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* End Card */}
                            </div>
                        </div>

                        <div className="border-bottom py-4">
                            <h4 id="scroll-location" className="title-nav">
                                Location
                            </h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7772.225184901051!2d80.28441927545006!3d13.092050163095971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.098645!2d80.2916092!4m5!1s0x3a526f5213f46501%3A0x56d2a4b14dba42f2!2sMadras%20High%20Court%2C%20High%20Ct%20Rd%2C%20Parry's%20Corner%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600108!3m2!1d13.0867057!2d80.28774949999999!5e0!3m2!1sen!2sin!4v1580358870925!5m2!1sen!2sin" width="100%" height={480} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div>
                    </div>}
                <div className="col-lg-4 col-xl-3">
                    <div className="mb-4">
                        {
                            tourPlace.length > 0 &&
                            <div className="border border-color-7 rounded mb-5">
                            <div className="border-bottom">
                                <div className="p-4">
                                    <span style={{ fontSize: '14px' }}>Giá:</span>
                                    <span className="title-price"><NumberFormat value={tourPlace[0].tour.price} suffix="vnd" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="p-4">
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Adults : Age 18+</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <div className="flex-horizontal-center">
                                                <input className=" form-control text-center" type="number" value={adult} onChange={(e) => setAdult(e.target.value)} min={0} max={tourPlace[0].tour.min_amount} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Children: Age 6-17</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <div className="flex-horizontal-center">
                                                <input className=" form-control text-center" type="number" value={child} onChange={(e) => setChild(e.target.value)} min={0} max={tourPlace[0].tour.min_amount} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Infant: Age 0-5</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <div className="flex-horizontal-center">
                                                <input className=" form-control text-center" type="number" value={infa} onChange={(e) => setInfa(e.target.value)} min={0} max={tourPlace[0].tour.min_amount} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                <div className="text-center">
                                    <input type="submit" value="Book Now" className="btn btn-info d-flex align-items-center justify-content-center  height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"/>
                                </div>
                            </div>
                            </form>
                        </div>
                        }
                        <div className="border border-color-7 rounded p-4 mb-5">
                            <h6 className="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">Why Book With Us?</h6>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-star font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <p>No-hassle best price guarantee</p>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-support font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <p>Customer care available 24/7</p>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <p>Hand-picked Tours &amp; Activities</p>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <i className="flaticon-airplane font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <p>Free Travel Insureance</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default TourDetail

/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/tourdetail.css'
import img7 from '../asset/images/img7.jpg'
import img8 from '../asset/images/img8.jpg'
import img9 from '../asset/images/img9.jpg'
import img10 from '../asset/images/img10.jpg'
import img11 from '../asset/images/img11.jpg'
import img12 from '../asset/images/img12.jpg'
import Slider from 'react-slick'
import {useState, useRef} from 'react'


function TourDetail() {
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
    return (
        <div className="fix-container">
            <div className="row" style={{ margin: '50px', paddingTop: '20px' }}>
                <div className="col-lg-8 col-xl-9">
                    <div className="d-block d-md-flex flex-center-between align-items-start mb-3">
                        <div className="mb-1">
                            <div className="mb-2 mb-md-0">
                                <h2 className="mb-1 mr-3">5-Day Oahu Tour: Honolulu, Pearl Harbor, &amp; Diamond Head</h2>
                            </div>
                        </div>
                        {/* <ul className="list-group list-group-borderless list-group-horizontal custom-social-share">
                                <li className="list-group-item px-1">
                                    <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                                        <i className="flaticon-like font-size-18 text-dark" />
                                    </a>
                                </li>
                                <li className="list-group-item px-1">
                                    <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                                        <i className="flaticon-share font-size-18 text-dark" />
                                    </a>
                                </li>
                            </ul> */}
                    </div>
                    <div className="py-2 mb-4">
                        <ul className="mb-4 list-group list-group-borderless list-group-horizontal row">
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="text-primary mr-2  far fa-clock" />
                                <div className="ml-1 text-gray-1">5 Days</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className=" text-primary  mr-2 fas fa-user-friends" />
                                <div className="ml-1 text-gray-1">Max People : 26</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="text-primary  mr-2 fas fa-wifi" />
                                <div className="ml-1 text-gray-1">Wifi Available</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className=" text-primary mr-2 far fa-calendar-alt" />
                                <div className="ml-1 text-gray-1">Jan 18’ - Dec 21'</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="text-primary mr-2 fas fa-user" />
                                <div className="ml-1 text-gray-1 ">Min Age : 10+</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className=" text-primary mr-2 fas fa-plane" />
                                <div className="ml-1 text-gray-1">Pickup: Airpot</div>
                            </li>
                        </ul>
                        <div className="position-relative">
                            {/* Images Carousel */}
                            <div>
                                <Slider {...settings} ref={slider1} id="sliderSyncingNav" >
                                    <div className="js-slide">
                                        <img className="img-fluid border-radius-3" src={img7} alt="Image Description" />
                                    </div>
                                    <div className="js-slide">
                                        <img className="img-fluid border-radius-3" src={img8} alt="Image Description" />
                                    </div>
                                    <div className="js-slide">
                                        <img className="img-fluid border-radius-3" src={img9} alt="Image Description" />
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
                                        {/* <a className="js-fancybox btn btn-white transition-3d-hover ml-2 py-2 px-md-5 px-3 shadow-6" href="" data-src="../../assets/img/960x490/img7.jpg" data-fancybox="fancyboxGallery6" data-caption="MyTravel in frames - image #01" data-speed={700}>
                                            <i className="flaticon-gallery mr-md-2 font-size-18 text-primary" /><span className="d-none d-md-inline">Gallery</span>
                                        </a>
                                        <img className="js-fancybox d-none" alt="Image Description" data-fancybox="fancyboxGallery6" data-src="../../assets/img/960x490/img6.jpg" data-caption="MyTravel in frames - image #02" data-speed={700} />
                                        <img className="js-fancybox d-none" alt="Image Description" data-caption="MyTravel in frames - image #03" data-src="../../assets/img/960x490/img8.jpg" data-fancybox="fancyboxGallery6" data-speed={700} />
                                        <img className="js-fancybox d-none" alt="Image Description" data-fancybox="fancyboxGallery6" data-src="../../assets/img/960x490/img9.jpg" data-caption="MyTravel in frames - image #04" data-speed={700} /> */}
                                    </div>
                                </div>
                                <Slider {...settings2} asNavFor={nav1} id="sliderSyncingThumb"
                                 ref={slider2}
                               >
                                    <div className="js-slide mr-fix" >
                                        <img className="img-fluid1 border-radius-3 height-110" src={img7} alt="Image Description" />
                                    </div>
                                    <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                        <img className="img-fluid1 border-radius-3 height-110" src={img8} alt="Image Description" />
                                    </div>
                                    <div className="js-slide mr-fix" style={{ cursor: 'pointer' }}>
                                        <img className="img-fluid1 border-radius-3 height-110" src={img9} alt="Image Description" />
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
                        <p className="mb-4 article">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                        <p className="mb-4 article">Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t</p>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 id="scroll-itinerary" className="title-nav">
                            Itinerary
                        </h5>
                        <div id="basicsAccordion1" >
                            {/* Card */}
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingOne1"  >
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0" onClick={onshow}>
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle" />
                                            </div>
                                            <div className="text-primary flex-shrink-0">Day 1 <span className="px-2">-</span> </div>
                                            <h5 className="font-weight-bold text-gray-3 text-left mb-0">Barcelona – Zaragoza – Madrid</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseOne1" className="collapse" aria-labelledby="basicsHeadingOne1" data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0 article">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Card */}
                            {/* Card */}
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingTwo2" >
                                    <h5 className="mb-0">
                                        <button onClick={onshow} type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0" data-toggle="collapse" data-target="#basicsCollapseTwo2" aria-expanded="false" aria-controls="basicsCollapseTwo2">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle" />
                                            </div>
                                            <div className="text-primary flex-shrink-0">Day 2 <span className="px-2">-</span> </div>
                                            <h5 className="font-weight-bold text-gray-3 text-left mb-0">Zürich–Biel/Bienne–Neuchâtel–Geneva</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseTwo2" className="collapse" aria-labelledby="basicsHeadingTwo2" data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0 article">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Card */}
                            {/* Card */}
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingThree3" >
                                    <h5 className="mb-0">
                                        <button onClick={onshow} type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0" data-toggle="collapse" data-target="#basicsCollapseThree3" aria-expanded="false" aria-controls="basicsCollapseThree3">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle" />
                                            </div>
                                            <div className="text-primary flex-shrink-0">Day 3 <span className="px-2">-</span> </div>
                                            <h5 className="font-weight-bold text-gray-3 text-left mb-0">Enchanting Engelberg</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseThree3" className="collapse" aria-labelledby="basicsHeadingThree3" data-parent="#basicsAccordion1" >
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0 article">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Card */}
                            {/* Card */}
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingFour4">
                                    <h5 className="mb-0">
                                        <button onClick={onshow} type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0" data-toggle="collapse" data-target="#basicsCollapseFour4" aria-expanded="false" aria-controls="basicsCollapseFour4">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle" />
                                            </div>
                                            <div className="text-primary flex-shrink-0">Day 4 <span className="px-2">-</span> </div>
                                            <h5 className="font-weight-bold text-gray-3 text-left mb-0">Interlaken Area. Excursion to The Jungfrau Massif</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseFour4" className="collapse" aria-labelledby="basicsHeadingFour4" data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0 article">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Card */}

                        </div>
                    </div>
                    <div className="border-bottom py-4">
                        <h4 id="scroll-location" className="title-nav">
                            Location
                        </h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7772.225184901051!2d80.28441927545006!3d13.092050163095971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.098645!2d80.2916092!4m5!1s0x3a526f5213f46501%3A0x56d2a4b14dba42f2!2sMadras%20High%20Court%2C%20High%20Ct%20Rd%2C%20Parry's%20Corner%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600108!3m2!1d13.0867057!2d80.28774949999999!5e0!3m2!1sen!2sin!4v1580358870925!5m2!1sen!2sin" width="100%" height={480} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="mb-4">
                        <div className="border border-color-7 rounded mb-5">
                            <div className="border-bottom">
                                <div className="p-4">
                                    <span style={{ fontSize: '14px' }}>From</span>
                                    <span className="title-price">£350.00</span>
                                </div>
                            </div>
                            <div className="p-4">
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">Date</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1">
                                        <div id="datepickerWrapperPick" className="u-datepicker input-group">
                                            <input className="js-range-datepicker w-auto height-40 font-size-16 shadow-none font-weight-bold form-control hero-form bg-transparent border-0 flatpickr-input p-0" type="text" placeholder="July 7/2019" aria-label="July 7/2019" data-rp-wrapper="#datepickerWrapperPick" data-rp-date-format="M d / Y" data-rp-default-date="[&quot;Jul 7 / 2020&quot;]" />
                                        </div>
                                        {/* End Datepicker */}
                                    </div>
                                </div>
                                {/* End Input */}
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Adults</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <span className="d-block">Age 18+</span>
                                            <div className="flex-horizontal-center">
                                                <a className="js-minus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-up" />
                                                </a>
                                                <input className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-tranparent border-0 rounded p-0 mx-1 text-center" type="text" defaultValue={2} min={1} max={100} />
                                                <a className="js-plus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-down" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Children</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <span className="d-block">Age 6-17</span>
                                            <div className="flex-horizontal-center">
                                                <a className="js-minus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-up" />
                                                </a>
                                                <input className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-tranparent border-0 rounded p-0 mx-1 text-center" type="text" defaultValue={4} min={1} max={100} />
                                                <a className="js-plus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-down" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                {/* Input */}
                                <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Infant</span>
                                <div className="mb-4">
                                    <div className="border-bottom border-width-2 border-color-1 pb-1">
                                        <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
                                            <span className="d-block">Age 0-5</span>
                                            <div className="flex-horizontal-center">
                                                <a className="js-minus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-up" />
                                                </a>
                                                <input className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-tranparent border-0 rounded p-0 mx-1 text-center" type="text" defaultValue={1} min={1} max={100} />
                                                <a className="js-plus font-size-10 text-dark" href="#">
                                                    <i className="fas fa-chevron-down" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Input */}
                                <div className="text-center">
                                    <a href="../tour/tour-booking.html" className="btn btn-primary d-flex align-items-center justify-content-center  height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-color-7 rounded p-4 mb-5">
                            <h6 className="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">Why Book With Us?</h6>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-star font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">No-hassle best price guarantee</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-support font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Customer care available 24/7</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Hand-picked Tours &amp; Activities</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <i className="flaticon-airplane font-size-25 text-primary mr-3 pr-1" />
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Free Travel Insureance</a>
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

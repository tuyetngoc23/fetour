/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState, useEffect} from 'react'
import '../style/home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router'

function Home() {
    
    //getProvince
    const [province, setProvince] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/province`)
            .then(res => {
                setProvince(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //get cattour
    const [cat, setCat] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/cat`)
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //get List Tours
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour`)
            .then(res => {
                setTours(res.data.slice(-4))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data.slice(-6))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //
    const [date, setDate] = useState('');
    const [cattour, setCattour] = useState('')
    const [prov, setProv] = useState('')
    
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`${date}, ${cattour}, ${prov}`);
        history.push(`/tour?date=${date}&cattour=${cattour}&prov=${prov}`);
    }


    return (
        <>
            <div className="where_togo_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="form_area">
                                <h3>Where you want to go?</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="search_wrap">
                                <form className="search_form" onSubmit={handleSubmit}>
                                    <div className="input_field">
                                        <input id="datepicker" placeholder="Date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                    </div>
                                    <div className="input_field">
                                        <select className="choose" value={cattour} name="cattour" onChange={(e) => setCattour(e.target.value)}>
                                            <option data-display="Tour Type">Tour Type</option>
                                            {
                                                cat.length > 0 && cat.map(item => (
                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="input_field">
                                        <select className="choose" value={prov} name="prov" onChange={(e) => setProv(e.target.value)}>
                                            <option data-display="Destination">Destination</option>
                                            {
                                                province.length > 0 && province.map(item => (
                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="search_btn">
                                        <button className="boxed-btn4 " type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-sm">
                <div className="container">
                    <h3 className="oh-desktop"><span className="d-inline-block slideInDown">Hot Tours</span></h3>
                    <div className="row row-sm row-40 row-md-50">
                        {
                            tours && tours.map(item =>
                                <div className="col-sm-6 col-md-12 fadeInRight" key={item.id}>
                                    <article className="product-big">
                                        <div className="unit flex-column flex-md-row align-items-md-stretch">
                                            <div className="unit-left"><Link className="product-big-figure" to={`/tourdetail/${item.id}`}><img src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="images" width={600} height={366} /></Link></div>
                                            <div className="unit-body">
                                                <div className="product-big-body">
                                                    <h5 className="product-big-title"><Link to={`/tourdetail/${item.id}`}>{item.name}</Link></h5>
                                                    <p className="product-big-text">{item.content}...</p>
                                                    <div className="product-big-price-wrap"><span className="product-big-price"><NumberFormat value={item.price} suffix="VND" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></div>
                                                    <Link to={`/tourdetail/${item.id}`} className="button button-black-outline button-ujarak">Buy This Tour</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )
                        }
                        {
                            !tours && <div className="alert alert-danger">Hiện không có tour nào</div>
                        }
                    </div>
                </div>
            </section>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>Most Popular Blog</h2>
                            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            blogs.length > 0 && blogs.map(item => (
                                <div className="col-lg-4 col-md-4 col-sm-6" key={item.id}>
                                    <Link to={`/blogdetail/${item.id}`} className="fh5co-card-item image-popup">
                                        <figure>
                                            <img src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>{item.title.slice(0, 30)}..</h2>
                                            <p>{item.content.slice(0, 100)}...</p>
                                            <p><span className="btn btn-primary">Read More</span></p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/asset/images/66782620_385720765415196_5868615361607237632_n.jpg`} alt="Image" className="img-responsive" />
        </>

    )
}

export default Home

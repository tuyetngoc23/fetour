/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/blog.css'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

function Blog() {
    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <main className="site-main">
                <h1 className="title-blog">Blog</h1>
                <section className="blog-post-area section-margin mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {
                                    blogs.length > 0 && blogs.map(item => (
                                        <div className="single-recent-blog-post" key={item.id}>
                                            <div className="thumb">
                                                <img className="img-fluid fix-img" src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="image blog" />
                                                <ul className="thumb-info">
                                                    <li><Link to={`/blogdetail/${item.id}`}><i className="fas fa-user" />{item.wname}</Link></li>
                                                    <li><Link to={`/blogdetail/${item.id}`}><i className="fas fa-calendar-alt" /><Moment format="MMMM DD, YYYY">{item.wdate}</Moment></Link></li>
                                                    <li><Link to={`/blogdetail/${item.id}`}><i className="fas fa-comments" />2 Comments</Link></li>
                                                </ul>
                                            </div>
                                            <div className="details mt-20">
                                                <Link to={`/blogdetail/${item.id}`}>
                                                    <h3>{item.title}</h3>
                                                </Link>
                                                <p>{item.content.slice(0, 300)}...</p>
                                                <Link className="button" to={`/blogdetail/${item.id}`}>Read More <i className="fas fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-lg-4 sidebar-widgets">
                                <div className="widget-wrap">
                                    <div className="single-sidebar-widget popular-post-widget">
                                        <h3 className="single-sidebar-widget__title">New Post</h3>
                                        <div className="popular-post-list">
                                            {
                                                blogs.length > 0 && blogs.slice(-4).map(item => (
                                                    <div className="single-post-list" key={item.id}>
                                                        <div className="thumb">
                                                            <img className="card-img rounded-0" src={`${process.env.PUBLIC_URL}/asset/images/${item.image}`} alt="image blog" />
                                                            <ul className="thumb-info">
                                                                <li><Link to={`/blogdetail/${item.id}`}>{item.wname}</Link></li>
                                                                <li><Link to={`/blogdetail/${item.id}`}><Moment format="MMM DD">{item.wdate}</Moment></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="details mt-20">
                                                            <Link to={`/blogdetail/${item.id}`}><h6>{item.title}</h6></Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div style={{ clear: 'both' }} />
        </>

    )
}

export default Blog

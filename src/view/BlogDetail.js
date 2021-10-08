/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/blogdetail.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Moment from 'react-moment'
// import Pagination from 'react-js-pagination'



function BlogDetail() {
    const { id } = useParams();
    //getBlog
    const [blog, setBlog] = useState();
    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog/${id}`)
            .then(res => {
                setBlog(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    console.log(blog)
    //lay ds comment
    
    const [comment, setComment] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog/comment/${id}`)
            .then(res => {
                setComment(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    
    
    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data.slice(-4))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(blogs);

    return (

        <>
            <h1 className="title-blog">Blog Detail</h1>
            <section className="blog-post-area section-margin">
                <div className="container">
                    <div className="row">
                        {
                            blog &&
                            <div className="col-lg-8">
                                <div className="main_blog_details">
                                    <img className="img-fluid fix" src={`${process.env.PUBLIC_URL}/asset/images/${blog.image}`} alt="image blogdetail" />
                                    <Link to={`/blogdetail/${blog.id}`}>
                                        <h4>{blog.title}</h4>
                                    </Link>
                                    <div className="user_details">
                                        <div className="float-right mt-sm-0 mt-3">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h5>{blog.wname}</h5>
                                                    <p><Moment format="yyyy-MMM-D">{blog.wdate}</Moment></p>
                                                </div>
                                                <div className="d-flex">
                                                    <img style={{ width: '42px', height: '42px' }} src={`${process.env.PUBLIC_URL}/asset/images/${blog.usertour.avatar}`} alt="image blogdetail" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{blog.content}</p>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
                                        you should have to spend money on boot camp when you can get the MCSE study materials
                                        yourself at a fraction of the camp price. However, who has the willpower to actually sit
                                        through a self-imposed MCSE training. who has the willpower to actually sit through a
                                        self-imposed MCSE training.</p>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">MCSE boot camps have its supporters and its detractors. Some people do
                                            not understand why you should have to spend money on boot camp when you can get the
                                            MCSE study materials yourself at a fraction of the camp price. However, who has the
                                            willpower to actually sit through a self-imposed MCSE training.</p>
                                    </blockquote>
                                </div>
                                <div className="comments-area">
                                    <h4>{comment.length} Comments</h4>
                                    {
                                        comment.map(item => (
                                            <div className="comment-list" key={item.id}>
                                                <div className="single-comment justify-content-between d-flex">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb">
                                                            <img src={`${process.env.PUBLIC_URL}/asset/images/${item.usertour.avatar}`} alt="image blogdetail" />
                                                        </div>
                                                        <div className="desc">
                                                            <h5>{item.usertour.username}</h5>
                                                            <p className="date"><Moment format="MMM D, YYYY">{item.date}</Moment></p>
                                                            <p className="comment">
                                                                {item.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form action="#">
                                        <div className="form-group">
                                            <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" required />
                                        </div>
                                        <input type="submit" className="button submit_btn" value="Post Comment" />
                                    </form>
                                </div>
                            </div>
                        }
                        <div className="col-lg-4 sidebar-widgets">
                            <div className="widget-wrap">
                                <div className="single-sidebar-widget popular-post-widget">
                                    <h3 className="single-sidebar-widget__title">Blog Mới Nhất</h3>
                                    <div className="popular-post-list">
                                        {
                                            blogs.length > 0 && blogs.map(blog => (
                                                <div className="single-post-list" key={blog.id}>
                                                    <div className="thumb">
                                                        <img className="card-img rounded-0" src={`${process.env.PUBLIC_URL}/asset/images/${blog.image}`} alt="image blog" />
                                                        <ul className="thumb-info">
                                                            <li><Link to={`/blogdetail/${blog.id}`}>{blog.wname}</Link></li>
                                                            <li><Link to={`/blogdetail/${blog.id}`}><Moment format="MMM D">{blog.wdate}</Moment></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="details mt-20">
                                                        <Link to={`/blogdetail/${blog.id}`}>
                                                            <h6>{blog.title}</h6>
                                                        </Link>
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
        </>


    )
}

export default BlogDetail

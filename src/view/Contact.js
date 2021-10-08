import React from 'react'
import { Link } from 'react-router-dom'
import '../style/contact.css'

function Contact() {
    return (
        <div className="gtco-section border-bottom">
            <div className="gtco-container">
                <div className="row">
                    <div className="col-md-12 contact-container">
                        <div className="col-md-6">
                            <h3>Get In Touch</h3>
                            <form action="#">
                                <div className="row form-group field_input">
                                    <div className="col-md-12">
                                        <label className="sr-only" htmlFor="name">Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Your name"/>
                                    </div>
                                </div>
                                <div className="row form-group field_input">
                                    <div className="col-md-12">
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                    </div>
                                </div>
                                <div className="row form-group field_input">
                                    <div className="col-md-12">
                                        <label className="sr-only" htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                                    </div>
                                </div>
                                <div className="row form-group field_input">
                                    <div className="col-md-12">
                                        <label className="sr-only" htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols={30} rows={10} className="form-control" placeholder="Write us something" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group  button_send">
                                    <input type="submit" value="Send Message" className="btn btn-primary send_message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 col-md-push-1 animate-box">
                            <div className="gtco-contact-info">
                                <h3>Contact Information</h3>
                                <ul>
                                    <li className="address"><i className="fas fa-map-marker-alt"/>198 West 21th Street, <br /> Suite 721 New York NY 10016</li>
                                    <li className="phone"><i className="fas fa-phone"/><Link to="tel://1234567920">+ 1235 2355 98</Link></li>
                                    <li className="email"><i className="far fa-envelope"></i><Link to="mailto:info@yoursite.com">info@yoursite.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

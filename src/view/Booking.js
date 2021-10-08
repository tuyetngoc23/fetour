import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import '../style/booking.css'


function Booking() {
    
    //tinh tien
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    const amount = useSelector(state => state.book.amount)
    const tour = useSelector(state => state.tour.tour)
    const giaNgLon = Number.parseFloat(amount[0])*Number.parseFloat(tour.price);
    const giaTreEm = Number.parseFloat(amount[1])*(Number.parseFloat(tour.price)/2);
    const giaEmBe = Number.parseFloat(amount[2])*(Number.parseFloat(tour.price)/4);
    const tongTien = Number.parseFloat(giaNgLon+giaTreEm+giaEmBe);

    //tab content
    const handleCash = (e) => {
        const cash = document.querySelector(".cash")
        const paypal = document.querySelector(".paypal");
        const cash1 = document.querySelector(".cash1")
        const paypal1 = document.querySelector(".paypal1");
        paypal.classList.remove("tab_active")
        cash.classList.add("tab_active")
        paypal1.classList.remove("tab_active")
        cash1.classList.add("tab_active")
    }
    const handlePaypal = (e) => {
        const cash = document.querySelector(".cash")
        const paypal = document.querySelector(".paypal");
        const cash1 = document.querySelector(".cash1")
        const paypal1 = document.querySelector(".paypal1");
        paypal.classList.add("tab_active")
        cash.classList.remove("tab_active")
        paypal1.classList.add("tab_active")
        cash1.classList.remove("tab_active")
    }

    //luu thong tin
    const [cusName, setCusName] = useState();
    const [email, setEmail] = useState();
    const [confirmEmail, setConfirmEmail] = useState();
    const [sdt, setSdt] = useState();
    const history = useHistory();
    const dispatch = useDispatch()


    const handleSave = (e) => {
        // e.preventDefault();

        let saveBook = async () =>{
            const formData = new FormData();
            formData.append("total_money", tongTien)
            formData.append("child_amount", amount[1])
            formData.append("aldult_amount", amount[0])
            formData.append("child_nho_amount", amount[2])
            formData.append("cus_name", cusName)
            formData.append("email", email)
            formData.append("phone",  sdt)
            formData.append("usertour.id", 2)
            formData.append("tour.id",  tour.id)
            formData.append("date", new Date())
            if(document.querySelector(".cash").classList.contains("tab_active")){
                formData.append("payment_type", "payment later")
            }else{
                formData.append("payment_type", "paypal")
            }

            await axios.post(`http://localhost:9090/book/add`, formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            });
        }
        
        
        if(email !== null && confirmEmail === email && sdt !== null){
            saveBook()
            dispatch({
                type: "BOOK_DETAIL",
                payload: {
                    name: cusName,
                    lienlac: sdt
                }
            })
            history.push("/orderdetail")
        }
    }

    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div className="checkout-wrapper">
                    <div className="checkout-inner checkout-row">
                        <div id="checkout_form_block" className="checkout-list-item">
                            <h2 className="checkout-title list-order">Booking</h2>
                            <table className="table_order_items_details" cellPadding={0} cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td className="order_item_row_image"><img src={`${process.env.PUBLIC_URL}/asset/images/${tour.image}`} alt="img tour" style={{width:'200px'}}/></td>
                                        <td className="order_item_row_details order_item_row_main_details">
                                            <table className="table_order_item_row_details" cellPadding={0} cellSpacing={0}>
                                                <tbody>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_title">
                                                            <Link to={`tourdetail/${tour.id}`}>{tour.name}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_dates">
                                                            <span className="order_item_td_label">Ngày xuất phát:</span>
                                                            <span className="order_item_td_value"><Moment format="DD/MM/yyyy">{tour.start_day}</Moment></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_duration">
                                                            <span className="order_item_td_label">Thời gian:</span>
                                                            <span className="order_item_td_value"><Moment diff={tour.start_day} unit="days">{tour.end_day}</Moment> Ngày</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_guests">
                                                            <span className="order_item_td_label">Số lượng:</span><br/>
                                                            <span className="order_item_td_value">
                                                                <span className="order_item_age_price">
                                                                    <span>Người lớn x {amount[0]} =&nbsp;</span>
                                                                    <span className="currency_amount">
                                                                        <NumberFormat value={giaNgLon} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" />                                                                        
                                                                    </span><br/>
                                                                    <span>Trẻ nhỏ x {amount[1]} =&nbsp;</span>
                                                                    <span className="currency_amount">
                                                                        <NumberFormat value={giaTreEm} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" />
                                                                    </span><br/>
                                                                    <span>Em bé x {amount[2]} =&nbsp;</span>
                                                                    <span className="currency_amount">
                                                                        <NumberFormat value={giaEmBe} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td className="order_item_row_price">
                                            <table className="table_order_item_total_price">
                                                <tbody>
                                                    <tr>
                                                        <td className="order_item_total_price"><span className="currency_amount"><NumberFormat value={tour.price} suffix="VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_items_row_total order_items_row_due" colSpan={2}>
                                            <span className="order_items_row_total_label">Tổng Tiền:</span>
                                        </td>
                                        <td className="order_items_row_total_amount order_items_row_due">
                                            <span id="order_items_row_paid_amount">
                                                <span className="currency_amount"><NumberFormat value={tongTien} suffix="VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="checkout-info">
                            <h2 className="checkout-title">Thông Tin Liên Lạc</h2>
                            {/* <form id="checkout_form" onSubmit={handleSave}> */}
                                <div className="contact_fields_group input_group">
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" onChange={(e) => setCusName(e.target.value)}  placeholder="Họ tên khách hàng" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="email" className="checkout_input_field checkout_input_required" onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="email" className="checkout_input_field checkout_input_required"  onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Xác nhận Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" onChange={(e) => setSdt(e.target.value)} placeholder="Số điện thoại" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="checkout-title">Payment Method</h2>
                                <div className="payment_group tabs_group">
                                    <div className="payment_titles_group tabs_titles">
                                        <span className="payment_method_title payment_method_title_cash tab_title tab_active cash" onClick={handleCash}>Pay later</span>
                                        <span className="payment_method_title payment_method_title_paypal tab_title paypal" onClick={handlePaypal}>PayPal</span> 
                                    </div>
                                    <div className="payment_fields_group">
                                        <div className="payment_method_fields payment_method_fields_cash tab_content tab_active cash1">Book now, pay later!</div>
                                        <div className="payment_method_fields payment_method_fields_paypal tab_content paypal1">
                                            <div className="paypal-payment-description">
                                                <img className="booking_payment_img" src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" border={0} alt="PayPal Acceptance Mark" />
                                                <h4>Continue complete order and Pay with PayPal</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit_group">
                                    <button onClick={handleSave} className="btn button checkout_form_submit">Complete My Order</button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Booking

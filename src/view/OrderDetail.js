import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/orderdetail.css'

function OrderDetail() {
    const detail = useSelector(state => state.book.detail)
    const amount = useSelector(state => state.book.amount)
    const tour = useSelector(state => state.tour.tour)
    const giaNgLon = Number.parseFloat(amount[0])*Number.parseFloat(tour.price);
    const giaTreEm = Number.parseFloat(amount[1])*(Number.parseFloat(tour.price)/2);
    const giaEmBe = Number.parseFloat(amount[2])*(Number.parseFloat(tour.price)/4);
    const tongTien = Number.parseFloat(giaNgLon+giaTreEm+giaEmBe);

    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div className="confirmation-page-default">
                    <div className="babe_message_order babe_message_order_status_payment_deferred">
                        Đơn hàng của bạn đã được nhận và hoàn tất, vui lòng đến cơ sở gần nhất để thanh toán. Trân thành cám ơn!! </div>
                    <div className="confirmation-information">
                        <div className="order-number">
                            <span className="title">Tên khách hàng:</span>
                            <span className="content">{detail.name}</span>
                        </div>
                        <div className="total">
                            <span className="title">Số điện thoại:</span>
                            <span className="content">{detail.lienlac}
                                </span>
                        </div>
                        <div className="date">
                            <span className="title">Thời gian:</span>
                            <span className="content">
                                <Moment format="DD-MM-YYYY HH:mm">{Date.now()}</Moment>
                            </span>
                        </div>
                        <div className="payment-method">
                            <span className="title">Phương thức thanh toán:</span>
                            <span className="content">Tiền mặt</span>
                        </div>
                    </div>
                    <div className="order-details-table">
                        <h4 className="order-heading">Chi tiết đơn hàng</h4>
                        <div className="order-body">
                            <div className="order-content">
                                <div className="title">
                                    <Link to={`/tourdetail/${tour.id}`}>{tour.name}</Link>
                                </div>
                                <div className="date-time">
                                    <span className="label">Ngày khởi hành:</span>
                                    <span className="value date"><Moment format="DD/MM/YYYY">{tour.start_day}</Moment></span>
                                    {/* <span className="label"> Thời: </span>
                                    <span className="value">12:00 am</span>  */}
                                </div>
                                <div className="duration">
                                    <span className="label">Thời gian:</span>
                                    <span className="value"><Moment diff={tour.start_day} unit="days">{tour.end_day}</Moment>Ngày</span> 
                                </div>
                                <div className="tickets">
                                    <span className="label"> Số lượng:</span> <div className="value">
                                        <div className="order_prices">
                                            <span className="order_item_age_title"> Người lớn</span>
                                            <span className="order_item_age_guests_num"> x {amount[0]} = </span>
                                            <span className="order_item_age_price"><span className="currency_amount"><NumberFormat value={giaNgLon} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></span>
                                        </div>
                                        <div className="order_prices">
                                            <span className="order_item_age_title"> Trẻ Em</span>
                                            <span className="order_item_age_guests_num"> x {amount[1] } = </span>
                                            <span className="order_item_age_price"><span className="currency_amount"><NumberFormat value={giaTreEm} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></span>
                                        </div>
                                        <div className="order_prices">
                                            <span className="order_item_age_title"> Em bé</span>
                                            <span className="order_item_age_guests_num"> x {amount[2]} = </span>
                                            <span className="order_item_age_price"><span className="currency_amount"><NumberFormat value={giaEmBe} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-price">
                                <span className="order_item_total_price"><span className="currency_amount"><NumberFormat value={tour.price} suffix=" VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" /></span></span>
                            </div>
                        </div>
                        <div className="order-service">
                        </div>
                        <div className="order-total-subtotal">
                            {/* <div className="order_items_total">
                                <span className="label">Sub Total</span>
                                <span className="amount"> <span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></span>
                            </div>
                            <div className="order_items_total">
                                <span className="label">Total</span>
                                <span className="amount"><span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></span>
                            </div>
                            <div className="order_items_total">
                                <span className="label">Amount Paid</span>
                                <span className="amount"><span className="currency_amount" data-amount={0}><span className="currency_symbol">$</span>0</span></span>
                            </div> */}
                            <div className="order_items_total">
                                <span className="label">Tổng Tiền : <NumberFormat value={tongTien} suffix="VNĐ" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" style={{fontSize: '18px', color: '#09C6AB'}}/></span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderDetail

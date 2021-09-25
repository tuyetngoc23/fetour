import React from 'react'
import '../style/orderdetail.css'

function OrderDetail() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div className="confirmation-page-default">
                    <div className="babe_message_order babe_message_order_status_payment_deferred">
                        Your order is completed and received, and a confirmation email was sent to you. You will pay the full amount later. Thank you! </div>
                    <div className="confirmation-information">
                        <div className="order-number">
                            <span className="title">Order number:</span>
                            <span className="content">210924-070321892</span>
                        </div>
                        <div className="date">
                            <span className="title">Date:</span>
                            <span className="content">
                                2021-09-29 00:00 </span>
                        </div>
                        <div className="total">
                            <span className="title">Total:</span>
                            <span className="content">
                                <span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span> </span>
                        </div>
                        <div className="payment-method">
                            <span className="title">Payment method:</span>
                            <span className="content">Payment later</span>
                        </div>
                    </div>
                    <div className="order-details-table">
                        <h4 className="order-heading">Order Details</h4>
                        <div className="order-body">
                            <div className="order-content">
                                <div className="title">
                                    <a target="_blank" href="https://demo2.pavothemes.com/triply/to_book/adventure-colombia/">
                                        Adventure Colombia </a>
                                </div>
                                <div className="date-time">
                                    <span className="label"> Date:</span>
                                    <span className="value date"> 09/29/2021 </span>
                                    <span className="label"> Time: </span>
                                    <span className="value">12:00 am</span> </div>
                                <div className="duration">
                                    <span className="label">Duration:</span>
                                    <span className="value">8 days</span> </div>
                                <div className="tickets">
                                    <span className="label"> Tickets:</span> <div className="value">
                                        <div className="order_prices">
                                            <span className="order_item_age_title"> Adult</span>
                                            <span className="order_item_age_guests_num">x1 =</span>
                                            <span className="order_item_age_price"><span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></span>
                                        </div>
                                        <div className="order_prices">
                                        </div>
                                        <div className="order_prices">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-price">
                                <span className="order_item_total_price"><span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></span>
                            </div>
                        </div>
                        <div className="order-service">
                        </div>
                        <div className="order-total-subtotal">
                            <div className="order_items_total">
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
                            </div>
                            <div className="order_items_total">
                                <span className="label">Amount Due</span>
                                <span className="amount amount-total"><span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderDetail

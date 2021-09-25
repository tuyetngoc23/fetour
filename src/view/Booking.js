import React from 'react'
import { Link } from 'react-router-dom'
import '../style/booking.css'

function Booking() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div className="checkout-wrapper">
                    <div className="checkout-inner checkout-row">
                        <div id="checkout_form_block" className="checkout-list-item">
                            <h2 className="checkout-title list-order">Order #210924-043003353</h2>
                            <table className="table_order_items_details" cellPadding={0} cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td className="order_item_row_image"><img src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/5c284b5932e9aae035a5aed9_DSC05668-copy-150x150.jpg" alt="img tour"/></td>
                                        <td className="order_item_row_details order_item_row_main_details">
                                            <table className="table_order_item_row_details" cellPadding={0} cellSpacing={0}>
                                                <tbody>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_title">
                                                            <Link to={`tourdetail/1`}>Adventure Colombia</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_dates">
                                                            <span className="order_item_td_label">Date:</span>
                                                            <span className="order_item_td_value">09/25/2021</span><span className="order_item_td_label">Time:</span>
                                                            <span className="order_item_td_value">12:00 am</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_duration">
                                                            <span className="order_item_td_label">Duration:</span>
                                                            <span className="order_item_td_value">8 days</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="order_item_info order_item_info_guests">
                                                            <span className="order_item_td_label">Tickets:</span><br/>
                                                            <span className="order_item_td_value">
                                                                <span className="order_item_age_price">
                                                                    <span>Adult x 1 =&nbsp;</span>
                                                                    <span className="currency_amount">$100</span>
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
                                                        <td className="order_item_total_price"><span className="currency_amount" data-amount={100}><span className="currency_symbol">$</span>100</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_items_row_total order_items_row_subtotal" colSpan={2}>
                                            <span className="order_items_row_total_label">Subtotal:</span>
                                        </td>
                                        <td className="order_items_row_total_amount order_items_row_subtotal">
                                            <span id="order_items_row_subtotal_amount"><span className="currency_amount" data-amount={147}><span className="currency_symbol">$</span>147</span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_items_row_total" colSpan={2}>
                                            <span className="order_items_row_total_label">Total:</span>
                                        </td>
                                        <td className="order_items_row_total_amount">
                                            <span id="order_items_row_total_amount"><span className="currency_amount" data-amount={147}><span className="currency_symbol">$</span>147</span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_items_row_total order_items_row_paid" colSpan={2}>
                                            <span className="order_items_row_total_label">Amount Paid:</span>
                                        </td>
                                        <td className="order_items_row_total_amount order_items_row_paid">
                                            <span id="order_items_row_paid_amount"><span className="currency_amount" data-amount={0}><span className="currency_symbol">$</span>0</span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_items_row_total order_items_row_due" colSpan={2}>
                                            <span className="order_items_row_total_label">Amount Due:</span>
                                        </td>
                                        <td className="order_items_row_total_amount order_items_row_due">
                                            <span id="order_items_row_paid_amount"><span className="currency_amount" data-amount={147}><span className="currency_symbol">$</span>147</span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="checkout-info">
                            <h2 className="checkout-title">Contact information</h2>
                            <form id="checkout_form" name="checkout_form" method="post" action>
                                <div className="contact_fields_group input_group">
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" name="first_name" id="first_name" defaultValue placeholder="First name" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" name="last_name" id="last_name" defaultValue placeholder="Last name" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" name="email" id="email" defaultValue placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" name="email_check" id="email_check" defaultValue placeholder="Re-type Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="checkout-form-block">
                                        <div className="checkout_form_input_field ">
                                            <input type="text" className="checkout_input_field checkout_input_required" name="phone" id="phone" defaultValue placeholder="Contact Phone" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="order_id" defaultValue={7886} />
                                <input type="hidden" name="order_num" defaultValue="210924-043003353" />
                                <input type="hidden" name="order_hash" defaultValue="486e1a700323f8a5fd9064a296c4906876698c679d8392058e2a5f06b1a73bc6" />
                                <input type="hidden" name="action" defaultValue="to_pay" />
                                <h2 className="checkout-title">Payment Method</h2>
                                <div className="payment_group tabs_group">
                                    <div className="payment_titles_group tabs_titles">
                                        <span className="payment_method_title payment_method_title_cash tab_title tab_active" data-method="cash">Pay later</span><span className="payment_method_title payment_method_title_paypal tab_title" data-method="paypal">PayPal</span> </div>
                                    <div className="payment_fields_group">
                                        <div className="payment_method_fields payment_method_fields_cash tab_content " data-method="cash">Book now, pay later!</div>
                                        <div className="payment_method_fields payment_method_fields_paypal tab_content tab_active" data-method="paypal">
                                            <div className="paypal-payment-description">
                                                <img className="booking_payment_img" src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" border={0} alt="PayPal Acceptance Mark" />
                                                <h4>Continue complete order and Pay with PayPal</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="payment[payment_method]" defaultValue="cash" />
                                </div>
                                <div className="submit_group">
                                    <Link to="/orderdetail" className="btn button checkout_form_submit">Complete My Order</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Booking

import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function PayPal() {
    const sl = useSelector(state => state.book.amount)
    const tour = useSelector(state => state.tour.tour)
    const info = useSelector(state => state.book.detail)
    const giaNgLon = Number.parseFloat(sl[0])*Number.parseFloat(tour.price);
    const giaTreEm = Number.parseFloat(sl[1])*(Number.parseFloat(tour.price)/2);
    const giaEmBe = Number.parseFloat(sl[2])*(Number.parseFloat(tour.price)/4);
    const tongTien = Number.parseFloat(giaNgLon+giaTreEm+giaEmBe);
    const paypal = useRef()
    const history = useHistory();

    useEffect(() => {
       window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    // intent: "CAPTURE",
                    purchase_units: [
                        {
                            description:"Cool",
                            amount: {
                                value: tongTien
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log("success" + order);
                console.log(data);
                history.push("/");
            },
            onClick: () => {
                let saveBook = async () =>{
                    const formData = new FormData();
                    formData.append("total_money", tongTien)
                    formData.append("child_amount", sl[1])
                    formData.append("aldult_amount", sl[0])
                    formData.append("child_nho_amount", sl[2])
                    formData.append("cus_name", info.cusName)
                    formData.append("email", info.email)
                    formData.append("phone",  info.sdt)
                    formData.append("usertour.id", 2)
                    formData.append("tour.id",  tour.id)
                    formData.append("date", new Date())
                    formData.append("payment_type", "paypal")
        
                    await axios.post(`http://localhost:9090/book/add`, formData, {
                        headers: {
                            "Content-Type" : "multipart/form-data"
                        }
                    });
                }
                if(info.email !== null && info.confirmEmail === info.email && info.sdt !== null){
                    saveBook()
                }
            },
            onErr: (err) => {
                console.log(err);
            }
       }).render(paypal.current)
    }, [])

    return (
        <>
            <div ref={paypal} style={{width: '100%'}}></div>
        </>
    )
}

export default PayPal

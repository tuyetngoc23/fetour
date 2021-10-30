/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import image_logo from '../asset/images/logo1.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactModalLogin from 'react-modal-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Slider from 'react-slick';


function Header() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [userTour, setUserTour] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false)
        setError(null)
    }
    const onLoginSuccess = (method, response) => {
        console.log("logged successfully with " + method);
        console.log(response);
        closeModal();
    }
    const onLoginFail = (method, response) => {
        console.log("logging failed with " + method);
        setError(response)
    }

    const startLoading = () => {
        setLoading(true)
    }

    const finishLoading = () => {
        setLoading(false)

    }

    const afterTabsChange = () => {
        setError(null)

    }
    const facebook = {
        appId: "567737534495303",
        cookie: true,
        xfbml: true,
        version: "v3.2",
        scope: "email"
    };

    const google = {
        client_id: "991938424417-sc6qg7mv38mo9d8co5dm9qr63qp0c86a.apps.googleusercontent.com",
        scope: "profile email"
    };


    useEffect(() => {
        axios.get(`http://localhost:9090/user/list`)
            .then(res => {
                setUserTour(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const onRegister = () => {
        var birth = document.getElementById("birthday").value;
        var username = document.getElementById("username").value;
        var avatar = document.getElementById("avatar").files[0];
        var cusname = document.getElementById("cusname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        let co = true;
        let saveUser = async () => {
            const formData = new FormData();
            formData.append("username", username)
            formData.append("passwd", document.getElementById("password").value)
            formData.append("cusname", cusname)
            formData.append("phone", phone)
            formData.append("birthday", new Date(birth))
            formData.append("address", document.getElementById("address").value)
            formData.append("email", email)
            if (avatar === null || avatar === "") {
                formData.append("avatar", "avatar-meo.jpg")
            }
            formData.append("state", 1)
            formData.append("user_role.id", 2)
            formData.append("file", avatar)

            await axios.post(`http://localhost:9090/user/add`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }
        if (userTour.length > 0) {
            for (let i = 0; i < userTour.length; i++) {
                if (userTour[i].username === username) {
                    co = false;
                }
            }
        }
        if (document.getElementById("password").value === document.getElementById("confirm").value &
            username.value !== null & username !== "" & co === true
            & document.getElementById("password").value !== null & document.getElementById("password").value !== ""
            & birth != null & birth !== "" & cusname != null & cusname !== "" & email != null & email !== "" &
            phone > 1000000000 & phone < 10000000000 & avatar != null) {
            saveUser();
            setError(null)
            console.log("regist success");
        } else {
            setError("No accept")
        }

    }


    const onLogin = () => {
        let login = async () => {
            await axios.get(`http://localhost:9090/user/login`, {
                params: {
                    username: document.getElementById("username").value,
                    password: document.getElementById("password").value
                }
            }).then(res => {
                console.log(res.data.username);
                if (res.status === 500) {
                    setError("Invalid")
                    dispatch({
                        type: "GET_USER",
                        payload: null
                    })
                    setUser(null)
                } else {
                    setError(null)
                    axios.get(`http://localhost:9090/user`, {
                        params: {
                            username: res.data.username
                        }
                    }).then(res2 => {
                        console.log(res2.data);
                        setUser(res2.data)
                        dispatch({
                            type: "GET_USER",
                            payload: {
                                id: res2.data.id,
                                username: res2.data.username,
                                avatar: res2.data.avatar,
                                cusname: res2.data.cusname,
                                email: res2.data.email,
                                phone: res2.data.phone,
                                role: res2.data.user_role
                            }
                        })
                        setError(null)
                    })
                }
            }).catch(err => {
                // alert("Login fail")
                setError(err);
            })
        }
        if (document.getElementById("username").value != null & document.getElementById("username").value !== "") {
            console.log("login success");
            login();
            setError(null);
            closeModal();
        }
    }

    const onLogout = () => {
        dispatch({
            type: "GET_USER",
            payload: null
        })
        setUser(null)
    }

    const settings = {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <header>
                <div style={{ opacity: '0.5' }} className="fixed-top">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="logo">
                            <img className="nav-link" src={image_logo} alt="Logo" />
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/">Home</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/tour">Tour</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/blog">Blog</Link></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-child-tab" ><Link to="/contact">Contact</Link></button>
                        </li>
                        {
                            user === null ?
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-child-tab" onClick={openModal}>Login</button>
                                </li>
                                : <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-child-tab" onClick={onLogout}><span>{user.username}</span>/Logout</button>
                                </li>
                        }
                    </ul>
                    <ul>

                    </ul>
                </div>
                <ReactModalLogin
                    visible={showModal}
                    onCloseModal={closeModal}
                    loading={loading}
                    error={error}
                    tabs={{
                        afterChange: afterTabsChange
                    }}
                    loginError={{
                        label: "Couldn't sign in, please try again."
                    }}
                    registerError={{
                        label: "Couldn't sign up, please try again."
                    }}
                    startLoading={startLoading}
                    finishLoading={finishLoading}
                    form={{
                        onLogin: onLogin,
                        onRegister: onRegister,
                        // onRecoverPassword: this.onRecoverPassword.bind(this),

                        // recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                        //   ? {
                        //       label: "New password has been sent to your mailbox!"
                        //     }
                        //   : null,
                        recoverPasswordAnchor: {
                            label: "Forgot your password?"
                        },
                        loginBtn: {
                            label: "Sign in"
                        },
                        registerBtn: {
                            label: "Sign up"
                        },
                        recoverPasswordBtn: {
                            label: "Send new password"
                        },
                        loginInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Username',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'username',
                                name: 'username',
                                placeholder: 'Username',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                        registerInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Username',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'username',
                                name: 'username',
                                placeholder: 'Username',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Confirm Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'confirm',
                                name: 'confirm',
                                placeholder: 'Confirm Password',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Họ tên',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'cusname',
                                name: 'cusname',
                                placeholder: 'Họ tên',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Số điện thoại',
                                type: 'number',
                                // min: 0,
                                // max: 9999999999,
                                inputClass: 'RML-form-control',
                                id: 'phone',
                                name: 'phone',
                                placeholder: 'Số điện thoại',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Ngày sinh',
                                type: 'date',
                                inputClass: 'RML-form-control',
                                id: 'birthday',
                                name: 'birthday',
                                placeholder: 'Ngày sinh',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Địa chỉ',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'address',
                                name: 'address',
                                placeholder: 'Địa chỉ',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Ảnh đại diện',
                                type: 'file',
                                inputClass: 'RML-form-control',
                                id: 'avatar',
                                name: 'avatar',
                                placeholder: 'Ảnh đại diện',
                                accept: "images/*"
                            }
                        ],
                        recoverPasswordInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                        ],
                    }}
                    separator={{
                        label: "or"
                    }}
                    providers={{
                        facebook: {
                            config: facebook,
                            onLoginSuccess: onLoginSuccess,
                            onLoginFail: onLoginFail,
                            label: "Continue with Facebook"
                        },
                        google: {
                            config: google,
                            onLoginSuccess: onLoginSuccess,
                            onLoginFail: onLoginFail,
                            label: "Continue with Google"
                        }
                    }}
                >

                </ReactModalLogin>
                <Slider {...settings}>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Exploxe <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/phuquoc.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                </Slider>
                {/* <div className="slick">
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/dalat2.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Exploxe <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/vinhhalong.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                    <div>
                        <div className="title-slick text-uppercase">
                            <h5>Welcome to Our Tour</h5>
                            <span>Create <strong>your tour</strong></span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/asset/images/phuquoc.jpg`} style={{ width: '100%', height: '655px' }} />
                    </div>
                </div> */}

            </header>
        </>

    )
}

export default Header

import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import ReactModalLogin from "react-modal-login";
import { useHistory } from 'react-router';
import '../style/login.css'

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory()
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false)
    setError(null)
    history.push("/")
  }
  const onLoginSuccess = (method, response) => {
    console.log("logged successfully with " + method);
    console.log(response);
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

  const [userTour, setUserTour] = useState({})
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
    const avatar2 = document.querySelector("#avatar").files[0];
    const reader = new FileReader();
    var tmppath = URL.createObjectURL(avatar2);
    
    // tmppath = tmppath.replace("http://localhost:3000","http://localhost:3000/asset/images");
    console.log(tmppath);
    console.log(avatar);
    console.log(avatar2);
    let co = true;
    let saveUser = async () => {
      // avatar2 = avatar2.replace("C:\\Users\\Windows 10\\AppData\\Local\\Temp\\tomcat.9090.5649094795828257947\\work\\Tomcat-1\\localhost\\ROOT\\", "D:\\HK9\\DAN\\fetour\\public\\asset\\images")
      const formData = new FormData();
      formData.append("username", username)
      formData.append("passwd", document.getElementById("password").value)
      formData.append("cusname", document.getElementById("cusname").value)
      formData.append("phone", document.getElementById("phone").value)
      formData.append("birthday", new Date(birth))
      formData.append("address", document.getElementById("address").value)
      formData.append("email", document.getElementById("email").value)
      // if (avatar2 === null || avatar2 === "") {
        formData.append("avatar", "avatar-meo.jpg")
      // } else {
        // formData.append("avatar", avatar2)//xu lys luu anh
      // }
      formData.append("state", 1)
      formData.append("user_role.id", 2)
      formData.append("file", avatar)

      await axios.post(`http://localhost:9090/user/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        // params: {
        //   file: avatar
        // }
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
      & document.getElementById("password").value !== null & document.getElementById("password").value !== "") {

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
          username: document.getElementById("username").value
        }
      }).then(res => {
        console.log(res.data.username);
        setError(null)
        axios.get(`http://localhost:9090/user`, {
          params: {
            username: res.data.username
          }
        }).then(res2 => {
          console.log(res2.data);
          setError(null)
        })
      })
        .catch(err => {

          // alert("Login fail")
          setError(err);
        })
    }
    login();
    console.log("login success");
  }


  return (
    <>

      <button onClick={openModal}>Open Modal</button>
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

    </>
  )
}

export default Login

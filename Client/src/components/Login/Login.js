import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import "./Login.scss";
import Swal from "sweetalert2";

function Auth() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const config = { 'content-type': 'application/json' };
  const navigate = useNavigate();

  const handleLoginSuccess = (data) => {

    localStorage.setItem("userToken", data.accessToken);
    console.log(data.accessToken);
    navigate("/User-Profile");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(passwordReg, emailReg, username);
    if (form.id === 'register-form') {
      const data = { email: emailReg, password: passwordReg, name: username };
      axios.post("http://localhost:5000/users/signup", data, config)
        .then((res) => {
          Swal.fire({
            title: "Register is success. Please Login",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        })
        .catch(err => {
          console.log(err);
          let errorMessage = "There is something wrong";
          if (err.response && err.response.status === 400) {
            errorMessage = "Username or Password is Wrong";
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
        });
    } else {
      const data = { email, password };
      axios.post("http://localhost:5000/users/login", data, config)
        .then((res) => {
            console.log(res.data);
          Swal.fire({
           
            title: "Login is success",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              handleLoginSuccess(res.data);
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        })
        .catch(err => {
          console.log(err);
          let errorMessage = "There is something wrong";
          if (err.response && err.response.status === 400) {
            errorMessage = "Username or Password is Wrong";
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
        });
    }
  };

  return (
    <div className="rh_section rh_wrap rh_wrap--padding rh_wrap--topPadding">
      <div className="rh_page">
        <div className="rh_form rh_form__login_wrap">
          <div className="rh_property_detail_login">
            <div className="rh_form__login">
              <form className="rh_form__form" onSubmit={handleSubmit} id="login-form" noValidate="novalidate">
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label className="info-text">Already a Member? Log in here.</label>
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input
                      autoComplete="username"
                      id="email"
                      name="log"
                      type="text"
                      className="required"
                      title="* Provide username!"
                      autoFocus=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label htmlFor="password">Password<span>*</span></label>
                    <input
                      autoComplete="current-password"
                      id="password"
                      name="pwd"
                      type="password"
                      className="required"
                      title="* Provide password!"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <input type="hidden" id="inspiry-secure-login" name="inspiry-secure-login" value="573f4b1be0" />
                <input type="hidden" name="_wp_http_referer" value="/login-register/" />
                <div className="rh_form__row">
                  <div className="rh_form__item rh_input_btn_wrapper rh_form--3-column rh_form--columnAlign">
                    <button type="submit" id="login-button" className="rh_btn rh_btn--primary">Login</button>
                  </div>
                </div>
              </form>

              <div className="rh_form__row">
                <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                  <p className="forgot-password">
                    <a className="toggle-forgot-form" href="#" id="forgot-password-link" onClick={() => setIsFormVisible(!isFormVisible)}>Forgot password!</a>
                  </p>
                </div>
              </div>

              <form id="rh_modal__forgot_form" method="post" noValidate={!isFormVisible} style={{ display: isFormVisible ? 'block' : 'none' }}>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label htmlFor="reset_username_or_email">Username or Email<span>*</span></label>
                    <input id="reset_username_or_email" name="reset_username_or_email" type="text" className="required" title="* Provide username or email!" required />
                  </div>
                </div>
                <input type="hidden" id="inspiry-secure-reset" name="inspiry-secure-reset" value="6c6250c083" />
                <input type="hidden" name="_wp_http_referer" value="/login-register/" />
                <div className="rh_form__row">
                  <div className="rh_form__item rh_input_btn_wrapper rh_form--3-column rh_form--columnAlign">
                    <input type="submit" id="forgot-button" name="user-submit" value="Reset Password" className="rh_btn rh_btn--secondary" />
                  </div>
                </div>
              </form>
            </div>
            <div className="rh_form__register">
              <form className="rh_form__form" onSubmit={handleSubmit} id="register-form" noValidate="novalidate">
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label className="info-text">Do not have an account? Register here</label>
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label htmlFor="register_username" className="hide">Username<span>*</span></label>
                    <input
                      id="register_username"
                      name="register_username"
                      type="text"
                      className="required"
                      title="* Provide username!"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label htmlFor="register_email" className="hide">Email<span>*</span></label>
                    <input
                      id="register_email"
                      name="register_email"
                      type="text"
                      className="email required"
                      title="* Provide valid email address!"
                      value={emailReg}
                      onChange={(e) => setEmailReg(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_form--1-column rh_form--columnAlign">
                    <label>Password<span>*</span></label>
                    <input
                      type="password"
                      autoComplete="off"
                      required
                      value={passwordReg}
                      onChange={(e) => setPasswordReg(e.target.value)}
                    />
                  </div>
                </div>
                <div className="rh_form__row">
                  <div className="rh_form__item rh_input_btn_wrapper rh_form--3-column rh_form--columnAlign">
                    <input type="submit" id="register-button" name="user-submit" value="Register" className="rh_btn rh_btn--secondary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

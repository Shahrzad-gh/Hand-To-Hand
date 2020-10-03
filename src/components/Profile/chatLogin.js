import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import firebase from "../../config/fbConfig"
import { Redirect } from 'react-router-dom';
export default function ChatLogin() {
    const [value, setValue] = useState();

    // function handleChange(e){
    //   [e.target.id] = [e.target.value]
    // }
     const [otp, setOtp] = useState();
    
     console.log("value",value)
    console.log("otp",otp)
    function onSignInSubmit(){
      var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
      var number = value;
      console.log("phoneNumber",number)
       firebase.auth().signInWithPhoneNumber(number, recaptcha)
       .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    function onSubmitOTP(){
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        console.log("Login")
        return <Redirect to="/Message"/>

      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });

    }

    return (
        <div className="container col-md-8 d-flex align-items-center flex-column justify-content-center min-vh-100">
          <p className="center">Login to chat</p>
          <div id="sign-in-button" className="row overflow-auto">
                <PhoneInput
                    international
                    className="mr-3"
                    defaultCountry="IR"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />
                <button onClick={onSignInSubmit} className="btn">
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
          <div id="recaptcha"></div>
          <p className="center">Enter OTP</p>
            <div className="row overflow-auto">
                  <input
                    placeholder="OTP"
                    value={otp}
                    onChange={setOtp}
                  />
                  <button className="btn" onClick={onSubmitOTP}>
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
            
    </div>
    )
}

import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import firebase from "../../config/fbConfig"

export default function ChatLogin() {
    const [value, setValue] = useState();
    
    function setUpRecapcha(){      
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'sign-in-button', {
          'size': 'invisible',
          'callback': function(response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
          }
        });
    }
    function onChangeHandler(e){
      const { name, value } = e.target;
      //setState({[name]: value,});
    }

    function onSignInSubmit(e){
      e.preventDefault();
      var phoneNumber = e.target.value;
      console.log("phone", phoneNumber);
      setUpRecapcha();
      var appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // var code = window.otp
        //getCodeFromUserInput();
        //confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        //var user = result.user;
        // ...
        console.log("OTP is sent")
      }).catch(function (error) {
            console.log("E",error)
      });
    }

    function onSubmitOtp(e){
      e.preventDefault();
      let otpInput = this.state.otp;
      let optConfirm = window.confirmationResult;
      // console.log(codee);
      optConfirm
        .confirm(otpInput)
        .then(function (result) {
          // User signed in successfully.
          // console.log("Result" + result.verificationID);
          let user = result.user;
        })
        .catch(function (error) {
          console.log(error);
          alert("Incorrect OTP");
        });
    };

    return (
        <div className="container col-md-8 d-flex align-items-center flex-column justify-content-center min-vh-100">
          <p className="center">Login to chat</p>
          <div id="sign-in-button" className="row overflow-auto">
                <PhoneInput
                  className="mr-3"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}/>
                <button onSubmit={onSignInSubmit} className="btn">
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
          <p className="center">Enter OTP</p>
            <div className="row overflow-auto">
                  <input
                    id="otp"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    onChange={onChangeHandler}
                  />
                  <button onSubmit={onSubmitOtp} className="btn">
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
            
    </div>
    )
}

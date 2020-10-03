import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import firebase from "../../config/fbConfig"
import { Redirect } from 'react-router-dom';

export default function ChatLogin() {
    const [value, setValue] = useState();

    // function handleChange(e){
    //   [e.target.id] = [e.target.value]
    // }
     const [otp, setOtp] = useState();
    
     console.log("value",value)

    function onSignInSubmit(){
      var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
      var number = value;
      console.log("phoneNumber",number)
       firebase.auth().signInWithPhoneNumber(number, recaptcha)
       .then( function(e) {
         //onSubmitOTP(e)
    //     var code = otp;        
    //     if(code === null) return;        
    //     e.confirm(code).then(function (result) {
    //         console.log(result.user);
    //         //return <Redirect to="/Message"/>
    //     }).catch(function (error) {
    //         console.error( error);            
    //     });
     })
     .catch(function (error) {
         console.error( error);

     });
    }

    function onSubmitOTP(e){
      e.confirm(otp).then(function(e){
        return <Redirect to="/Message"/>
      }).catch(function(err){ console.log("OTP code is WRONG!", err)})
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
                    />
                <button onClick={onSignInSubmit} className="btn">
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
          <div id="recaptcha"></div>
          <p className="center">Enter OTP</p>
            <div className="row overflow-auto">
                  <input
                    id="otp"
                    type="number"
                    name="otp"
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

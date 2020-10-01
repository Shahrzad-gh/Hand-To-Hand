import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import firebase from "../../config/fbConfig"
import { Redirect } from 'react-router-dom';

export default function ChatLogin() {
    //const [value, setValue] = useState();
    

    function onSignInSubmit(){
      var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
      var number = '+989357795479';
      console.log(number)
      firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then( function(e) {
        var code = prompt('Enter the otp', '');        
        if(code === null) return;        
        e.confirm(code).then(function (result) {
            console.log(result.user);
            //return <Redirect to="/Message"/>
        }).catch(function (error) {
            console.error( error);            
        });
    })
    .catch(function (error) {
        console.error( error);

    });
    }
    return (
        <div id="recaptcha" className="container col-md-8 d-flex align-items-center flex-column justify-content-center min-vh-100">
          <p className="center">Login to chat</p>
          <div id="sign-in-button" className="row overflow-auto">
                <PhoneInput
                  className="mr-3"
                    placeholder="Enter phone number"
                    //value={value}
                    //onChange={setValue}
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
                    //onChange={onChangeHandler}
                  />
                  <button className="btn">
                    <i className="fas fa-share-square"></i>
                </button>
          </div>
            
    </div>
    )
}

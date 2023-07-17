import React, { Component } from "react";

import classes from "./ContactPage.module.css"
import { Fragment } from "react";
import { Sidebar } from "../UI/Sidebar";
import { useSelector } from "react-redux";


import { Form, useNavigate, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import useInput from "../hooks/use-input";

const { useState } = React;


const Contact = (props) => {
const isAuth = useSelector((state)=>state.auth.isAuth);
const submit =useSubmit()
const submitHandler=(e)=>{
    e.preventDefault();
    if(formValid)
    {
        submit(e.currentTarget,{method:"POST"})

    document.getElementById("formpesan").reset()
    nameReset();
    emailReset();
    subjectReset();
    messageReset();
    phoneReset();
    notify();
    
    }
    else
    gagal();
    
}
const notify = () => toast.success('Message Uploaded', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});


const gagal = () => toast.warning('Sorry, there was a mistake.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});
const nameValidate=(value,errorHandler)=>{
    if(value.trim() ==='')
      {
        errorHandler('*Name cannot be empty')
       
      }

    return value.trim() !=='';
  }
const emailValidate=(value,errorHandler)=>{
    if(value.trim() ==='')
      {
        errorHandler('*Email cannot be empty')
       
      }
      else if(!value.trim().includes('@'))
      {
        errorHandler('*Email is Not Valid')
      }

    return value.trim() !=='' && value.includes('@');
  }
const phoneValidate=(value,errorHandler)=>{
    let text=value.toString();
    if(text ==='')
      {
        errorHandler('*Phone cannot be empty')
       
      }
      else if(text.length <10 || text[0]!=='0' || text[1]!=='8')
      {
      
        errorHandler('*Must be atleast 10 digits and starts with 08');
      }
     

    return text.trim() !=='' && text.length>=10 && text[0]==='0' && text[1]==='8';
  }

  const subjectValidate=(value,errorHandler)=>{
    if(value.trim() ==='')
      {
        errorHandler('*Subject cannot be empty')
       
      }

    return value.trim() !=='';
  }
  const messageValidate=(value,errorHandler)=>{
    if(value.trim() ==='')
      {
        errorHandler('*Message cannot be empty')
       
      }

    return value.trim() !=='';
  }
  


const {value:enteredName,valueIsValid:nameIsValid,hasError:nameHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler,errMsg:nameErrMsg,inputReset:nameReset}=useInput(nameValidate);
const {value:enteredEmail,valueIsValid:emailIsValid,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,errMsg:emailErrMsg,inputReset:emailReset}=useInput(emailValidate);
const {value:enteredPhone,valueIsValid:phoneIsValid,hasError:phoneHasError,valueChangeHandler:phoneChangeHandler,inputBlurHandler:phoneBlurHandler,errMsg:phoneErrMsg,inputReset:phoneReset}=useInput(phoneValidate);
const {value:enteredSubject,valueIsValid:subjectIsValid,hasError:subjectHasError,valueChangeHandler:subjectChangeHandler,inputBlurHandler:subjectBlurHandler,errMsg:subjectErrMsg,inputReset:subjectReset}=useInput(subjectValidate);
const {value:enteredMessage,valueIsValid:messageIsValid,hasError:messageHasError,valueChangeHandler:messageChangeHandler,inputBlurHandler:messageBlurHandler,errMsg:messageErrMsg,inputReset:messageReset}=useInput(messageValidate);

let formValid=(nameIsValid && emailIsValid && phoneIsValid &&subjectIsValid && messageIsValid)??true;

    return (
        <Fragment>

                    <div className={classes.main}>
                    {isAuth &&<Sidebar />}
                {!isAuth && <div></div>}
                        <div className={classes['content-form']}>
                            <div className={classes['contactus']}>
                            <h1>Contact Us</h1>
                            <p>Our friendly team would love to hear from you!</p>
                            </div>
                            <Form id="formpesan" method="POST">
                                <div className={classes['content-input']}>
                                    <label htmlFor='nama'>Full Name  <span style={{ padding:"0",color:"red",paddingLeft:"10px" }}>
                                        {nameHasError && <span>{nameErrMsg}</span>}
                                    </span></label>
                                    <input onBlur={nameBlurHandler} onChange={event=>nameChangeHandler(event)} value={enteredName} name="nama" type="text" placeholder="Nama Lengkap"></input>
                                   
                                </div>             
                                <div className={classes['content-input']}>
                                    <label htmlFor='email'>Email <span style={{ padding:"0",color:"red",paddingLeft:"10px" }}>
                                        {emailHasError && <span>{emailErrMsg}</span>}
                                    </span></label>
                                    <input onBlur={emailBlurHandler} onChange={event=>emailChangeHandler(event)} value={enteredEmail} required name="email" type="email" placeholder="nama@mail.com"></input>
                                </div>
                                <div className={classes['content-input']}>
                                    <label htmlFor='no_HP'>Phone Number <span style={{ padding:"0",color:"red",paddingLeft:"10px" }}>
                                        {phoneHasError && <span>{phoneErrMsg}</span>}
                                    </span></label>
                                    <input onBlur={phoneBlurHandler} onChange={event=>phoneChangeHandler(event)} value={enteredPhone} required name="no_HP" type="number" placeholder="(08)-123456789"></input>
                                </div>
                                <div className={classes['content-input']}>
                                    <label htmlFor='subject'>Subject <span style={{ padding:"0",color:"red",paddingLeft:"10px" }}>
                                        {subjectHasError && <span>{subjectErrMsg}</span>}
                                    </span></label>
                                    <input  onBlur={subjectBlurHandler} onChange={event=>subjectChangeHandler(event)} value={enteredSubject} required name="subjek" type="text" placeholder="Perihal"></input>
                                </div>
                                <div className={classes['content-input']}>
                                    <label htmlFor='pesan'>Message <span style={{ padding:"0",color:"red",paddingLeft:"10px" }}>
                                        {messageHasError && <span>{messageErrMsg}</span>}
                                    </span></label>
                                    <textarea onBlur={messageBlurHandler} onChange={event=>messageChangeHandler(event)} value={enteredMessage} name="pesan" rows="7"></textarea>
                                </div>
                                <button disabled={!formValid } type="submit" onClick={(e)=>submitHandler(e)} className={classes['kirimbutton']}>Upload message</button>
                            </Form >
                        </div>
                        <div className={classes['maps']}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9895598527173!2d98.674173!3d3.589869099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cf83481853%3A0x3a7bca4684a64298!2sAryaduta%20Medan!5e0!3m2!1sen!2ssg!4v1689248257189!5m2!1sen!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                  

                    <div className={classes.main2}>
                        <div className={classes['main2con']}>
                        <div style={{paddingLeft:"3vw"}}>
                        <span style={{fontSize:"1.5vw" }}> Our Location </span>
                        <h1> Visit Our Library </h1>
                        <span style={{fontSize:"1.5vw" }}> Working hours: 7:30 AM - 15:00 PM</span>
                        </div>
                        </div>
                        <div className={classes['main2con2']}>
                        <div className={classes['minilogo']}></div>
                        </div>
                    </div>





        </Fragment>
    )
}

export default Contact



export const action = async({request})=>{
 
    const formData=await request.formData();
    console.log(formData.get("nama"));
    const value={
        nama:formData.get("nama"),
        email:formData.get('email'),
        no_HP:formData.get("no_HP"),
        subjek:formData.get('subjek'),
        pesan:formData.get('pesan')
    }
    console.log(value)
    const response=await fetch("http://localhost:8080/admin-perpustakaan-crown/pesan-masuk",
    {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
            'Authorization':"Bearer"
        },
        body:JSON.stringify(value)
    });
    return response
}
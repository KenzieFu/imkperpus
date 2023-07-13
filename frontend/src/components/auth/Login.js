import React, { useState } from 'react'
import Modal from '../../UI/Modal'
import classes from './Login.module.css'
import useInput from '../../hooks/use-input'
import { json, redirect, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../features/auth/authSlice'




const LoginModal = (props) => {
  const navigate = useNavigate();
    const [credError,setCredError]=useState();
    const dispatch=useDispatch();
  
  const usernameValidate=(value,errorHandler)=>{
    if(value.trim() ==='')
      {
        errorHandler('*Username cannot be empty')
       
      }

    return value.trim() !=='';
  }

  const passValidate=(value,errorHandler)=>
  {

    if(value.trim()==='')
    { 
      errorHandler("*Password cannot be empty");
    }
      
    else if(value.length < 8)
    {
      
      errorHandler("*Must be 8 Characters or more");
    }
      

      return value.trim() !== '' && value.length >= 8;
      
  }


 

  


  const {value: enteredUsername,valueIsValid:usernameIsValid,hasError:usernameHasError,valueChangeHandler:usernameChangeHandler,inputBlurHandler:usernameBlurHandler,errMsg:usernameErrMsg,inputReset:usernameReset}=useInput(usernameValidate);
  const {value: enteredPass,valueIsValid:passIsValid,hasError:passHasError,valueChangeHandler:passChangeHandler,inputBlurHandler:passBlurHandler,errMsg:passErrMsg,inputReset:passReset}=useInput(passValidate)

  let formValid=(usernameIsValid && passIsValid) ?? true ;
 
  /* const loginSubmit =(e)=>{
    e.preventDefault();
  
    navigate("/",{state:{message:"as"}});
  } */

  const login =async (e)=>
  {
    e.preventDefault();
    let url ="http://localhost:8080/auth/login"
      if(formValid){
        const authData ={
          username:enteredUsername,
          password:enteredPass
        };

        const response = await fetch(url,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(authData),
        });

        if(response.status === 404)
          setCredError("Account not found!");

        else if(response.status === 401)
        {
          setCredError("Username dan Password is wrong!")
        }
        else if(response.status ===500)
        {
          setCredError("Akun Belum Aktif!")
        }

        if(!response.ok)
       {
        throw json({message:"Could not authenticate user."},{status:500});
      }
      else{
        setCredError("");
        passReset();
        usernameReset();
        props.onClose();
        const resData=await response.json();
        console.log(resData);
        dispatch(authActions.setCredentials(resData))
        const token = resData.token;
        const user = resData.data;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user))
        const expiration = new Date();
        expiration.setMinutes(expiration.getMinutes()+40);
        /* expiration.setSeconds(expiration.getSeconds()+30); */
        /* expiration.setHours(expiration.getHours()+1); */
        localStorage.setItem('expiration',expiration.toISOString());
        navigate("/");
      }

     
      }
  }

  return (
    <Modal onClose ={props.onClose}>
      <div className={classes["flexlogin"]}>
      <img className={classes["loginimg"]} src='./assets/loginbg.png'/>
      <div className={classes["modallogin"]}>
      <div className={classes["close-logo"]} onClick={props.onClose}>+</div>
      <header className={classes["login-header"]}>
        <h1 className={classes["logo-h1"]}>Welcome to  <span>The Crown Library</span></h1>
        <p className={classes["logo-p"]}>Login to gain access to the Library!</p>
      </header>

      <div className={classes["errord"]}>
          {credError && <p>{credError}</p>}
      </div>

        <form className={classes.form} action="">
          <div>
          <label htmlFor='nama'>Username</label>
          <input placeholder="Username" onBlur={usernameBlurHandler} onChange={event=>usernameChangeHandler(event)} value={enteredUsername} type="text" id='username' />
          <div className={classes["errorp"]}>
          {usernameHasError && <p>{usernameErrMsg}</p>}
          </div>
          </div>
          <div>
          <label htmlFor='nama'>Password</label>
          <input placeholder="Password" onBlur={passBlurHandler} onChange={(event)=>passChangeHandler(event)} value={enteredPass} type="password" id='pass' />
          <div className={classes["errorp"]}>
          {passHasError && <p>{passErrMsg}</p>}
          </div>
          </div>
          <button onClick={(e)=>login(e)} disabled={!formValid }  className={classes["login-button"]}>Login</button>
        </form>
        </div>
        </div>
    </Modal>
  )
}

export default LoginModal





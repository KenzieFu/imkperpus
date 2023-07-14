import React, { Suspense, useEffect } from 'react'
import classes from './HomePage.module.css'
import { Info } from '../components/Info'
import { Navigate, redirect, useLoaderData, useLocation } from 'react-router-dom'
import { Await } from 'react-router-dom'
import { Dam } from './Dam'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const HomePage = () => {
    const navigate=useNavigate()
    /* const isAuthen=useSelector((state)=>state.auth.isAuth); */

    
   /*  const location = useLocation();
    console.log(location);*/
    const  authenticate=useSelector(state=>state.auth)
    if(authenticate?.isAuth && authenticate?.user?.hak_akses==="Siswa")
        return <Navigate to="/student"  />
    else if(authenticate?.isAuth && authenticate?.user?.hak_akses==="Admin")
    {
        if(authenticate.user?.hak_akses==="Admin" && authenticate.isAuth)
        return <Navigate to="/admin"/>
    }
    else if(authenticate?.isAuth && authenticate?.user?.hak_akses==="Petugas")
    {
        if(authenticate.user?.hak_akses==="Petugas" && authenticate.isAuth)
        return <Navigate to="/petugas"/>
    }

   
  
  return (
    <div className={classes.all}>
        <div className={classes.main}>
            <div className={classes['main-left']}>
                <div className={classes.quote}>
                    <span>Here is where knowledge begin and wisdom blossom </span>
                   {/*  {location.state && <h2>Halo</h2>} */}
                </div>
                <div className={classes['overflow-hidden']}>
                <div className={classes['drop-in']}>
                <h1 style={{ textAlign:"center",fontSize:"3vw", lineHeight:"4vw", fontWeight:"700"}}>
                   <span>Welcome to the <br></br> Crown Library</span>
                </h1>
                </div>
                </div>
                <div className={classes['overflow-hidden']}>
                <div className={classes['drop-in-2']} style={{ display:"flex",fontSize:"1.11vw", flexDirection:"column", marginBottom:"4vw", marginTop:"1vw" }}>
                    <span>Arya Duta Hotel, Jl. Kapten Lubis No.8, Petisah Tengah, </span>
                    <span>Medan Petisah, Medan City, North Sumatra 20112</span>
                </div>
                </div>
                <a href='#section' className={classes["main-button"]}>Get Started</a>
            </div>
        </div>


        <div id='section' className={classes.extrain}>
        <div className={classes.extran0}>
            <div className={classes['visimisi']}>
                <span> What is </span>
                <span>The Crown Library?</span>
            </div>   

            <div className={classes['quotevm']}>
            The Crown Library are a collection of materials, books or media that are accessible for use and not just for display purposes. The Crown Library serve as community centres, providing social interaction and learning opportunities.
            </div>
            <div className={classes['buttons']}>
                <a href='/Library'  className={classes["main-button2"]}> Learn More </a>
            </div>
        </div>

        {/* PHOTOS */}
        <div className={classes.midcontent}>
            <div className={classes['ml-content']}>
            </div>

            <div className={classes['mm-content']}>
            </div>

            <div className={classes['mr-content']}>
            </div>

            <div className={classes['mf-content']}>
            </div>
        </div>
        </div>
        
    </div>
  )
}

import React, { Suspense, useEffect } from 'react'
import classes from './HomePage.module.css'
import { Info } from '../components/Info'
import { Navigate, redirect, useLoaderData, useLocation } from 'react-router-dom'
import { Await } from 'react-router-dom'
import { Dam } from './Dam'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const DUMMY_info=[
    {id:"1",img:"./assets/info1.png",title:"Pendaftaran Tahun Ajaran 2023/2024",content:"If you need any further information, please feel free to contact us at 0812 345 678 ",button:"Register"},
    {id:"2", img:"./assets/info3.png", title:"Situs Perpustakaan Crown Library",content:"Peminjaman buku perpustakaan offline & online melalui website. ", button:"Website"}
]

let infos=DUMMY_info.map((info)=><Info img={info.img} title={info.title} content={info.content} button={info.button} />)



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
                <button className={classes["main-button"]}>Get Started</button>
            </div>
        </div>


        <div className={classes.extrain}>
        <div className={classes.extran0}>
            <div className={classes['visimisi']}>
                <span> What is </span>
                <span>The Crown Library?</span>
            </div>   

            <div className={classes['quotevm']}>
            The Crown Library are a collection of materials, books or media that are accessible for use and not just for display purposes. The Crown Library serve as community centres, providing social interaction and learning opportunities.
            </div>
            <div className={classes['buttons']}>
                <button className={classes["main-button2"]}> Learn More </button>
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


        {/* <div className={classes.newcontent}>
            <div className={classes["sim"]}>
                
            </div>
        </div>

        <div className={classes.content} >
            <div className={classes["left-content"]}>
                {infos}
            </div>
            <div className={classes["right-content"]}>
                <div>Image</div>
                <div>
                    <h1 className={classes["right-content_h2"]}>Pengumuman T.P. 2022/2023</h1>
                    <p className={classes["right-content_p"]}>Salam Sejahtera bagi kita semua.Ada beberapa hal yang perlu kami infokan sehubungan dengan 
                        kegiatan belajar mengajar:
                        <ol className={classes["right-content_ol"]}>
                            <li>Kegiatan Belajar Mengajar Semester Ganjil T.P. 2022 – 2023 dimulai pada tanggal 14 Juli 2022.</li>
                            <li>Pengambilan Buku Pelajaran 11 – 13 Juli 2022 di Lantai 1.</li>
                            <li>Masa Pengenalan Lingkungan Sekolah (MPLS) tanggal 14 Juli 2022 pukul 07.50 – 10.00.</li>
                            <li>Simulasi pembelajaran tanggal 15 Juli 2022 pukul 07.50 – 12.40.</li>
                            <li>Pembelajaran dilaksanakan secara penuh dengan tatap muka di sekolah mulai tanggal 18 Juli 2022</li>
                            <li>Untuk informasi lebih lanjut, kami informasikan melalui Group kelas.</li>
                        </ol>

                        Terima Kasih atas perhatian dan kerjasamanya.Methodist Charles Wesley
                    </p>
                </div>
            </div>
        </div> */}
        
    </div>
  )
}

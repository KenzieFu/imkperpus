import React from 'react'

import classes from './LatestBook.module.css'
export const LatestBook = ({latest}) => {
 console.log(latest)
  return (
    <>
       
            <>

        <div className={classes.box} style={{ maxWidth:"400px" }}>
        
            {latest!=0 &&<h1>Just Borrowed</h1>}
            {latest==0 && <h1>Empty</h1>}
             {latest !=0 &&<>
           
                
            <img style={{ textAlign:"center",margin:"20px 0" }} src={`http://localhost:8080${latest.buku.gambar_buku}`} width="270px" height="400px" alt="" />
   
            <div className={classes["book-info"]}>
                <h1 className={classes["book-info_h1"]}>{latest.buku.Judul_Buku}</h1>
                <span>{latest.buku.pengarang}</span>
            </div>
            <div className={classes.sinopsis}>
                <span>Synopsis</span>
                <p>{latest.buku.sinopsis}</p>
            </div>
            </>


}
        </div>

        </>
       
        </>
  )
}
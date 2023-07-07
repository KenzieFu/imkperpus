import React from 'react'
import classes from './Footer.module.css'
export const Footer = () => {
return (
<footer className={classes.footer}>

  <div className={classes.main} >
    <div className={classes["left-footer"]}>
      <h1>Address</h1>
      <span>Arya Duta Hotel, Jl. Kapten Lubis No.8, Petisah Tengah,</span>
      <span>Medan Petisah, Medan City, North Sumatra 20112</span>
    </div>

    <div className={classes.img}>
      <img className={classes.logo} src="./assets/logopng.png" alt="" />
    </div>
    <div className={classes["right-footer"]}>
      <h1>Contact Us</h1>
      <table>
        <tr>
          <td>Email</td>
          <td>&nbsp; : &nbsp;</td>
          <td>thecrownlibrary@gmail.com </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td> &nbsp; : &nbsp;</td>
          <td>(061) – 123 456</td>
        </tr>
      </table>
    </div>
  </div>

  <div className={classes.hori}>
    <h1 style={{padding:"0.7vw", paddingLeft:"2vw", paddingRight:"2vw", background:"#EEEEEE",display:"inline" }}>The Crown Library</h1>
  </div>
  <div style={{ fontSize:"1vw", marginTop:"1vw", textAlign:"center" }}>Copyright © - The Crown Library</div>



</footer>
)
}
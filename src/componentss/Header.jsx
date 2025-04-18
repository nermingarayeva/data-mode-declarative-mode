import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigation = useNavigate()
  return (
    <div style={{width:'100%',height:'17vh',backgroundColor:'#FDD000',margin:'0',padding:'0',boxSizing:'border-box'}}>
        <div><img  style={{width:'12%',paddingLeft:'80px'}} src="https://fake-coffee-api.vercel.app/Fake_Api_Logo_yellow.gif" alt="" />
        <div style={{fontFamily:'Permanent Marker',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',paddingLeft:'75px',paddingRight:'5px',top:'-60px'}}>
            <a href="/home">Home</a> 
            <a  onClick={() => navigation('/shop')} href="">Shop</a>
            <a href="/promotions">PROMOTIONS</a>
            <a href="/contactus">CONTACT US</a>
            <a href="/categories">CATEGORIES</a>
        </div>
        </div>
       
    </div>
  )
}

export default Header
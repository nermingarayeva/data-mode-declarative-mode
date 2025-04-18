import React from 'react'

const Home = () => {
  return (
    <div style={{backgroundColor:'#FDD000',width:'100%',height:'83vh'}}>
        <div style={{fontFamily:'Permanent Marker',width:'42%',fontSize:'20px',paddingLeft:'85px',paddingTop:'50px'}}>
            <h2 style={{color:'#7A4A2F'}}>Sweet, Creamy and bold
               <h1 style={{color:'#F393BE'}}>Horchata is our muse.</h1> 
                Sip on our new seasonal menu,
                crafted with good taste.</h2>
                </div>
         <img  style={{width:'25%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',right:'-750px',top:'-380px'}} src="https://fake-coffee-api.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroImg.0c88cddd.png&w=1920&q=75" alt="" />
         <img style={{position:'relative',bottom:'550px',right:'-1200px'}} src="https://fake-coffee-api.vercel.app/_next/static/media/beans3.70626ea2.svg" alt="" />
         <img style={{position:'relative',bottom:'850px',right:'-1200px'}} src="https://fake-coffee-api.vercel.app/_next/static/media/beans2.598b9c89.svg" alt="" />
         <img  style={{position:'relative',bottom:'580px',right:'-500px',width:'7%'}}src="https://fake-coffee-api.vercel.app/_next/static/media/arrow-down.c7bcf1d9.svg" alt="" />
    </div>
  )
}

export default Home
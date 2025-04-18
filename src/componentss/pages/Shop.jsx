import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Shop = () => {
  const [data, setData] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    axios.get("https://api.sampleapis.com/coffee/hot").then((res) => {
      setData(res.data);
    });

    const storedWish = JSON.parse(localStorage.getItem('wish')) || []
    setWishlist(storedWish)
  }, [])

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let existing = cart.find(x => x.id === item.id)

    if (existing) {
      cart = cart.map(x =>
        x.id === item.id ? { ...x, count: x.count + 1 } : x
      )
    } else {
      cart = [...cart, { ...item, count: 1 }]
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const addToWish = (item) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    const exists = wish.find(x => x.id === item.id)

    if (exists) {
      wish = wish.filter(x => x.id !== item.id)
    } else {
      wish = [...wish, item]
    }

    setWishlist(wish)
    localStorage.setItem('wish', JSON.stringify(wish))
  }

  const inWish = (id) => wishlist.some(item => item.id === id)

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '5px',
      padding: '20px',
      backgroundColor:'#FFD66B'
    }}>
      {data.map(item => (
        <div key={item.id} style={{
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          padding: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(76, 82, 13, 0.1)',
          backgroundColor: '#fff',
          transition: 'transform 0.5s, z-index 0.3s',
          position: 'relative', 
          zIndex: 2,
          cursor: 'pointer'
        }} 
        onMouseEnter={e => {
          e.currentTarget.style.zIndex = 10;
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.zIndex = 1;
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          <img style={{width:'35%'}} src="https://fake-coffee-api.vercel.app/_next/image?url=%2Floadingcoffeebean.jpg&w=128&q=75" alt="" />
          <img style={{ width: '150px', height: '150px', objectFit: 'contain' }} src={item.image} alt="" />
          <span style={{color:'black',fontWeight:'300',fontFamily:'Permanent Marker'}}>{item.title}</span>
          <span style={{color:'#888',fontWeight:'300',fontFamily:'Permanent Marker'}}>${item.price}</span>
          <button
            style={{
              padding: '8px',
              border: 'none',
              backgroundColor:'#AC7145',
              color: 'white',
              cursor: 'pointer',
              marginTop: '20px',
              width: '58%',
              fontFamily:'Permanent Marker'
            }}
            onClick={() => addToCart(item)}
          >
            Add to basket
          </button>
          <button
            style={{
              padding: '8px',
              border: 'none',
              backgroundColor: '#449C5A',
              color: 'white',
              cursor: 'pointer',
              marginTop: '6px',
              width: '58%',
              fontFamily:'Permanent Marker'
            }}
            onClick={() => addToWish(item)}
          >
            {inWish(item.id) ? 'Remove' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Shop

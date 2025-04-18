import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Home from './pages/Shop'

const Layout = () => {
  return (
    <div>
       <Header/>
       <Outlet/> 
    </div>
  )
}

export default Layout
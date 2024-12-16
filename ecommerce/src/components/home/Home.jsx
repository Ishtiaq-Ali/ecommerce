import React from 'react'
import SideBar from '../sidebar/SideBar'
import Herosection from '../herosection/Herosection'
import Categories from '../categories/Categories'
import ThisMonth from '../thismonth/ThisMonth'
import Products from '../products/Products'
import Featured from '../featured/Featured'

const Home = () => {
  return (
    <div className=''>
    <SideBar />
      <Herosection />
      <Categories />
      <ThisMonth />
      <Products />
      <Featured />

    </div>
  )
}

export default Home
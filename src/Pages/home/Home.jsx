import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch,useSelector } from 'react-redux'
import { AddtoCart, deletFromCart } from '../../redux/CartSlice'
import { Link } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=>state.cart);
 

  const addCart = () =>{
    dispatch(AddtoCart("shirt"));
  }
  const deletCart = () =>{
    dispatch(deletFromCart("shirt"));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  
  return (
    <div>
      <Layout>
      
        <HeroSection></HeroSection>
        <Filter></Filter>
        <ProductCard></ProductCard>

        <div className='flex justify-center -mt-18 mb-4'>
          <Link to={"/allproducts"}>
          <button className='bg-pink-600 text-white px-5 py-2 rounded-xl'>See more products</button>
          </Link>
        </div>

        <Track></Track>
        <Testimonial></Testimonial>
      </Layout>
    </div>
  )
}

export default Home

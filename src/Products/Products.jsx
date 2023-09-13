import React from 'react'
import './Products.css';
import cookware from './cookware.jpeg';

const Products = () => {
  return (
    <div className="px-44 py-20">
      <h1 className="text-center text-5xl font-bold">Products</h1>
      <br/>
      <p className="text-center">Sona Gift N' Crockery is the perfect destination for kitchen and home décor. Whether you are looking for kitchenware, cookware, dinner sets, flower pots, biodegradable plastics, containers, kitchen appliances, chairs, kitchen utensils, or anything else related to kitchen and home décor, you will find it all here. We are committed to providing our customers with the highest quality products and excellent customer service. Visit us today and explore our wide range of products and unique designs.</p>
      <div>
        <img className="h-32 w-32" src={cookware} alt="Cookware" />
        <h2>Cookware</h2>
        <p className="w-14">Discover the Perfect Cookware for Your Kitchen at Sona Crockery</p>
      </div>
    </div>
  )
}

export default Products
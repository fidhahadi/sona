import React from 'react'
import './Products.css';
import cookware from './cookware.jpeg';


const Products = (props) => {
  return (
    <>
      <div className="lg:px-44 lg:py-20">
        <h1 className="text-center text-4xl font-bold text-gray-700">Products</h1>
        <p className="products-description text-center text-gray-700">{props.description}</p>
        <div className="container-products">
          <div className="product">
            <img className="imageProd" src={cookware} alt="Cookware" />
            <h2 className="font-bold h2-heading">Cookware</h2>
            <p className="describe-product">Discover the Perfect Cookware for Your Kitchen at Sona Crockery</p>
          </div>



          <div className="">
            <img className="imageProd" src={cookware} alt="Cookware" />
            <h2 className="font-bold h2-heading">Cookware</h2>
            <p className="describe-product">Discover the Perfect Cookware for Your Kitchen at Sona Crockery</p>
          </div>


          <div className="">
            <img className="imageProd" src={cookware} alt="Cookware" />
            <h2 className="font-bold h2-heading">Cookware</h2>
            <p className="describe-product">Discover the Perfect Cookware for Your Kitchen at Sona Crockery</p>
          </div>


        </div>

      </div>

    </>
  )
}

export default Products
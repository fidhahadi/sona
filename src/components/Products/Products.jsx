import React from 'react'
import './Products.css';
import cookware from './cookware.jpg';
import kitchenware from './kitchenware.jpg';
import gardening from './gardening.jpg';
import electronic from './electronic.jpg';
import cleaning from './cleaning.jpg';
import dinnersets from './dinner-sets.jpg';


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

          <div className="product">
            <img className="imageProd" src={kitchenware} alt="Cookware" />
            <h2 className="font-bold h2-heading">Kitchenware</h2>
            <p className="describe-product">​Stylish and Colorful Crockery for Your Kitchen: Shop the Latest Kitchenware Collection Now</p>
          </div>


          <div className="product">
            <img className="imageProd" src={gardening} alt="Cookware" />
            <h2 className="font-bold h2-heading">Gardening</h2>
            <p className="describe-product">Add a Splash of Color to Your Home with Beautiful Flower Pots from our shop.</p>
          </div>
        </div>

        <div className="container-products">
          <div className="product">
            <img className="imageProd" src={electronic} alt="Cookware" />
            <h2 className="font-bold h2-heading">Electronic Appliances</h2>
            <p className="describe-product">Stock Up on the Best Electronics for Your Kitchen</p>
          </div>

          <div className="product">
            <img className="imageProd" src={cleaning} alt="Cookware" />
            <h2 className="font-bold h2-heading">Cleaning Equipments</h2>
            <p className="describe-product">Shop the Cleaning Essentials You Need to Keep Your Crockery Looking As Good As New</p>
          </div>


          <div className="product">
            <img className="imageProd" src={dinnersets} alt="Cookware" />
            <h2 className="font-bold h2-heading">Dinner Sets</h2>
            <p className="describe-product">Make Your Dining Table Spectacular with Our Gorgeous Dinner Sets</p>
          </div>
        </div>



      </div>

    </>
  )
}

export default Products
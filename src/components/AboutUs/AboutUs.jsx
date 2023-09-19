import React from 'react';
import sona from './wyd.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="lg:py-24 lg:px-48 ">
        <h1 className="text-center text-4xl font-extrabold text-gray-700">Our Story</h1>
        <br /><br />
            <div className="container">
            <div className="image">
                  <img className="rounded-t-lg" src={sona} alt="sona"/>
                </div>
                <br />
                <div className="text">
                  <p className="text-l font-medium text-center text-gray-700">Sona Crockery is a family-owned business that has been in operation for 28 years. Over the course of its history, the company has grown from a small business to one of the largest of its kind in the region, with three other firms gradually joining in to form what is now a large and successful enterprise. Sona Crockery also has several franchises in other districts, allowing them to provide their products and services to even more customers.</p>
                  <br />
                  <p className="text-l font-medium text-center text-gray-700">Our commitment to quality and craftsmanship is evident in all of our products, which are made from the finest materials. We are proud to offer our customers the very best in crockery and we strive to provide an excellent experience with every purchase.</p>
                </div>
            </div>
    </div>
  )
}

export default AboutUs
import React from 'react';
import sona from './sona.jpg';
import sony from './sony.jpg';
import best from './best.jpg';
import './PartnerFirms.css';

function PartnerFirms() {
    return (
        <div className="lg:py-24 lg:px-48 ">
            <h1 className="text-center text-4xl font-extrabold text-gray-700">Partner Firms</h1>
            <br /><br />
            <div className="container">
                <div className="image">
                    <img className="imagePartner" src={sona} alt="sona" />
                </div>
                <br />
                <div className="text">
                    <br /><br />
                    <h1 className="text-center font-medium text-2xl text-gray-600 ">Sona Crockery</h1><br />
                    <p className="text-l font-normal text-center text-gray-700">At Sona Crockery, we specialize in providing quality kitchenware and electronic appliances. Our store has a wide range of items, from school items to kitchenware to electronic appliances. We also have a retail counter where customers can purchase directly from us.

                    </p>
                    <br />
                    <p className="text-l font-normal text-center text-gray-700"> Our mission is to make sure our customers are always satisfied with the products and services that we provide. We strive to bring our customers the best items at the best prices, with a focus on quality and customer service. Visit us today to see what we have to offer</p>
                </div>
            </div>
            <br /><br />

            <div className="container">
                <div className="sonytext">
                    <br /><br />
                    <h1 className="text-center font-normal text-2xl text-gray-600 ">Sony Distributors</h1><br />
                    <p className="text-l font-normal text-center text-gray-700">Sony Distriutors has been supplying quality crockery items to retailers, restaurants and households since 1993. Our range of products includes family plastics, melamine items, glassware, and stainless steel utensils. We offer wholesale prices and bulk orders for those in need of larger quantities.</p>
                    <br />
                    <p className="text-l font-normal text-center text-gray-700">We also have a godown facility where all our products are stored and shipped on demand.For the best quality crockery items, Sony Distriutors is your one-stop shop. We offer competitive prices and excellent customer service. Visit our shop to find out more.</p>
                </div>
                <div className="sonyimage">
                    <img className="" src={sony} alt="sona" />
                </div>
                <br />

            </div>

            <br />
            <br />
            <div className="container">
                <div className="image">
                    <img className="imagePartner" src={best} alt="sona" />
                </div>
                <br />
                <div className="text">
                    <br /><br />
                    <h1 className="text-center font-normal text-2xl text-gray-600 ">Best Agencies</h1><br />
                    <p className="text-l font-normal text-center text-gray-700">Best Agencies is an in-house firm that specializes in providing crockery and cleaning equipments. Our mission is to provide quality and professional services to our clients. We use the latest technologies and techniques to ensure that our products are of the highest standards.</p>
                    <br />
                    <p className="text-l font-normal text-center text-gray-700">Our team is comprised of experienced personnel who are passionate about delivering products and services that meet our client’s needs. We strive to provide our customers with the best service possible and ensure that all our products are safe and reliable.</p>
                </div>
            </div>





        </div>
    )
}

export default PartnerFirms
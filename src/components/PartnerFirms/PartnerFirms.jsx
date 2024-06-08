import React from 'react';
import Card from '../Card/Card';

import sona from './sona.jpg';
import sony from './sony.jpg';
import best from './best.jpg';
import './PartnerFirms.css';
import data from './data'


const PartnerFirms = () => {
    return (
        <section id="services">
            <h2>My Services</h2>
            <p>I give you the best in all the services below</p>
            <div className="container services__container" data-aos="fade-up">
                {
                    data.map(item => (
                        <Card key={item.id} className="service light">
                            <div className="service__icon">{item.icon}</div>
                            <div className="service__details">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}



export default PartnerFirms
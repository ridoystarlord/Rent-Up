import React from 'react';
import Heading from '../Common/Heading/Heading';
import "./Features.css"
import FeaturesCard from './FeaturesCard';

const Features = () => {
    return (
        <>
            <section className='featured background'>
                <div className='container'>
                    <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
                    <FeaturesCard />
                </div>
            </section>
            
        </>
    );
};

export default Features;
import React from 'react';
import Heading from '../Common/Heading/Heading';
import PackagesCard from './PackagesCard';
import "./Packages.css"

const Packages = () => {
    return (
        <>
            <section className='price padding'>
                <div className='container'>
                    <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
                    <PackagesCard />
                </div>
            </section> 
        </>
    );
};

export default Packages;
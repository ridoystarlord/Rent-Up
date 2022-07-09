import React from 'react';
import Heading from '../Common/Heading/Heading';
import "./RecentProperty.css"
import RecentPropertyCard from './RecentPropertyCard';

const RecentProperty = () => {
    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                    <RecentPropertyCard />
                </div>
            </section>
        </>
    );
};

export default RecentProperty;
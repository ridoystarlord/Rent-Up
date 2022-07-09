import React from 'react';
import Awards from '../Awards/Awards';
import FeaturedAgents from '../FeaturedAgents/FeaturedAgents';
import Features from '../Features/Features';
import HeroBanner from '../HeroBanner/HeroBanner';
import Locations from '../Locations/Locations';
import Packages from '../Packages/Packages';
import RecentProperty from '../RecentProperty/RecentProperty';

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <Features />
            <RecentProperty />
            <Awards />
            <Locations />
            <FeaturedAgents />
            <Packages />
        </>
    );
};

export default HomePage;
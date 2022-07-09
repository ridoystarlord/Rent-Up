import React from 'react';

interface IHeadingProps {
    title: String | null | undefined
    subtitle: String | null | undefined
}

const Heading = ({ title, subtitle }:IHeadingProps) => {
    return (
        <>
          <div className='heading'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>  
        </>
    );
};

export default Heading;
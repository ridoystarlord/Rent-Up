import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { nav } from "../../Data/Data"

const Header = () => {
    const [navList, setNavList] = useState<boolean>(false)
    return (
        <>
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <Link to="/">
                        <img src="./images/logo.png" alt="" />
                    </Link>
                </div>
                <div className='nav'>
                    <ul className={navList ? "small" : "flex"}>
                        {nav.map((list:any, index:number) => (
                            <li key={index}>
                                <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='toggle'>
                    <button onClick={() => setNavList(!navList)}>
                        {
                        navList ? 
                            <i className='fa fa-times'></i> : 
                            <i className='fa fa-bars'></i>
                        }
                    </button>
                </div>
            </div>
        </header>
            
        </>
    );
};

export default Header;
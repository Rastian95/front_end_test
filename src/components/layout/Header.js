import React from 'react';
import Logo from '../../assets/SVGs/Logo.svg';
import LogoPerson from '../../assets/SVGs/icn_search.svg';
import LogoSearch from '../../assets/SVGs/icn_person.svg';
// import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="row justify-content-around header">
            <div className='col-12 col-md-8'>
                <div className="d-flex">
                    <img className="mr-auto logo" src={Logo} alt="logo"  ></img>
                    <img src={LogoPerson} alt="logoPerson" className='logo' ></img>
                    <img src={LogoSearch} alt="logoSearch" className='logo' style={{width: '1.5rem'}}></img>
                </div>
            </div>
            
            {/* <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link> */}
        </header>
    )
}



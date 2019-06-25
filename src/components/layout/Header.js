import React from 'react';
import Logo from '../../assets/SVGs/Logo.svg';
import LogoPerson from '../../assets/SVGs/icn_search.svg';
import LogoSearch from '../../assets/SVGs/icn_person.svg';
// import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <div>
                <img src={Logo} alt="logo" style={logo}></img>
                <img src={LogoPerson} alt="logo" style={logo}></img>
                <img src={LogoSearch} alt="logo" style={logo}></img>
            </div>
            
            {/* <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link> */}
        </header>
    )
}

const headerStyle = {
    background: '#004A80',
    color: '#fff',
    textAlign: 'center',
    height: '65px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const logo ={
    margin: '10px'
}
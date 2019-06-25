import React from 'react';
import LogoLock from '../../assets/SVGs/lock.svg';

export default function Search() {
    return (
        <div style={searchStyle}>
            <h1>Search Any Email Address</h1>
            <h4><span style={{color: '#F6BC25'}}>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!</h4>
            <input type='email' id='email' name='email' placeholder='EMAIL'/>
            <button id='searchEmail'>GO!</button>
            <div>
                <img src={LogoLock} alt="logoLock" style={logo}></img>
                <p>Enter Any Email Address. They won't be notified.</p>
            </div>
            
        </div>
    )
}


const searchStyle = {
    background: '#004A80',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}

const logo ={
    margin: '10px'
}
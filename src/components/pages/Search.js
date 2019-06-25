import React from 'react';
import LogoLock from '../../assets/SVGs/lock.svg';
import { isNullOrUndefined } from 'util';


export default function Search() {
    return (
        <div className='row justify-content-center search'>
            <div className='col-12 col-md-8'>
                <h1>Search Any Email Address</h1>
                <h6><span style={{color: '#F6BC25'}}>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!</h6>
                <div className='d-flex flex-column flex-md-row'>
                    <input style={{marginBottom: '0.5rem'}} type='email' id='email' name='email' className="form-control" placeholder='EMAIL'/>
                    <button style={{marginBottom: '0.5rem'}} id='searchEmail' className="btnGo" >GO!</button>
                </div> 
                <div className="d-flex text-left">
                    <img src={LogoLock} alt="logoLock" className="logo"></img>
                    <span style={{paddingTop: '0.5rem', color: '#F6BC25'}}>Enter Any Email Address. They won't be notified.</span>
                </div>
            </div>
        </div>
    )
}
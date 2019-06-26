import React, {useState} from 'react';
import LogoLock from '../../assets/SVGs/lock.svg';



export default function Search() {
    
    const [state, setState] = useState({active: false})
    const [input, setInput] = useState({value: '', color: ''})
    const [label, setLabel] = useState({value: 'EMAIL', color: ''})

    let changeActive = (e) => {
        if(input.value === ""){
            setState({active: !state.active});
            setInput({value: e.target.value,color: ''});
            setLabel({value: 'EMAIL',color: ''});
        }else{
            valid(e);
        }
    }

    let onChange = (e) => {
        setInput({value: e.target.value,color: input.color});
    }

    let valid = (e) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value) && e.target.value !== '') {
            setInput({value: e.target.value,color: '#37c669'});
            setLabel({value: 'EMAIL',color: ''});
        }else{
            setInput({value: e.target.value,color: '#DC0015'});
            setLabel({value: 'Please add a valid email address',color: '#DC0015'});
        }
    }

    return (
        <div className='row justify-content-center search'>
            <div className='col-12 col-md-8'>
                <h1>Search Any Email Address</h1>
                <h6><span style={{color: '#F6BC25'}}>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!</h6>
                <div id="floatContainer" className={`d-flex flex-column flex-md-row float-container ${state.active ? "active" : ""}`}>
                        <label  htmlFor="email" style={{color: label.color}}>{label.value}</label>
                        <input style={{marginBottom: '0.5rem', borderWidth: '2px', borderColor : input.color}} onFocus={changeActive} onBlur={changeActive} value={input.value} onChange={onChange} type='email' id='email' name='email' className="form-control"/>
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



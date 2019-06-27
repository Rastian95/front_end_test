import React, {useState} from 'react';
import LogoLock from '../../assets/SVGs/lock.svg';
import uuid from 'uuid';


export default function Search(props) {
    
    const [input, setInput] = useState({value: ''})
    const [label, setLabel] = useState({active: false, value: 'EMAIL', color: '', inputColor: ''})

    const onChange = (e) => {
        setInput({value: e.target.value});
    }
    
    const onFocus = () => {
        setLabel({active: true, value: label.value, color: label.color});
    }

    const onBlur = () => {
        if(input.value === ''){
            setLabel({active: false,value: 'EMAIL',color: '', inputColor: ''});
        }else if(!isMail(input.value)){
            setLabel({active: true,value: 'Please add a valid email address',color: '#DC0015', inputColor: '#DC0015'});
        }else{
            setLabel({active: true,value: 'EMAIL',color: '', inputColor: ''});
        }
    } 

    const onClick = () => {
        if(isMail(input.value) && input.value !== ''){
            if(!props.searchEmail(input.value)){
                alert("No data found");
            }
            setInput({value: ""});
            setLabel({active: false,value: 'EMAIL',color: '', inputColor: ''});
        }
    }

    const isMail = (email) => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    return (
        <div className='row justify-content-center search'>
            <div className='col-12 col-md-8'>
                { props.result === "" || props.result === undefined
                    ? [<h1 key={uuid.v4()}>Search Any Email Address</h1>,<h6 key={uuid.v4()}><span style={{color: '#F6BC25'}}>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!</h6>]
                    : [<h1 key={uuid.v4()}>Can’t Find The Right Person?</h1>,<h6 key={uuid.v4()}><span style={{color: '#F6BC25'}}>Try Again</span> - Make a new search</h6>]
                }
                <div id="floatContainer" className={`d-flex flex-column flex-md-row float-container ${label.active ? "active" : ""}`}>
                        <label  htmlFor="email" style={{color: label.color}}>{label.value}</label>
                        <input 
                            style={{marginBottom: '0.5rem', borderWidth: '2px', borderColor : label.inputColor}} 
                            onFocus={onFocus} onBlur={onBlur} value={input.value} onChange={onChange}
                            type='email' id='email' name='email' className="form-control"
                        />
                        <button style={{marginBottom: '0.5rem'}} onClick={onClick} type="submit" id='searchEmail' className="btnGo" >GO!</button>
                </div>
                <div className="d-flex text-left">
                    <img src={LogoLock} alt="logoLock" className="logo"></img>
                    <span style={{paddingTop: '0.5rem', color: '#F6BC25'}}>Enter Any Email Address. They won't be notified.</span>
                </div>
            </div>
        </div>
    )
}



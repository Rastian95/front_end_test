import React from 'react'

export default function Result() {
    return (
        <div className='row justify-content-center result'>
            <div className='col-12 col-md-8'>
                <h1 style={{color: '#004A80', textAlign: 'center'}}>Result</h1>
                <p style={{textAlign: 'center'}}>Look at the result below to see the details of the person you’re searched for.</p>
                <div className="card">
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-12">
                                <ol>
                                    <li><span>John Smith, 35</span><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className='col-12 col-md-6'>
                                <p>Address</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Phone Numbers</p>
                                <p>
                                    (555) 555-5555<br/>
                                    (555) 555-5555<br/>
                                    (555) 555-5555
                                </p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Email</p>
                                <p>loremipsum@dolorsit.com</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Relatives</p>
                                <p>
                                    Jane Smith<br/>
                                    John Smith Jr
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

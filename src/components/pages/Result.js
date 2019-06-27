import React from 'react';
import uuid from 'uuid';

export default function Result(props) {
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
                                    <li><span>{props.result.name}, {props.result.age}</span><br/>{props.result.notes}</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 col-md-6'>
                                <p>Address</p>
                                <p>{props.result.address}</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Phone Numbers</p>
                                <p>{props.result.phoneNumbers.map( (row) => (<React.Fragment key={uuid.v4()}>{row.phone}<br/></React.Fragment>))}</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Email</p>
                                <p>{props.result.email}</p>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p>Relatives</p>
                                <p>{props.result.relatives.map( (row, i) => (<React.Fragment key={uuid.v4()}>{row.name}<br/></React.Fragment>))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

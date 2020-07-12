import React from 'react';
import CountUp from 'react-countup';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } } ) => {
    
   if(!confirmed){
        return (
            <Loader
                className='text-center mt-7'
                style={{ marginTop: '150px' }}
                type="Puff"
                color="#b9f4bc"
                height={100}
                width={100}
            />
        )
    }
   
    return (
        <>
            <div className='container-fluid mt-5 mb-5 p-0 text-center' style={{fontFamily: 'Poppins'}}>
                <div className='row offset-lg-1 col-lg-10'>

                    <div className='col-lg-3 col-10 offset-1 mb-5'>
                        <div className="card"  style={{  borderTop: '10px solid rgba(0,0,255,0.5)'  }}>
                           
                            <div className="card-body">
                                <h5 className="card-title text-muted" style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400,}}>Infected</h5>
                                <h5 className="card-text">
                                    <CountUp className='text-primary' start={0} end={confirmed.value} separator="," />
                                </h5>
                                <span className='text-muted' style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400 }}>{new Date(lastUpdate).toDateString()}</span> <br/>
                                <span className='text-primary' style={{ fontSize: '12px', letterSpacing: '1px', fontWeight: 400 }}>No of confirmed cases</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3  col-10 offset-1 mb-5'>
                        <div className="card" style={{  borderTop: '10px solid rgba(0,255,0,0.5)'  }}>
                            
                            <div className="card-body">
                                <h5 className="card-title text-muted" style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400 }}>Recovered</h5>
                                <h5 className="card-text">
                                    <CountUp className='text-success' start={0} end={recovered.value} separator="," />
                                </h5>
                                <span className='text-muted' style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400 }}>{new Date(lastUpdate).toDateString()}</span> <br/>
                                <span className='text-success' style={{ fontSize: '12px', letterSpacing: '1px', fontWeight: 400 }}>No of recovery cases</span>
                        
                            </div>
                        </div>
                        </div>
                    <div className='col-lg-3  col-10 offset-1 mb-5'>
                        <div className="card" style={{  borderTop: '10px solid rgba(255,0,0,0.5)'  }}>
                           
                           <div className="card-body">
                               <h5 className="card-title text-muted" style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400 }}>Deaths</h5>
                               <h5 className="card-text">
                                <CountUp className='text-danger' start={0} end={deaths.value} separator="," />
                               </h5>
                               <span className='text-muted' style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: 400 }}>{new Date(lastUpdate).toDateString()}</span> <br/>
                               <span className='text-danger' style={{ fontSize: '12px', letterSpacing: '1px', fontWeight: 400 }}>No of death cases</span>
                           </div>
                       </div>
                    </div>

                </div>
            </div> 
        </>
    )
}

export default Cards;
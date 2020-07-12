import React from 'react'
import clip1 from '../../images/—Pngtree—person sprays disinfectant to fight_5346769.png'
import clip2 from '../../images/pngwave(26).png'
import clip3 from '../../images/pngwave(27).png'

const Prevention = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor:'#FCF8F7', padding: '120px 0px 180px 0', fontFamily: 'Poppins' }}>
            <div className='text-center'>
                <span style={{ borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success text-center'>Prevention</span>
                <h2 className='mt-5 pl-3 pr-3' style={{ fontSize: '2rem' }}>COVID -19 Prevention Tips</h2>
            </div>
            <div className='row mt-5 col-lg-10 offset-lg-1' style={{ display:'flex', justifyContent: 'space-around' }}>

                <div className='col-xl-3 card text-center p-3 shadow col-10 offset-1 mt-3'>
                    <img src={clip3} alt='' width='150' height='150' style={{ margin: '10px auto 10px' }} />
                    <div className="card-body">
                        <h5 className="card-title">Wash Your Hands</h5>
                        <p className="card-text text-muted">
                            Use warm water and soap and rub your hands for at least 20 seconds.<br/><br/>
                            Use hand sanitizer when you cannot wash your hands properly. 
                            
                        </p>
                    </div>
                </div>

                <div className='col-xl-3 card text-center p-3 shadow col-10 offset-1 mt-3'>
                    <img src={clip1} alt='' width='150' style={{ margin: '10px auto 10px', borderRadius: '50%' }} />
                    <div className="card-body">
                        <h5 className="card-title">Clean & Disinfect</h5>
                        <p className="card-text text-muted">
                        Use alcohol-based disinfectants to clean hard surfaces in your home.<br/><br/>
                        Use white vinegar or hydrogen peroxide solutions for general cleaning in between disinfecting surfaces.
                        </p>
                    </div>
                </div>

                <div className='col-xl-3 card text-center p-3 shadow col-10 offset-1 mt-3'>
                    <img src={clip2} alt='' width='150' height='150'  style={{ margin: '10px auto 10px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Avoid Contact</h5>
                        <p className="card-text text-muted">
                        If you must go out for necessities, keep a distance of 6 feet (2 m) from other people. You can transmit the virus by speaking to someone in close contact to you.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Prevention

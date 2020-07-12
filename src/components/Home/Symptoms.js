import React from 'react'
import img from '../../images/image-from-rawpixel-id-2284857-png.png'
 
const Symptoms = () => {
    return (
        <div className='container-fluid pb-5' style={{  padding: '80px 0px 250px 0',height:'100%', overflow: 'hidden', fontFamily: 'Poppins',background: '#fff' }}>
            <div className="row">

                <div className='col-lg-5 offset-lg-1 col-10 offset-2 mt-5 pb-5'>
                    <img className='img-fluid p-5 symp-img' src={img} alt='Stay Home' width='550' />
                </div>

                <div className='col-lg-5 offset-lg-0 col-8 offset-2'>
                    <span style={{ borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success'>Symptoms</span>
                    <h2 className='mt-5 pr-3 pl-3' style={{ fontSize: '2rem' }}>What are the main symptoms?</h2>
                    <p className='mt-5 text-info'>
                        The COVID-19 virus affects different people in different ways.COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment. People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.
                    </p>
                    <div className='row mt-5 '>
                        <ul style={{ listStyle: 'circle', listStylePosition: 'inside', paddingLeft: '15px' }}>
                            <li style={{ listStyleType: 'none', color: '#000', fontSize: '1.2rem' }}>Common Symptoms include:</li>
                            <li className='text-info mt-3'>Fever</li>
                            <li className='text-info'>Tiredness</li>
                            <li className='text-info'>Dry Cough</li>
                        </ul>

                        <ul style={{ listStyle: 'circle', listStylePosition: 'inside', paddingLeft: '15px' }}>
                            <li style={{ listStyleType: 'none', color: '#000', fontSize: '1.2rem' }}>Other Symptoms Include:</li>
                            <li className='text-info mt-3'>Aches & Pains</li>
                            <li className='text-info'>Sore Throat</li>
                            <li className='text-info'>Shortness of Breath</li>
                        </ul>
                        
                    </div>
                </div>
                
                
            </div>
         
        </div>
    )
}

export default Symptoms

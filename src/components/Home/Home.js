import React, { useState, useEffect } from 'react'
import Prevention from './Prevention'
import home from '../../images/banner-img-2.png'
import Symptoms from './Symptoms'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'
import { fetchData } from '../../api';
import img from '../../images/World-Map1.png'

const Home = () => {
    const [data,setData] = useState({})
    useEffect(() => {
        async function fetchAPI(){
            const fetchedData = await fetchData();
            setData(fetchedData)
        }
        fetchAPI()
        
    })
    
    return (
        <>
            <div className='text-center' style={{ background: '#fff',paddingTop: '125px', backgroundColor: '#fff', backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)', paddingBottom: '50px' }}>
                <span style={{ borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success mt-5'>COVID GLOBAL CASES</span><br/><br/>
                <Cards data={data} />
            </div>
            <div className='container-fluid home-container' style={{ height: '100vh', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 0 }}>
                <div className="row home-row">
                    <div className='col-lg-5 offset-lg-1 col-8 offset-2' style={{ padding: '12% 0px 180px', }}>
                        <span style={{ borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success'>Stay Home</span>
                        <h2 className='mt-5' style={{ fontSize: '50px' }}>Stay Home, Keep Yourself & Your family safe</h2>
                    </div>
                    <div className='col-lg-5 mr-3'>
                        <img src={home} alt='Stay Home' className='img-fluid home-img' />
                    </div>
                    
                </div>
            </div>
            <Prevention />
            <Symptoms />
            <Footer />
        </>
    )
}

export default Home

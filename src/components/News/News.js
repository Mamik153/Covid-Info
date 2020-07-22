import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Footer from '../Footer/Footer';

const News = () =>{
    const [loading, setLoading] = useState(true);
    const [ news, setNews ] = useState({news: []});
    const [error, setError] = useState('');
    
    useEffect(() => {
        async function fetchMyAPI() {
            await fetch('https://cryptic-ravine-96718.herokuapp.com/')
            .then((response) => response.json())
            .then((data) => {
              setLoading(false);
              setNews(data);
            })
            .catch((e) => {
              setLoading(false);
              setError('fetch failed');
            });
        }
        fetchMyAPI()
        
    }, []);

    return(
        <div style={{ marginTop: '20px' }}>
            <div  className='text-center header'>
                <span style={{ border: '0',borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success text-center'>COVID-19 NEWS</span>
                <h1 className="text-center mt-3">{error ? <span className='text-danger'>Error: {error}</span> : ''}</h1>
            </div>
            
            
                {loading ? 
                    <>
                        <Loader
                            className='text-center mt-5'
                            style={{ marginTop: '150px' }}
                            type="Puff"
                            color="#b9f4bc"
                            height={100}
                            width={100}
                
                        />
                        <h4 className='text-center text-success'>LOADING...</h4>
                    </>
                    : 
                    <>
                        {news.news.map( (item, i) => {
                            return (
                                <div key={i} className="col-lg-10 offset-lg-1">
                                    <div className="mt-5 card offset-lg-3 col-lg-6" style={{paddingRight: 0, paddingLeft: 0, borderRadius: '10px' }} >
                                        <img src={item.img} className="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px',borderTopRightRadius: '10px', padding: 0, margin: 0 }} />
                                        <div className="card-body pt-5 pb-5">
                                            <h5 className="card-title">{item.title}</h5>
                                            <a href={item.link} rel="noopener noreferrer" target="_blank" className="card-text">
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <Footer />
                    </>
                }
            

        </div>
    )
}

export default News
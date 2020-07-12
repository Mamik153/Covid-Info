import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid p-5 pt-5' style={{ backgroundColor:'#FCF8F7', overflow: 'hidden'}}>
            <div className='row mt-3'>
                <div className='col-sm-3 offset-sm-2 col-8 offset-2'>
                    <span className='text-danger' style={{ fontFamily: 'Raleway', fontSize: '2rem', letterSpacing: '2px' }}>COVID INFO</span>
                    <p className='text-muted mt-3' style={{ fontSize: '13px', fontFamily: 'Poppins'  }}>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus. Protect yourself and others from infection by washing your hands.</p>
                </div>
                <div className='col-sm-3 offset-sm-2 col-8 offset-2'>
                    <p style={{ fontSize: '1.5rem', fontFamily:'Poppins' }}>Useful Links</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0px', fontSize: '15px' }}>
                        <li className='text-info mt-3'>
                            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports' target='_blank' rel="noopener noreferrer">
                                Situation Reports
                            </a>
                        </li>
                        <li className='text-info'>
                            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' target='_blank' rel="noopener noreferrer">
                                Advice For Public
                            </a>
                        </li>
                        <li className='text-info'>
                            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donors-and-partners' target='_blank' rel="noopener noreferrer">
                                Donors & Partners
                            </a>
                        </li>
                        <li className='text-info'>
                            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov' target='_blank' rel="noopener noreferrer">
                                Global Research
                            </a>
                        </li>
                        <li className='text-info'>
                            <a href='https://covid19.who.int/' target='_blank' rel="noopener noreferrer">
                                WHO COVID Dashboard
                            </a>
                        </li>
                        <li className='text-info'>
                            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters' target='_blank' rel="noopener noreferrer">
                                Myth Busters
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>            
        </div>
    )
}

export default Footer

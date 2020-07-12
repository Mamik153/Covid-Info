import React from 'react'
import WhatCard from './WhatCard'
import Footer from '../Footer/Footer'

const cards = [
    {id: 'One', title: 'What is Coronavirus?', body: 'Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.'},
    {id: 'Two', title: 'What is COVID-19?', body: 'COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.'},
    {id: 'Three', title: 'What are the symptoms of COVID-19?', body: 'The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include aches and pains, nasal congestion, headache, conjunctivitis, sore throat, diarrhea, loss of taste or smell or a rash on skin or discoloration of fingers or toes. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.\n\nMost people (about 80%) recover from the disease without needing hospital treatment. Around 1 out of every 5 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer, are at higher risk of developing serious illness.  However, anyone can catch COVID-19 and become seriously ill.  People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath, chest pain/pressure, or loss of speech or movement should seek medical attention immediately. If possible, it is recommended to call the health care provider or facility first, so the patient can be directed to the right clinic.'},
    {id: 'Four', title: 'What to do if I have symptoms of COVID-19?', body: 'If you have minor symptoms, such as a slight cough or a mild fever, there is generally no need to seek medical care. Stay at home, self-isolate and monitor your symptoms. Follow national guidance on self-isolation. \n\nHowever, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever.  Seek medical help.  When you attend the health facility wear a mask if possible, keep at least 1 metre distance from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice. \n\nSeek immediate medical care if you have difficulty breathing or pain/pressure in the chest. If possible, call your health care provider in advance, so he/she can direct you to the right health facility.'},
    {id: 'Five', title: 'How does COVID-19 spread?', body: 'People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these droplets from a person infected with the virus.  This is why it is important to stay at least 1 meter) away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.  People can become infected by touching these objects or surfaces, then touching their eyes, nose or mouth.  This is why it is important to wash your hands regularly with soap and water or clean with alcohol-based hand rub. \n\nWHO is assessing ongoing research on the ways that COVID-19 is spread and will continue to share updated findings.'},
    {id: 'Six', title: 'Can COVID-19 becought from a person who has no symptoms?', body: 'COVID-19 is mainly spread through respiratory droplets expelled by someone who is coughing or has other symptoms such as fever or tiredness. Many people with COVID-19 experience only mild symptoms. This is particularly true in the early stages of the disease. It is possible to catch COVID-19 from someone who has just a mild cough and does not feel ill. \n\nSome reports have indicated that people with no symptoms can transmit the virus. It is not yet known how often it happens. WHO is assessing ongoing research on the topic and will continue to share updated findings.'},
    {id: 'Seven', title: 'How can we protect ourselves and others if we don\'t know who is infected', body: 'Practicing hand and respiratory hygiene is important at ALL times and is the best way to protect others and yourself. \n\nWhen possible maintain at least a 1 meter distance between yourself and others. This is especially important if you are standing by someone who is coughing or sneezing.  Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, maintaining a physical distance with everyone is a good idea if you are in an area where COVID-19 is circulating. '},
    {id: 'Eight', title: 'What should I do if I come in close contact with someone who has COVID-19?', body: `If you have been in close contact with someone with COVID-19, you may be infected. \n\nClose contact means that you live with or have been in settings of less than 1 metre from those who have the disease. In these cases, it is best to stay at home.\n\nHowever, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.\n\nIf you do not live in an area with malaria or dengue fever please do the following: \n\n > If you become ill, even with very mild symptoms you must self-isolate\n > Even if you don’t think you have been exposed to COVID-19 but develop symptoms, then self-isolate and monitor yourself\n > You are more likely to infect others in the early stages of the disease when you just have mild symptoms, therefore early self-isolation is very important\n > If you do not have symptoms, but have been exposed to an infected person, self-quarantine for 14 days.\n\nIf you have definitely had COVID-19 (confirmed by a test) self-isolate for 14 days even after symptoms have disappeared as a precautionary measure – it is not yet known exactly how long people remain infectious after they have recovered. Follow national advice on self-isolation.`},
]

const What = () => {
    return (
        <>
            <div className='container-fluid mt-5 pt-5' style={{ overflow:'hidden', fontFamily: 'Poppins' }}>
                <div className='row'>
                    <div className='text-center col-lg-4 offset-lg-1 col-8 offset-2' style={{padding: '200px 0px 0px 0', }}>
                        <span style={{ border: '0',borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success mb-5'>COVID-19 Q&A</span>
                        <h1 className='mt-3'>Q&A on coronaviruses (COVID-19)</h1>
                        <p className='text-info left'>
                            WHO is continuously monitoring and responding to this outbreak. This Q&A will be updated as more is known about COVID-19, how it spreads and how it is affecting people worldwide. For more information, check back regularly on WHO’s coronavirus pages. 
                            <br/><br/>
                            <a style={{ fontSize: '20px' }} className='row ml-3' href ='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/' target='_blank' rel="noopener noreferrer">Click to know more&nbsp;<div style={{ marginTop: '3px' }}><ion-icon name="arrow-forward-outline"></ion-icon></div></a>
                        </p>
                    </div>
                    <div className="accordion p-5 col-lg-6 ml-0 col-md-10 offset-md-1 offset-1 col-sm-12 col-12" id="QnA" style={{marginTop: '20px', padding: '20px', width: '100vw', alignItems: 'center'}}>
                        
                        {
                            cards.map( (card, i) => {
                                return <WhatCard key={i} {...card} />
                            } )
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default What

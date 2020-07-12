import React from 'react'

const WhatCard = (props) => {
    return (
        <div className="card mt-3" style={{ border: '1px solid #b9f4bc',width: '105%', borderRadius: '10px' }}>
            <div className="card-header bg-white" id={`heading${props.id}`}>
                <p className="mb-0">
                    <button className="btn btn-link collapsed text-success" type="button" data-toggle="collapse" data-target={`#collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`} >
                        {props.title}
                    </button>
                </p>
            </div>
            <div id={`collapse${props.id}`} className="collapse" aria-labelledby={`heading${props.id}`} data-parent="#QnA">
                <div className="card-body p-5" style={{ whiteSpace: 'pre-wrap', fontSize: '.8rem' }}>
                    {props.body}
                </div>
            </div>
        </div>
    )
}

export default WhatCard

import React from 'react'
import {Link} from 'react-router-dom'


const Nav = (props) => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm " id="header">
                <Link className="navbar-brand mr-5 pl-5" to="/" style={{ fontFamily: 'Raleway', fontSize: '25px' }}>
                    COVID INFO
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
                </button>
            
                <div className="collapse navbar-collapse justify-content-end ml-5" id="navbarSupportedContent">
        
                    <ul className="navbar-nav ml-auto mr-5" style={{fontFamily: 'Poppins' }}>
                        <li className="nav-item mr-3">
                            <Link className="nav-a text-info" to="/">Home</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-a text-info" to="/news">News</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-a text-info" to="/stats">Stats</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-a text-info" to="/QnA">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            { props.children }
        </>
    )
}

export default Nav

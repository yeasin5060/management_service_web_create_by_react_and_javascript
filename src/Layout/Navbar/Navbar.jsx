import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className='container'>
            <div className='navbar_wrapper'>
                <div className='navabr_wrapper_logo_box'>
                    <img src={logo} alt="not found" />
                </div>
                <div className='navabr_wrapper_link_box'>
                    <ul className='navabr_wrapper_link'>
                       <li>
                            <NavLink to = "/">home</NavLink>
                       </li>
                       <li>
                            <NavLink to = "about">about</NavLink>
                       </li>
                       <li>
                            <NavLink to = "service">service</NavLink>
                       </li>
                       <li>
                            <NavLink to = "faq">faq</NavLink>
                       </li>
                       <li>
                            <NavLink to = "contact">contact</NavLink>
                       </li>
                    </ul>
                    <div className='navabr_wrapper_button_box'>
                        <button className='navabr_wrapper_btn'>get a quote</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
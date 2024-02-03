import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";

const Footer = () => {
  return (
   <section id='footer'>
        <div className='container'>
            <div className='footer_wrapper'>
                <div className='footer_wrapper_logo_box'>
                    <img src={logo} alt="not found" />
                </div>
                <div className='footer_wrapper_copyright_link_box_flex'>
                    <div className='footer_wrapper_link_box_flex'>
                        <div className='footer_wrapper_copyright_link_box'>
                            <FaLinkedinIn className='react_icon' />
                        </div>
                        <div className='footer_wrapper_copyright_link_box'>
                            <FaFacebookF className='react_icon'/>
                        </div>
                        <div className='footer_wrapper_copyright_link_box'>
                            <IoWifiOutline className='react_icon' />
                        </div>
                    </div>
                    <div className='footer_wrapper_copyright_box'>
                        <p className='footer_wrapper_copyright'>Copyright © 2023 Melissa Donovan · All Rights Reserved ·<span className='footer_wrapper_privacy'>privacy</span></p>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Footer
import React from 'react'
import './Aboutconsultant.css'
import Pera from '../../../../Utilities/Pera/Pera'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import aboutimg from '../../../../images/aboutimg.jpg'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import { Link } from 'react-router-dom'

const Aboutconsultant = () => {
  return (
    <section id='aboutconsultant'>
        <div className='container'>
            <div className='aboutconsultant_wrapper'>
                <div className='aboutconsultant_image_contant_box'>
                    <div className='aboutconsultant_image_box'>
                        <img src={aboutimg} alt="not found" />
                    </div>
                    <div className='aboutconsultant_image_contant_wrapper'>
                        <Pera text="“Working with Melissa has been invaluable, and I credit her for helping me become the writer I am today. She helped me promote my book, set up schedules for my social media accounts, and designed my author page. I feel blessed to have had the opportunity to work with her.”" style="aboutconsultant_image_contant_wrapper_pera"/>
                        <Nanohead text="Lori Gurtman" style="aboutconsultant_image_contant_wrapper_name"/>
                        <Pera text="Author" style="aboutconsultant_image_contant_wrapper_person"/>
                    </div>
                </div>
                <div className='aboutconsultant_main_contant_box'>
                    <Minihead text="Meet Your Website Consultant" style="aboutconsultant_main_contant_box_head"/>
                    <Pera text="My name is Melissa Donovan. Since 2007, I’ve been a website consultant who is passionate about helping others succeed.

                    Writing and design have been integral in my career. I’ve been writing personally and professionally for over twenty years, and I’ve been designing and developing websites for over fifteen years. I carry a BA in English with a concentration in creative writing, and I’ve studied website design and development both inside and outside of academia.

                    I am also the founder and editor of Writing Forward, a successful blog packed with creative writing tips and ideas, and I’ve authored several books on the craft of writing.

                    I work with small business owners, self-employed professionals, entrepreneurs, artists, and individuals who want to harness the power of the internet to reach their audiences.

                    My mission is to provide dynamic online marketing strategies for small businesses. My top priority is generating results. Yes, I build and manage websites, and I’ll help you implement solutions to draw traffic to your website. But more importantly, I work hard to bring customers to your business."  style="aboutconsultant_main_contant_box_pera"/>
                    <div className='aboutconsultant_main_contant_butto_box'>
                        <Link className='aboutconsultant_main_contant_btn' to="checkservice">CHECK OUT MY SERVICES</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutconsultant
import React from 'react'
import './Homebanar.css'
import { Link } from 'react-router-dom'
import Pera from '../../../../Utilities/Pera/Pera'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import Subhead from '../../../../Utilities/Subhead/Subhead'

const Homebanar = () => {
  return (
   <section id='homebanar'>
        <div className='container'>
            <div className='homebanar_wrapper'>
                <div className='homebanar_wrapper_contant_box'>
                    <div className='homebanar_wrapper_contant'>
                        <Subhead text="WEBSITE DESIGN AND MAINTENANCE FOR SMALL BUSINESSES" style="homebanar_wrapper_contant_box_head"/>
                        <Nanohead text="HELPING SMALL BUSINESSES SUCCEED ONLINE" style="homebanar_wrapper_contant_box_nanohead"/>
                        <div className='homebanar_wrapper_pera_box'>
                            <Pera text="You want your small business to stand out on the web, and Buzz Pro Studio can help, with a full suite of website design, maintenance, and marketing solutions designed to bring customers to your business.Whether you need a fresh website design or want someone to handle your website updates and online marketing efforts, I’ve got it covered. My specialty is website management, making sure your site is always up-to-date and fulfilling its purpose.Consultations are also available to help you learn how to run an effective website while navigating the world of marketing a small business on the internet." style="homebanar_wrapper_contant_box_pera"/>
                        </div>
                    </div>
                    <div className='homebanar_wrapper_button_box'>
                        <Link to = "websiteservice" className='homebanar_wrapper_btn'>WEBSITE SERVICES</Link>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homebanar
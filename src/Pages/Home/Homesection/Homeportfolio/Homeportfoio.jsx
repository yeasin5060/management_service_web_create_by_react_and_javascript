import React from 'react'
import './Homeportfolio.css'
import Subhead from '../../../../Utilities/Subhead/subhead'
import portfolioone from '../../../../images/portfolioone.jpg'
import { Link } from 'react-router-dom'

const Homeportfoio = () => {
  return (
   <section id='homeportfolio'>
        <div className='container'>
            <div className='homeportfolio_wrapper'>
                <div className='homeportfolio_wrapper_head_box'>
                    <Subhead text="Website Design Portfolio" style="homeportfolio_wrapper_head"/>
                </div>
                <div className='homeportfolio_wrapper_image_box'>
                    <img src={portfolioone} alt="notfound" />
                </div>
                <div className='homeportfolio_wrapper_btn_box'>
                    <Link to = "fullportfolio" className='homeportfolio_wrapper_btn'>VIEW FULL PORTFOLIO</Link>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homeportfoio
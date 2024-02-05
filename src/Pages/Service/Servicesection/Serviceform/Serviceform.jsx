import React from 'react'
import './Serviceform.css'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Pera from '../../../../Utilities/Pera/Pera'

const Serviceform = () => {
  return (
    <section id='homeform'>
        <div className='container'>
            <div className='serviceform_wrapper'>
                <div className='serviceform_wrapper_content_box'>
                    <Nanohead text="WHAT'S IN STORE FOR YOUR WEBSITE?" style="serviceform_wrapper_content_nanohead"/>
                    <Minihead text="GET A QUOTE FOR WEBSITE SERVICES" style="serviceform_wrapper_content_head"/>
                    <Pera text="Are you ready to make your business a success online? I'm ready to help. Just tell me about your business and your website by filling out the form below. There's no obligation until you decide to hire me. You'll receive a response within one business day. Need something that you don’t see here? Let me know how I can help you." style="serviceform_wrapper_content_pera"/>
                </div>
                <form className='serviceform_wrapper_form_box'>
                    <div className='serviceform_wrapper_form_box_flex'>
                        <div className='serviceform_wrapper_left_box_flex'>
                            <div className='serviceform_wrapper_left_box'>
                                <input className='serviceform_wrapper_input_box' type="text" placeholder='Your Name' />
                            </div>
                            <div className='serviceform_wrapper_left_box'>
                                <input type="text" className='serviceform_wrapper_input_box' placeholder='Your Email Address' />
                            </div>
                            <div className='serviceform_wrapper_left_box'>
                                <input type="text" className='serviceform_wrapper_input_box' placeholder='Your Phone Number' />
                            </div>
                        </div>
                        <div className='serviceform_wrapper_right_box_flex'>
                            <div className='serviceform_wrapper_right_box'>
                                <input type="text" className='serviceform_wrapper_input_box' placeholder='Name of Your Company'/>
                            </div>
                            <div className='serviceform_wrapper_right_box'>
                                <input type="text" className='serviceform_wrapper_input_box' placeholder='your Website Address (URL)' /> 
                            </div>
                            <div className='serviceform_wrapper_right_box'>
                                <input type="text" className='serviceform_wrapper_input_box' placeholder='Subject' />
                            </div>
                        </div>
                    </div>
                    <textarea className='serviceform_wrapper_textarea' type = "text" placeholder='Tell me about your project'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Serviceform
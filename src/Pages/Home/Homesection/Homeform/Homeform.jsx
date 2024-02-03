import React from 'react'
import './Homeform.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import Pera from '../../../../Utilities/Pera/Pera'

const Homeform = () => {
  return (
    <section id='homeform'>
        <div className='container'>
            <div className='homaform_wrapper'>
                <div className='homaform_wrapper_content_box'>
                    <Nanohead text="WHAT'S IN STORE FOR YOUR WEBSITE?" style="homaform_wrapper_content_nanohead"/>
                    <Minihead text="GET A QUOTE FOR WEBSITE SERVICES" style="homaform_wrapper_content_head"/>
                    <Pera text="Are you ready to make your business a success online? I'm ready to help. Just tell me about your business and your website by filling out the form below. There's no obligation until you decide to hire me. You'll receive a response within one business day. Need something that you don’t see here? Let me know how I can help you." style="homaform_wrapper_content_pera"/>
                </div>
                <form className='homaform_wrapper_form_box'>
                    <div className='homaform_wrapper_form_box_flex'>
                        <div className='homaform_wrapper_left_box_flex'>
                            <div className='homaform_wrapper_left_box'>
                                <input className='homaform_wrapper_input_box' type="text" placeholder='Your Name' />
                            </div>
                            <div className='homaform_wrapper_left_box'>
                                <input type="text" className='homaform_wrapper_input_box' placeholder='Your Email Address' />
                            </div>
                            <div className='homaform_wrapper_left_box'>
                                <input type="text" className='homaform_wrapper_input_box' placeholder='Your Phone Number' />
                            </div>
                        </div>
                        <div className='homaform_wrapper_right_box_flex'>
                            <div className='homaform_wrapper_right_box'>
                                <input type="text" className='homaform_wrapper_input_box' placeholder='Name of Your Company'/>
                            </div>
                            <div className='homaform_wrapper_right_box'>
                                <input type="text" className='homaform_wrapper_input_box' placeholder='your Website Address (URL)' /> 
                            </div>
                            <div className='homaform_wrapper_right_box'>
                                <input type="text" className='homaform_wrapper_input_box' placeholder='Subject' />
                            </div>
                        </div>
                    </div>
                    <textarea className='homeform_wrapper_textarea' type = "text" placeholder='Tell me about your project'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Homeform
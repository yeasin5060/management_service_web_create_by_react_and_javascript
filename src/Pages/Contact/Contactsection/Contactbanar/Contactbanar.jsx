import React from 'react'
import './Contactbanar.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import { Link } from 'react-router-dom'

const Contactbanar = () => {
  return (
    <section id='contantbanar'>
        <div className='container'>
            <div className='contactbanar_wrapper'>
                <div className='contactbanr_contant_box'>
                    <Minihead text="CONTACT ME" style="contactbanr_contant_box_head"/>
                    <p className='contactbanr_contant_box_pera'>I welcome all feedback and questions. Please fill out the form below to send me a message. If you have a specific project in mind, <Link className='contactbanr_contant_box_pera_link' to = "">click here to get a quote online.</Link> </p>
                </div>
                <form className='contactbanar_wrapper_form'>
                    <div className='contactbanar_wrapper_form_box'>
                        <div className='contactbanar_wrapper_form_input_box'>
                            <input className='contactbanar_wrapper_form_input' type="text" placeholder='Name' />
                        </div>
                        <div className='contactbanar_wrapper_form_input_box'>
                            <input className='contactbanar_wrapper_form_input' type="text" placeholder='Email Address' />
                        </div>
                    </div>
                    <textarea className='contactbanar_wrapper_form_textarea ' type = "text" placeholder='Message'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contactbanar
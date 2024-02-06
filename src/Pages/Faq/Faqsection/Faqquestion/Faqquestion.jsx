import React from 'react'
import './Faqquestion.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Pera from '../../../../Utilities/Pera/Pera'
import { Link } from 'react-router-dom'

const Faqquestion = () => {
  return (
    <section id='faqqustion'>
        <div className='container'>
            <div className='faqqustion_contant_wrapper'>
                <Minihead text="Got Questions?" style="faqqustion_wrapper_head"/>
                <Pera text="If you didn’t find the answers you were looking for, drop me a line. I’d be happy to answer any other questions that you have." style="faqqustion_wrapper_pera"/>
                <Link className='faqqustion_contant_wrapper_link' to="faqquestioncontact">CONTACT ME</Link>
            </div>
        </div>
    </section>
  )
}

export default Faqquestion
import React from 'react'
import './Faqhead.css'
import Subhead from '../../../../Utilities/Subhead/Subhead'
import Pera from '../../../../Utilities/Pera/Pera'
import { Link } from 'react-router-dom'

let arrayleft = [
    {
        id : 1,
        text : "How does a long-term service like website maintenance work?",
        link : ""
    },
    {
        id : 2,
        text : "What types of payment do you accept?",
        link : ""
    },
    {
        id :3 ,
        text : "How do deposits and payments work? In fact, how does the whole process work?",
        link : ""
    },
    {
        id : 4,
        text : "I just requested a quote. How long will it take?",
        link : ""
    },
    {
        id : 5,
        text : "How long will it take you to complete my project?",
        link : ""
    },
    {
        id : 6,
        text : "What are your business days and holidays?",
        link : ""
    },
    {
        id :7 ,
        text : "How soon can you start working on my project?",
        link : ""
    },
]

let arrayright = [
    {
        id :1 ,
        text : "Are you willing to work as part of a team?",
        link : ""
    },
    {
        id : 2,
        text : "Are you available for in-person meetings?",
        link : ""
    },
    {
        id :3 ,
        text : "What if I want to discuss my project by phone?",
        link : ""
    },
    {
        id : 4,
        text : "What is your confidentiality or privacy policy?",
        link : ""
    },
    {
        id : 5,
        text : "Who owns the material if I’ve paid you to create it?",
        link : ""
    },
    {
        id :6 ,
        text : "Will you maintain my website once you’ve finished building it?",
        link : ""
    },
    {
        id : 7,
        text : "What if I’m not satisfied with your work? Do you offer guarantees or refunds?",
        link : ""
    },
]

const Faqhead = () => {
  return (
   <section id='faqhead'>
        <div className='container'>
            <div className='faqhead_contant_wrapper'>
                <div className='faqhead_contant_box'>
                    <Subhead text="FREQUENTLY ASKED QUESTIONS" style="faqhead_contant_box_head"/>
                    <Pera text="If you can't find an answer to your question here, please contact me. I'll usually get back to you within one business day, and there's a good chance I'll add your question (and my answer) to this page!" style="faqhead_contant_box_pera"/>
                </div>
                <div className='faqhead_link_flex'>
                    <div className='faqhead_link_box_flex'>
                        {
                            arrayleft.map((item , index)=>(
                                <div key={index} className='faqhead_link_box'>
                                    <Link to = "">{item.text}</Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className='faqhead_link_box_flex'>
                        {
                            arrayright.map((item,index)=>(
                                <div key={index} className='faqhead_link_box'>
                                    <Link to = "">{item.text}</Link>
                                </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Faqhead
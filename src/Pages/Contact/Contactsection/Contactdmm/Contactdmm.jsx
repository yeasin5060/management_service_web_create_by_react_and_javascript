import React from 'react'
import './Contactdmm.css'
import Subhead from '../../../../Utilities/Subhead/Subhead'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let arraydmm = [
    {
        id : 1,
        head : "DESIGN",
        nanohead : "Get a fresh, flexible, fully customized website design that brings visitors to your website and converts them into customers for your business.",
        link : "design",
        linkname : "LEARN MORE"
    },
    {
        id : 2,
        head : "Maintenance",
        nanohead : "Focus on running your business while a professional manages your website. I’ll keep your website secure and updated with routine maintenance.",
        link : "maintenance",
        linkname : "LEARN MORE"
    },
    {
        id : 3,
        head : "Marketing",
        nanohead : "Bring more traffic to your website and more customers to your business with smart, effective marketing strategies that get results.",
        link : "marketing",
        linkname : "LEARN MORE"
    },
]

const Contactdmm = () => {
  return (
    <section id='contactdmm'>
        <div className='container'>
            <div className='contactdmm_wrapper'>
                {
                    arraydmm.map((item , index)=>(
                        <div className='contactdmm_wrapper_content_box'>
                            <div className='contactdmm_wrapper_content'>
                                <Subhead text={item.head} style="contactdmm_wrapper_head"/>
                                <Nanohead text={item.nanohead} style="contactdmm_wrapper_nanohead"/>
                            </div>
                            <div className='contactdmm_wrapper_content_btn_box'>
                                <Link className="contactdmm_wrapper_content_btn" to = {item.link}>{item.linkname}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </section>
  )
}

export default Contactdmm
import React from 'react'
import './Aboutdmm.css'
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

const Aboutdmm = () => {
  return (
    <section id='aboutdmm'>
        <div className='container'>
            <div className='aboutdmm_wrapper'>
                {
                    arraydmm.map((item , index)=>(
                        <div className='aboutdmm_wrapper_content_box'>
                            <div className='aboutdmm_wrapper_content'>
                                <Subhead text={item.head} style="aboutdmm_wrapper_head"/>
                                <Nanohead text={item.nanohead} style="aboutdmm_wrapper_nanohead"/>
                            </div>
                            <div className='aboutdmm_wrapper_content_btn_box'>
                                <Link className="aboutdmm_wrapper_content_btn" to = {item.link}>{item.linkname}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </section>
  )
}

export default Aboutdmm
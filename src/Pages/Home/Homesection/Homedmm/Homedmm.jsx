import React from 'react'
import './homedmm.css'
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

const Homedmm = () => {
  return (
   <section id='homedmm'>
        <div className='container'>
            <div className='homedmm_wrapper'>
                {
                    arraydmm.map((item , index)=>(
                        <div className='homedmm_wrapper_content_box'>
                            <div className='homedmm_wrapper_content'>
                                <Subhead text={item.head} style="homedmm_wrapper_head"/>
                                <Nanohead text={item.nanohead} style="homedmm_wrapper_nanohead"/>
                            </div>
                            <div className='homedmm_wrapper_content_btn_box'>
                                <Link className="homedmm_wrapper_content_btn" to = {item.link}>{item.linkname}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </section>
  )
}

export default Homedmm
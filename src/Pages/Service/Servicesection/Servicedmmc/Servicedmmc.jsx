import React from 'react'
import './Servicedmmc.css'
import { FaCrown } from "react-icons/fa";
import Pera from '../../../../Utilities/Pera/Pera';
import Nanohead from '../../../../Utilities/Nanohead/Nanohead';
import { Link } from 'react-router-dom';
import Minihead from '../../../../Utilities/Minihead/Minihead';

let arraydmmc = [
    {
        id: 1,
        service : "WEBSITE DESIGN",
        pera : "GET A FRESH, FLEXIBLE WEBSITE DESIGN THAT HELPS YOUR BUSINESS SUCCEED ONLINE.",
        peratwo : "Get a website that represents your business, appeals to your customers, and generates results based on your goals. ",
        link : "details",
        btn : " Get Details"
    },
    {
        id: 2,
        service : "WEBSITE MAINTENANCE",
        pera : "LET A PRO MANAGE YOUR WEBSITE WHILE YOU FOCUS ON RUNNING YOUR BUSINESS.",
        peratwo : "Keep your site secure and functional with regular software updates, backups, and reports, plus updates to the content.",
        link : "details",
        btn : "Get Details"
    },
    {
        id:3 ,
        service : "CONTENT & MARKETING",
        pera : "DRAW TRAFFIC TO YOUR WEBSITE AND BRING CUSTOMERS TO YOUR BUSINESS.",
        peratwo : "Use strategic marketing campaigns to draw traffic and customers: SEO, social media, newsletters, and more.",
        link : "details",
        btn : "Get Details"
    },
    {
        id: 4,
        service : "COACHING & CONSULTS",
        pera : "GET YOUR QUESTIONS ANSWERED ABOUT RUNNING A WEBSITE AND DOING BUSINESS ONLINE",
        peratwo : "Do you have questions about online marketing? Do you want to learn more about running a website? Get answers. ",
        link : "details",
        btn : "Get Details"
    },
]

const Servicedmmc = () => {
  return (
    <section id='servicedmmc'>
        <div className='container'>
            <div className='servicedmmc_wrapper'>
                <div className='servicedmmc_wrapper_main_contant_box'>
                    <FaCrown className='servicedmmc_wrapper_contant_crown_icon' />
                    <Pera text="Buzz Pro Studio provides a full suite of website services, specializing in website design and maintenance for small businesses, as well as online marketing, coaching and consultations." style="servicedmmc_wrapper_contant_crown_pera"/>
                </div>
                <div className='servicedmmc_wrapper_box_flex'>
                    {
                        arraydmmc.map((item , index)=>(
                            <div key={index} className='servicedmmc_wrapper_contant_box'>
                                <div className='servicedmmc_wrapper_contant_head_box'>
                                    <Minihead text= {item.service} style="servicedmmc_wrapper_contant_head"/>
                                </div>
                                <div className='servicedmmc_wrapper_contant_pera_box'>
                                    <Pera text={item.pera} style="servicedmmc_wrapper_contant_pera"/>
                                    <Nanohead text={item.peratwo} style="servicedmmc_wrapper_contant_heading"/>
                                </div>
                                <div className='servicedmmc_wrapper_contant_btn_box'>
                                    <Link to = {item.link} className='servicedmmc_wrapper_contant_btn'>{item.btn}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Servicedmmc
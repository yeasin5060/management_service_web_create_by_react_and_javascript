import React from 'react'
import './Aboutstudio.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Pera from '../../../../Utilities/Pera/Pera'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'

const Aboutstudio = () => {
  return (
    <section id='aboutstudio'>
        <div className='container'>
            <div className='aboutstudio_wrapper'>
                <div className='aboutstudio_contant_box'>
                    <Minihead text="ABOUT BUZZ PRO STUDIO" style="aboutstudio_contant_head"/>
                    <Pera text="Buzz Pro Studio specializes in website design and management for small businesses. Coaching and consultations are available, along with a full suite of online marketing solutions.

                    Every project is approached with a clear sense of purpose, and all online marketing strategies are built around a clearly-defined goal and measurable results for optimum performance and guaranteed return on investment (ROI).

                    Buzz Pro Studio is built on the philosophy that the best way to succeed is to deliver an outstanding product and excellent customer service. Your success is my success. When you work with me, you’ll get results. But you’ll also get personalized, friendly service." style="boutstudio_contant_pera"/>
                </div>
                <div className='aboutstudio_contant_mini_box'>
                    <Pera text="For a small business, running a website is fraught with technical headaches. I discovered Melissa five years ago when I realized that I needed help. Since then, she’s become an essential and highly-valued part of my team. ”" style="aboutstudio_contant_mini_pera"/>
                    <Nanohead text="Judith Jensen" style="aboutstudio_contant_mini_name"/>
                    <Pera text="Entrepreneur, Quiet Karma" style="aboutstudio_contant_mini_karma"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutstudio
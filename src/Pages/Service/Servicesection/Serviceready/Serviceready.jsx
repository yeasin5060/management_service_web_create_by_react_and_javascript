import React from 'react'
import './Serviceready.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Pera from '../../../../Utilities/Pera/Pera'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'

const Serviceready = () => {
  return (
    <section id='service_ready'>
        <div className='container'>
            <div className='service_ready_wrapper'>
                <Minihead text="ARE YOU READY?" style="service_ready_wrapper_head"/>
                <Pera text="I’m dedicated to serving small businesses and independent professionals, and I'm ready to work with you to make your website a success." style="service_ready_wrapper_pera"/>
                <Nanohead text="LET'S GET STARTED!" style="service_ready_wrapper_nanohead"/>
            </div>
        </div>
    </section>
  )
}

export default Serviceready
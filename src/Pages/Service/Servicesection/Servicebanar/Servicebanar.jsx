import React from 'react'
import './Servicebanar.css'
import Subhead from '../../../../Utilities/Subhead/Subhead'
import Pera from '../../../../Utilities/Pera/Pera'

const Servicebanar = () => {
  return (
   <section id='servicebanar'>
        <div className='container'>
            <div className='servicebanar_contant_wrapper'>
                <Subhead text="WEBSITE SERVICES" style="servicebanar_contant_wrapper_head"/>
                <Pera text="FOR SMALL BUSINESSES " style="servicebanar_contant_wrapper_minihead"/>
            </div>
        </div>
   </section>
  )
}

export default Servicebanar
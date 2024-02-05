import React from 'react'
import Servicebanar from './Servicesection/Servicebanar/Servicebanar'
import Servicedmmc from './Servicesection/Servicedmmc/Servicedmmc'
import Serviceready from './Servicesection/Serviceready/Serviceready'
import Serviceform from './Servicesection/Serviceform/Serviceform'

const Service = () => {
  return (
   <>
      <Servicebanar/>
      <Servicedmmc/>
      <Serviceready/>
      <Serviceform/>
   </>
  )
}

export default Service
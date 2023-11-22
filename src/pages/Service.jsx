import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DropdownService from '../components/DropdownService'

const Service = () => {
  return (
    <>
      <Header title='Услуги' description="" />
        <DropdownService/>
      <Footer />
    </>
  )
}

export default Service
import { useState } from 'react'
import './App.scss'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header title="ЯН" description="горнолыжный курорт"/>
      <Footer/>
    </>
  )
}

export default App

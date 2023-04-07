import { useState } from 'react'
import Header from './components/Header'
import Proyects  from './components/Proyects'
import Skills from './components/Skills'
import ContactForm from './components/Contacto'
import Footer from './components/Footer'

function App() {

  return (
    <>

      <Header />
      <Skills />
      <Proyects/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default App

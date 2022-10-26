import React from 'react';
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import { Main } from './styles/GlobalStyle'
import Hero from './components/Hero'
import InputLink from './components/InputLink';
import Advantages from './components/Advantages';
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
        <InputLink />
        <Advantages />
        <CTA />
      </Main>
      <Footer />
    </>
  )
}

export default App;

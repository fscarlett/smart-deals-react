import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import InfoModal from './components/InfoModal'
import FeaturedDealsSection from './components/FeaturedDealsSection'

function App() {
  return (
    <>
      <main>
        <div className='home_top_group'>
          <HeroSection />
          <InfoModal />
          <FeaturedDealsSection />
        </div>

        <section>get the app ad</section>

        <div className='home_deals_wrapper'>
          <section>deals for you 6x2</section>
          <section>category deals slider</section>

          <section>more deals for you 6x2</section>
          <section>category deals slider</section>

          <section>more deals for you 6x2</section>
          <section>category deals slider</section>

          <section>more deals for you 6x2</section>
          <section>get the app ad</section>
          <section>category deals slider</section>

          <section>more deals for you HUGE</section>
          <section>get the app ad</section>
          <section>more deals for you 6x2</section>
          <section>load more deals button</section>
        </div>
      </main>
    </>
  )
}

export default App

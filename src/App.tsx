import { useState } from 'react'
import styles from './styles/Home.module.css'
import HeroSection from './components/HeroSection'
import InfoModal from './components/InfoModal'
import FeaturedDealsSection from './components/FeaturedDealsSection'
import PromoBanner from './components/PromoBanner'
import DealsSection from './components/DealsSection'

function App() {
  return (
    <>
      <main>
        <div className={styles.home_top_group}>
          <HeroSection />
          <InfoModal />
          <FeaturedDealsSection />
        </div>

        <PromoBanner />

        <div className={styles.home_deals_wrapper}>
          <DealsSection />
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

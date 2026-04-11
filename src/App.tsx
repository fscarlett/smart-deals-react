import { useState } from 'react'
import styles from './styles/Home.module.css'
import HeroSection from './components/HeroSection'
import InfoModal from './components/InfoModal'
import FeaturedDealsSection from './components/FeaturedDealsSection'
import PromoBanner from './components/PromoBanner'
import DealsSection from './components/DealsSection'
import DealsCategorySection from './components/DealsCategorySection'

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
          <DealsSection firstItem={true} />
          <DealsCategorySection />

          <DealsSection />
          <DealsCategorySection />

          <DealsSection />
          <DealsCategorySection />

          <DealsSection />
          <PromoBanner />
          <DealsCategorySection />

          <DealsSection />
          <DealsSection />
          <DealsSection />
          <DealsSection />

          <PromoBanner />
          <DealsSection />
          <section>load more deals button</section>
        </div>
      </main>
    </>
  )
}

export default App

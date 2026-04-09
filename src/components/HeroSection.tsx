import styles from '../styles/HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_card}>carousel card</div>
      <div className={styles.hero_card}>carousel card</div>
      <div className={styles.hero_card}>carousel card</div>
      <div className={styles.hero_card}>carousel card</div>
    </section>
  )
}
export default HeroSection

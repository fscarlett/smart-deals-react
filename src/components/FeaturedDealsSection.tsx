import styles from '../styles/FeaturedDealsSection.module.css'

function FeaturedDealsSection() {
  return (
    <section className={styles.fdeals_section}>
      <div className={styles.fdeals_card}>deal slider card</div>
      <div className={styles.fdeals_card}>deal slider card</div>
      <div className={styles.fdeals_card}>deal slider card</div>
      {/* <div className={styles.fdeals_card}>carousel card</div> */}
    </section>
  )
}
export default FeaturedDealsSection

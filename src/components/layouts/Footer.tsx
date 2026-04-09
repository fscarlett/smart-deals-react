import styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='footer-container w-full max-w-[1400px] mx-auto flex flex-col items-start justify-start gap-4'>
        <div className='logo text-l font-semibold my-2'>IQ Smart Deals</div>
        <nav className='my-2'>
          <div className='links flex flex-row items-center justify-start gap-4'>
            <a href='#' className='text-xs'>
              Privacy Policy
            </a>
            <a href='#' className='text-xs'>
              Terms of Use
            </a>
            <a href='#' className='text-xs'>
              Support
            </a>
            <a href='#' className='text-xs'>
              Cookie Management
            </a>
          </div>
        </nav>
        <div className='copyright text-xs my-2'>
          &copy; 2026 IQ Smart Deals. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

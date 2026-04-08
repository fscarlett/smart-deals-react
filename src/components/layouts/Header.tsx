import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <nav className={styles.header}>
      <div className='topbar'>
        <div>
          <div className='topbar-container'>
            <div className='logo'>logo here</div>
            <div className='login'>login button</div>
            <div className='burger'>burger menu</div>
          </div>
        </div>
      </div>
      <div className='cat-nav'>
        <div>
          <div className='cat-nav-container'>
            <div className='link-wrapper'>
              <div className='cat-nav-item'>cat 1</div>
              <div className='cat-nav-item'>cat 2</div>
              <div className='cat-nav-item'>cat 3</div>
              <div className='cat-nav-item'>cat 4</div>
              <div className='cat-nav-item'>SEARCH</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header

import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <nav className={`${styles.header} sticky top-0 w-full z-40 flex flex-col`}>
      <div className='topbar w-full '>
        <div className='h-full w-full mx-auto flex items-center justify-center'>
          <div className='topbar-container flex flex-row justify-between items-center h-full w-full max-w-[1400px] py-0.5'>
            <div className='logo flex items-center'>
              <a href='/'>
                <span className='font-semibold text-xl'>IQ Smart Deals</span>
              </a>
            </div>
            <div className='items-center flex '>
              <div className='login px-2'>login button</div>
              <div className='burger py-3'>burger menu</div>
            </div>
          </div>
        </div>
      </div>
      <div className='cat-nav w-full bg-white border-b border-t border-gray-200'>
        <div className='h-full w-full mx-auto flex items-center justify-center'>
          <div className='cat-nav-container max-w-[1400px] w-full flex items-center justify-between h-full py-3 '>
            <div className='link-wrapper h-full flex flex-1 items-center justify-between'>
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

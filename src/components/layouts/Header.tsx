import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <nav className={`${styles.header} sticky top-0 w-full z-40 flex flex-col`}>
      <div className='topbar w-full border-b border-gray-300'>
        <div className='h-full w-full mx-auto flex items-center justify-center'>
          <div className='topbar-container flex flex-row justify-between items-center h-full w-full max-w-[1500px] py-3'>
            <div className='logo flex items-center'>
              <a href='/'>logo here</a>
            </div>
            <div className='items-center flex '>
              <div className='login px-2 py-3'>login button</div>
              <div className='burger py-3'>burger menu</div>
            </div>
          </div>
        </div>
      </div>
      <div className='cat-nav w-full bg-white border-b border-[#dfdfdf]'>
        <div className='h-full w-full mx-auto flex items-center justify-center'>
          <div className='cat-nav-container max-w-[1500px] w-full flex items-center justify-between h-full py-3 '>
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

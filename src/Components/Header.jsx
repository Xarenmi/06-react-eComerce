import { Link } from 'react-router-dom'
import '@/assets/header.sass'
import logo from '@/assets/Xmart_p.svg'

const Header = () => {
  return (
    <header className='header'>
      <section className='top'>
        <Link to='/'>
          <img
            className='top__logo'
            src= {logo}
            alt='Xmart Logo'
          />
        </Link>

        <div className='top__deliveryRegion' aria-label='Delivery region'>
          {/* Add content here */}
        </div>

        <label htmlFor='searchInput' className='visually-hidden'>
          Search for products
        </label>
        <input
          id='searchInput'
          className='top__searchInput'
          type='text'
          placeholder='Search products...'
          aria-label='Search for products'
        />
        <Link to='/login'>
          <button className='top__loginButton' aria-label='Log in'>
            Log In
          </button>
        </Link>

        <div className='top__cart' aria-label='Cart'>
          <Link to='/cart'>
            <p>Cart</p>
          </Link>
        </div>
      </section>

      <nav className='navbar' aria-label='Category navigation'>
        <button className='navbar__button'>Cat1</button>
        <button className='navbar__button'>Cat2</button>
        <button className='navbar__button'>Cat3</button>
        <button className='navbar__button'>Cat4</button>
        <button className='navbar__button'>Cat5</button>
        <button className='navbar__button'>Cat6</button>
      </nav>
    </header>

  )
}

export default Header

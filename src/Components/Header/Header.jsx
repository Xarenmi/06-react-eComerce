import { Link } from 'react-router-dom'
import './header.sass'
import logo from '@/assets/Xmart-logo.svg'
import { BsCart4, BsMagic, BsFillPinMapFill, BsFillPersonFill } from 'react-icons/bs'

const Header = () => {
  const cartItems = [1, 2, 3, 4]
  const client = {
    location: 'México'
  }

  return (
    <header className='header'>
      <section className='top'>
        <div top__logoContainer>
          <Link to='/' className='top__logoLink'>
            <img
              className='top__logo'
              src={logo}
              alt='Xmart Logo'
            />
            <p>Xmart</p>
          </Link>
        </div>

        <div className='top__deliveryRegion' aria-label='Delivery region'>
          <p>Enviar a:</p>
          <BsFillPinMapFill />  {client.location}
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

        <div className='top__cart' aria-label='Cart'>
          <Link to='/cart'>
            <p>{cartItems.length}</p>
            <p><BsCart4 className='' /></p>
          </Link>
        </div>

        <Link to='/login'>
          <BsFillPersonFill className='top__login' />
          {/* <button className='top__loginButton' aria-label='Log in'>
            Log In
          </button> */}
        </Link>
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

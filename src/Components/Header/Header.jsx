import { Link } from 'react-router-dom'
import './header.sass'
import logo from '@/assets/img/Xmart-logo.svg'
import { BsCart4,  BsFillPinMapFill, BsFillPersonFill } from 'react-icons/bs'

const Header = () => {
  const cartItems = [1, 2, 3, 4]
  const client = {
    location: 'México'
  }
  const navCategories = ['women', 'men', 'gadgets', 'automotive', 'home deco', 'skincare', 'groceries']

  return (
    <header className='header'>
      <section className='top'>
        <div className='top__logoContainer'>
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
        {navCategories.map((cat, index) => <button key={index} className='navbar__button'>{cat.toUpperCase()}</button>)}
      </nav>
    </header>

  )
}

export default Header

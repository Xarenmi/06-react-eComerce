import './header.sass'
import logo from '@/assets/img/Xmart-logo.svg'
import { Link } from 'react-router-dom'
import SearchBar from '@/Components/SearchBar/SearchBar'
import { BsCart4, BsFillPinMapFill, BsFillPersonFill } from 'react-icons/bs'

const Header = () => {
  const cartItems = [1, 2, 3, 4]
  const client = {
    name: 'Xarenmi',
    locationX: '',
    locationY: '',
    location: 'worldwide'
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }

  

  function showPosition(position) {
    client.locationY = position.coords.latitude
    client.locationX = position.coords.longitude
  }

  const navCategories = ['women', 'men', 'gadgets', 'automotive', 'home-decoration', 'skincare', 'groceries']

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
          <p>Ship to:</p>
          <BsFillPinMapFill />  {client.location}
        </div>

        <SearchBar />

        <Link to='/login'>
          <BsFillPersonFill className='top__login' />
          {/* <button className='top__loginButton' aria-label='Log in'>
            Log In
          </button> */}
        </Link>

        <div className='top__cart' aria-label='Cart'>
          <Link to='/cart'>
            <p>{cartItems.length}</p>
            <p><BsCart4 className='' /></p>
          </Link>
        </div>
      </section>

      <nav className='navbar' aria-label='Category navigation'>
        {navCategories.map((cat, index) => <Link to={`/category/${cat}`} key={index}> <button className='navbar__button'>{cat.toUpperCase().replace(/-/g, ' ')}</button> </Link>)}
      </nav>
    </header>

  )
}

export default Header

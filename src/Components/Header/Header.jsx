import './header.sass'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/img/Xmart-logo.svg'
import SearchBar from '@/Components/SearchBar/SearchBar'
import { useScreenContext } from '@/Context/ScreenContext'
import { BsCart4, BsFillPinMapFill, BsFillPersonFill } from 'react-icons/bs'

const Header = () => {
  const { screenSize } = useScreenContext()
  const [client, setClient] = useState({
    name: 'Xarenmi',
    location: 'worldwide',
  });

  const getLocation = async () => {
    // check if geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // get the latitude and longitude of the user's location
          const locationX = position.coords.latitude;
          const locationY = position.coords.longitude;

          // make a GET request to the Nominatim API to get the address of the user's location
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${locationX}&lon=${locationY}`
          );

          // extract the state from the response
          const location = response.data.address.state;

          // update the state with the new location
          setClient({
            ...client,
            location: location,
          });
        },
        () => {
          console.log("Location is not available.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    // call the getLocation function when the component mounts
    getLocation();
  }, []);

  const cartItems = [1, 2, 3, 4]
  const categories = ['women', 'men', 'gadgets', 'automotive', 'home-decoration', 'skincare', 'groceries']
  let navCategories = screenSize <= 480 ? categories.slice(0, 5) : categories

  //responsive jsx (?)
  return (
    <>
      {screenSize >= 481 && (
        <header className='header'>

          <section className='top'>

            <div className='top__logoContainer'>
              <Link to='/' className='top__logoLink'>
                <img
                  className='top__logo'
                  src={logo}
                  alt='Xmart Logo'
                  area-label="Big 'M' in pink color"
                />
                <p>Xmart</p>
              </Link>
            </div>
            <div className='top__deliveryRegion' aria-label='Delivery region'>
              <p>Ship to:</p>
              <BsFillPinMapFill aria-label='Pin on map' />  {client.location}
            </div>

            <SearchBar />

            <Link to='/login'>
              <BsFillPersonFill aria-label='Login button also works for signing up' className='top__login' />
            </Link>

            <div className='top__cart' aria-label='Cart'>
              <Link to='/cart'>
                <p>{cartItems.length}</p>
                <p><BsCart4 aria-label='Shopping cart' className='' /></p>
              </Link>
            </div>
          </section>

          <nav className='navbar' aria-label='Category navigation'>
            {navCategories.map((cat, index) => <Link to={`/category/${cat}`} key={index}> <button className='navbar__button'>{cat.toUpperCase().replace(/-/g, ' ')}</button> </Link>)}
          </nav>

        </header>
      )}

      {screenSize <= 480 && (
        <header>
          <section className='top'>
            <SearchBar />
          </section>
          <nav className='navbar' aria-label='Category navigation'>
            {navCategories.map((cat, index) =>
              <Link to={`/category/${cat}`} key={index}>
                <button className='navbar__button' aria-label={cat.replace(/-/g, ' ')}>
                  {cat.toUpperCase().replace(/-/g, ' ')}
                </button>
              </Link>)}
          </nav>

        </header>
      )}
    </>
  )
}

export default Header

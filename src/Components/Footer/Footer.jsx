import './footer.sass'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '@/Components/Login/Login'
import logo from '@/assets/img/Xmart-logo.svg'
import { useScreenContext } from '@/Context/ScreenContext'
import { BsCart4, BsFillPersonFill } from 'react-icons/bs'

const Footer = () => {
  const { screenSize } = useScreenContext()
  const cartItems = [1, 2, 3, 4]

  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <>
      {screenSize >= 481 && (
        <footer className='footer'>
          <section aria-label="Get to know us">
            <Link to='https://github.com/Xarenmi' className='footer__link'>
              <h4>Get to know us</h4>
            </Link>
          </section>
          <section aria-label="Make money with us">
            <Link to='/sell' className='footer__link'>
              <h4>
                Make money with us
              </h4>
            </Link>
          </section>
          <section aria-label="Need assistance?">
            <Link to='/help' className='footer__link'>
              <h4>Need assistance?</h4>
            </Link>
          </section>
        </footer>
      )}

      {
        screenSize <= 480 && (
          <>
            <footer className='footer'>
              <section>
                <Link to='/' className='footer__link'>
                  <img
                    className='footer__logo'
                    src={logo}
                    alt='Xmart Logo'
                  />
                </Link>
              </section>

              <section aria-label="Login" onClick={toggleHidden}>
                <BsFillPersonFill aria-label='Login button also works for signing up' className='top__login' />
              </section>

              <section aria-label="Cart with item count">
                <Link to='/cart' className='footer__cart'>
                  <p>{cartItems.length}</p>
                  <p><BsCart4 /></p>
                </Link>
              </section>
            </footer>
            {!isHidden && <Login />}
          </>
        )
      }
    </>
  )
};

export default Footer;

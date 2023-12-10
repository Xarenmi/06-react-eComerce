import './footer.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/img/Xmart-logo.svg'
import { useScreenContext } from '@/Context/ScreenContext'
import { BsCart4, BsFillPersonFill } from 'react-icons/bs'

const Footer = () => {
  const { screenSize } = useScreenContext()
  const cartItems = [1, 2, 3, 4]

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

      {screenSize <= 480 && (
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

          <section aria-label="Login">
            <Link to='/login'>
              <BsFillPersonFill className='footer__login' aria-label="Login" />
            </Link>
          </section>

          <section aria-label="Cart with item count">
            <Link to='/cart' className='footer__cart'>
              <p>{cartItems.length}</p>
              <p><BsCart4 /></p>
            </Link>
          </section>
        </footer>
      )}
    </>
  );
};

export default Footer;

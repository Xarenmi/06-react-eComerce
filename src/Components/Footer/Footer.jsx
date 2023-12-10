import './footer.sass'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScreenContext } from '@/Context/ScreenContext'
import { BsCart4, BsFillPersonFill } from 'react-icons/bs'

const Footer = () => {
  const { screenSize } = useScreenContext()
  const cartItems = [1, 2, 3, 4]

  return (
    <>
      {screenSize >= 481 && (
        <footer className='footer'>
          <section>
            <Link to='https://github.com/Xarenmi' className='footer__link'>
              <h4>Get to know us</h4>
            </Link>
          </section>
          <section>
            <Link to='/sell' className='footer__link'>
              <h4>
                Make money with us
              </h4>
            </Link>
          </section>
          <section>
            <Link to='/help' className='footer__link'>
              <h4>Need assistance?</h4>
            </Link>
          </section>
        </footer>)}

      {screenSize <= 480 && (
        <footer className='footer'>
          <section>
          </section>

          <section>
            <Link to='/login'>
              <BsFillPersonFill className='footer__login' />
            </Link>
          </section>

          <section>
            <Link to='/cart' className='footer__cart' >
              <p>{cartItems.length}</p>
              <p><BsCart4 /></p>
            </Link>
          </section>
        </footer>
      )}
    </>
  );
};

export default Footer

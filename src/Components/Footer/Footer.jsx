import './footer.sass'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { BsCart4, BsFillPersonFill } from 'react-icons/bs'

const Footer = () => {

  useEffect(() => {
    const handleResize = () => {
      const hidden = document.querySelectorAll('.hidden')
      const displayed = document.querySelectorAll('.displayed')

      for (const item of displayed) {
        if (window.innerWidth < 720) {
          item.style.display = 'none'
        } else {
          item.style.display = 'grid'
        }
      }

      for (const item of hidden) {
        if (window.innerWidth < 720) {
          item.style.display = 'inline'
        } else {
          item.style.display = 'none'
        }
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cartItems = [1, 2, 3, 4]
  return (
    <footer className='footer'>
      <section className='displayed'>
        <Link to='https://github.com/Xarenmi' className='footer__link'>
          <h4>Get to know us</h4>
        </Link>
      </section>
      <section className='displayed'>
        <Link to='/sell' className='footer__link'>
          <h4>
            Make money with us
          </h4>
        </Link>
      </section>
      <section className='displayed'>
        <Link to='/help' className='footer__link'>
          <h4>Need assistance?</h4>
        </Link>
      </section>

      <section className='hidden'>
      </section>

      <section className='hidden'>
        <Link to='/login'>
          <BsFillPersonFill className='footer__login' />
        </Link>
      </section>

      <section className='hidden'>
        <Link to='/cart' className='footer__cart' >
          <p>{cartItems.length}</p>
          <p><BsCart4 /></p>
        </Link>
      </section>
    </footer>
  )
}

export default Footer

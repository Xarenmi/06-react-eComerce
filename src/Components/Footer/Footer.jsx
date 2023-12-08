import React from 'react'
import { Link } from 'react-router-dom'
import './footer.sass'

const Footer = () => {
  return (
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
    </footer>
  )
}

export default Footer

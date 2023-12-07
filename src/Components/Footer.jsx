import React from 'react'
import { Link } from 'react-router-dom'
import '@/assets/footer.sass'

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
        <h4>Assistance</h4>
          {/* - Returns and Replacements */}
      </Link>
      </section>
    </footer>
  )
}

export default Footer

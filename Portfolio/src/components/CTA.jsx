import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
          <p className='cta-text'>Wanna work together?
              <br className='sm:block hidden' />Let build something cool</p>
          <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA

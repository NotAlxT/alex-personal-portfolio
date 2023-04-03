import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      {/* needs work */}
      <div className='contact-wrapper'>
        <div> <Link to='https://www.linkedin.com/in/notalxt/' target='_blank'> 
          Linkedin</Link>
        </div>
        <div> <Link to='https://github.com/NotAlxT' target='_blank'>
          Github</Link>
        </div>
      </div>
    </div>
  )
}

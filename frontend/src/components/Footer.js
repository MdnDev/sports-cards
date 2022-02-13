import React from 'react'

const Footer = () => {
  return (
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(52, 100, 255, 0.8)' }}>
          <a className='text-light' href='https://sportscardsgallery.com/'>
            sportscardsgallery.com
          </a>
          <br></br>
          &copy; {new Date().getFullYear()}{' '}
    </div>
  )
}

export default Footer
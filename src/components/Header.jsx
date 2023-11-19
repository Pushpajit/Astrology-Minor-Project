import React from 'react'

function Header() {
  return (
    <nav className='bg-slate-800 text-white flex items-center content-center p-5 sticky top-0 z-50 gap-2'>
      <div>
        <img className='object-cover' src="https://media.tenor.com/ZiTcv4QbONsAAAAi/discord-world.gif" alt="" style={{width: 28, height: 28}} />
      </div>
      <p className='text-2xl font-bold'>Panchang</p>
    </nav>

  )
}

export default Header

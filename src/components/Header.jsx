import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <nav className='bg-slate-800 min-w-full bg-opacity-20 backdrop-blur-lg text-white flex items-center content-center p-5 sticky top-0 z-50 gap-2 rounded-lg border border-white border-opacity-20'>

      <div className='pl-2 pr-2'>
        <IconButton sx={{ display: { xs: "block", lg: "none" } }}>
          <MenuIcon />
        </IconButton>
      </div>
      <div >
        <img className='object-cover' src="https://media.tenor.com/ZiTcv4QbONsAAAAi/discord-world.gif" alt="" style={{ width: 28, height: 28 }} />
      </div>
      <p className='text-2xl font-bold'>Panchang</p>
    </nav>

  )
}

export default Header

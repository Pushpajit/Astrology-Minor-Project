import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AdminLoginModal from './AdminLoginModal';

function Header() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  return (
    <nav className='bg-slate-800 min-w-full bg-opacity-20 backdrop-blur-lg text-white flex items-center content-center p-5 sticky top-0 z-50 gap-2 rounded-lg border border-white border-opacity-20'>

      <div className='pl-2 pr-2 '>
        <IconButton sx={{ display: { xs: "block", lg: "none" } }}>
          <MenuIcon />
        </IconButton>
      </div>

      <div className='flex items-center justify-between w-full'>

        <div className='flex gap-3 items-center'>
          <div className=''>
            <img className='object-cover' src="https://media.tenor.com/ZiTcv4QbONsAAAAi/discord-world.gif" alt="" style={{ width: 28, height: 28 }} />
          </div>
          <p className='text-2xl font-bold'>Panchang</p>
        </div>

        <div className=''>


          <Button onClick={showModal} variant='contained' size='small'  startIcon={< PersonPinIcon />} sx={{color: 'white'}}>Admin Login</Button>

          <AdminLoginModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </nav>

  )
}

export default Header

import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';

function LeftSideBar(props) {
  // const [date, setDate] = useState(null);
  // const [value, setValue] = useState(null);
  const now = new Date();

  // console.log(value);

  // function handleState(){
  //   props.setValue(date);
  //   props.setTime(value);
  // }

  return (
    <section className='bg-slate-700 hidden xl:block h-[100vh] sticky p-5 text-white left-0 top-4'>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar onChange={(newValue) => props.setValue(newValue)} defaultValue={dayjs(now.toLocaleDateString())} />
          
        </LocalizationProvider>

        {/* <Button color='secondary' onClick={handleState} variant='contained' sx={{ width: "100%" }}>prophecy</Button> */}
      </Box>
    </section>
  )
}

export default LeftSideBar

import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import dayjs from 'dayjs';
import FormData from './FormData';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


function LeftSideBar(props) {
  const [valueDate, setValueDate] = useState(new Date());
  const [time, setTime] = useState();

  useEffect(() => {
    if (props.date)
      setValueDate(new Date(props.date['$d']));
    else
      setValueDate(new Date());
  }, [props.date])



  const now = new Date();

  const [open, setOpen] = React.useState(false);
  // console.log(props.date['$d'].toLocaleDateString());


  return (
    <section className='bg-slate-700 hidden xl:block h-[100vh] sticky p-5 text-white left-0 top-4'>

      <Box>
        <ThemeProvider theme={darkTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(newValue) => {props.setValue(newValue)}} defaultValue={dayjs(now.toLocaleDateString())} />
          </LocalizationProvider>
        </ThemeProvider>

        <Button onClick={() => setOpen(true)} variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke" }}>
          Add data
        </Button>
        <Button  variant='contained' startIcon={<MailOutlineIcon />} color='primary' sx={{ width: "100%", color: "whitesmoke",marginTop:"10px" }}>
          Contact Admin
        </Button>

        <FormData open={open} setOpen={setOpen} date={props.date['$d']} />
      </Box>
    </section>
  )
}

export default LeftSideBar

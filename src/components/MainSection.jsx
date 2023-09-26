import { Box, Paper } from '@mui/material';
import React from 'react'

function MainSection(props) {

  console.log(props.time);
  let date;
  let time;
  if (props.value) 
    date = new Date(props.value['$d']);
  else
    date = new Date();

  if (props.time)
    time = new Date(props.time['$d']);
  else
    time = new Date();

  return (
    <main>
      {time.toLocaleTimeString()}
      <br></br>
      {date.toLocaleDateString()}

      <Box sx={{display: "flex", gap: 5}}>
        <Paper sx={{width: 200, height: 200, p: 2}}>
          p1
        </Paper>

        <Paper sx={{width: 200, height: 200, p: 2}}>
          p1
        </Paper>

        <Paper sx={{width: 200, height: 200, p: 2}}>
          p1
        </Paper>
      </Box>
    </main>
  )
}

export default MainSection

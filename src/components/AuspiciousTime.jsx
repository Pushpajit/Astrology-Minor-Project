import React from 'react'
import { Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const AuspiciousTime = () => {
  const [auspiciousList, setauspiciousList] = useState([]);
  const [newauspicious, setNewauspicious] = useState({ direction: '', period: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddChandraSuddhi = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddauspicious = () => {
    // Added validation
    if (newauspicious.direction.trim() !== '' && newauspicious.period.trim() !== '') {

      setauspiciousList([...auspiciousList, { ...newauspicious }]);
      setNewauspicious({ direction: '', period: '' });
    }
    else {
      alert('Please add type and period');
    }
  };

  const handleDeleteauspicious = (index) => {
    const updatedList = [...auspiciousList];
    updatedList.splice(index, 1);
    setauspiciousList(updatedList);
  };
  return (
    <div>

      {auspiciousList.map((auspicious, index) => (
        <div key={index} style={{ display: "flex", gap: "6px", alignItems: 'center' }}>
          {/* <p>Type: {auspicious.direction}</p>
          <p>Period: {auspicious.period}</p> */}
          {/* <button onClick={() => handleDeleteauspicious(index)}>Delete</button> */}
          {/* <Button onClick={() => handleDeleteauspicious(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red", margin: "3px" }}>
          </Button> */}

          <p className='font-bold'>Period: <span className='font-normal'>{auspicious.direction}</span></p>
          <p className='font-bold'>Numbers: <span className='font-normal'>{auspicious.period}</span></p>


          <IconButton
            onClick={() => handleDeleteauspicious(index)}
            size='small'
          >
            <DelIcon fontSize='small' />
          </IconButton>
        </div>
      ))}
      {/* <button onClose={handleModalClose} onClick={handleAddChandraSuddhi}>Add Chandra Suddhi</button> */}
      <Button onClick={handleAddChandraSuddhi}
        variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
        Add New auspicious
      </Button>
      {isModalOpen && (

        <form>
          <h2>Add New Auspicious Time</h2>
          {/* <input
            type="text"
            placeholder="Type"
            value={newauspicious.direction}
            onChange={(e) => setNewauspicious({ ...newauspicious, direction: e.target.value })}
          /> */}
          <div className='flex gap-3'>
            <TextField
              placeholder="Type"
              value={newauspicious.direction}
              variant='standard'
              size='small'
              onChange={(e) => setNewauspicious({ ...newauspicious, direction: e.target.value })}
            />

            <TextField
              placeholder="Period"
              value={newauspicious.period}
              variant='standard'
              size='small'
              onChange={(e) => setNewauspicious({ ...newauspicious, period: e.target.value })}
            />
          </div>

          {/* <input
            type="text"
            placeholder="Period"
            value={newauspicious.period}
            onChange={(e) => setNewauspicious({ ...newauspicious, period: e.target.value })}
          /> */}
          <Button onClick={() => { handleAddauspicious(); handleModalClose(); }}
            variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "50%", color: "whitesmoke", margin: "6px" }}>
            Submit
          </Button>
        </form>
      )}
      {/* <button onClick={handleAddauspicious}>Add</button> */}
    </div>
  )
}

export default AuspiciousTime
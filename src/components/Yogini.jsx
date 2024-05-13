import React from 'react'
import { Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const Yogini = () => {
  const [yoginiList, setYoginiList] = useState([]);
  const [newYogini, setNewYogini] = useState({ direction: '', period: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddYogini = () => {
    // Added validation
    if(newYogini.direction.trim() !== '' && newYogini.period.trim() !== ''){
      setYoginiList([...yoginiList, { ...newYogini }]);
      setNewYogini({ direction: '', period: '' });
    }
    else {
      alert('Please select period and signs.');
    }
  };

  const handleDeleteYogini = (index) => {
    const updatedList = [...yoginiList];
    updatedList.splice(index, 1);
    setYoginiList(updatedList);
  };
  return (
    <div>

      {yoginiList.map((yogini, index) => (
        <div className='flex items-center' key={index} style={{ display: "flex", gap: "6px" }}>
          <p className='font-bold'>Direction: <span className='font-normal'>{yogini.direction}</span></p>
          <p className='font-bold'>Period: <span className='font-normal'>{yogini.period}</span></p>
          
          <IconButton
          onClick={() => handleDeleteYogini(index)}
    
          size='small'
          sx={{marginLeft: 1, marginTop: 0.5}}
          >
            <DelIcon fontSize='small'/>
          </IconButton>
        </div>
      ))}
  
      <Button onClick={handleAdd}
        size='small'
        variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
        Add New Yogini
      </Button>
      {isModalOpen && (

        <form>
          <h2>Add New Yogini</h2>
          
          <div className='flex gap-2'>
            <TextField value={newYogini.direction} onChange={(e) => setNewYogini({ ...newYogini, direction: e.target.value })} id="standard-basic" label="Direction" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
            <TextField value={newYogini.period} onChange={(e) => setNewYogini({ ...newYogini, period: e.target.value })} id="standard-basic" label="Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
          </div>
          
          <Button onClick={() => { handleAddYogini(); handleModalClose(); }}
            size='small'
            variant='contained' startIcon={<AddIcon />} color='success' >
            Add
          </Button>

        </form>
      )}
      {/* <button onClick={handleAddYogini}>Add</button> */}
    </div>
  )
}

export default Yogini
import React, { useState } from 'react';
import PeriodSelectionModal from './PeriodSelectionModal'; // Import the modal component
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';

const Tarasudhiomponent = ({ onChangeTara }) => {
  const [tarasudhiList, settarasudhiList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleAddtarasudhi = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = ({ period, numbers }) => {
    const updatedList = [...tarasudhiList, { period, numbers }];
    settarasudhiList(updatedList);
    console.log(tarasudhiList);
    const formattedList = updatedList.map((tarasudhi, index) => `${tarasudhi.numbers.join('/')} : ${tarasudhi.period}`);
    onChangeTara(prev => ({ ...prev, 'TARA SUDDHI': [...formattedList] }));
  };

  const handleDeletetarasudhi = (index) => {
    const updatedList = [...tarasudhiList];
    updatedList.splice(index, 1);
    settarasudhiList(updatedList);
    const formattedList = updatedList.map(tara => `${tara.numbers.join('/')} : ${tara.period}`);
    onChangeTara(prev => ({ ...prev, 'TARA SUDDHI': [...formattedList] }));
  };

  return (
    <div>
      {/* <h1>Chandra Suddhi List</h1> */}
      {tarasudhiList.map((tarasudhi, index) => (
        <div key={index} style={{ display: "flex", gap: "6px", alignItems: 'center' }}>
          <p className='font-bold'>Period: <span className='font-normal'>{tarasudhi.period}</span></p>
          <p className='font-bold'>Numbers: <span className='font-normal'>{tarasudhi.numbers.join('/')}</span></p>


          <IconButton
            onClick={() => handleDeletetarasudhi(index)}
            size='small'
          >
            <DelIcon fontSize='small' />
          </IconButton>
        </div>
      ))}
      {/* <h2>Add New Chandra Suddhi</h2> */}
      {/* <button onClick={handleAddtarasudhi}>Add Chandra Suddhi</button> */}
      <Button onClick={handleAddtarasudhi} variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
        Add Tara Sudhi
      </Button>

      {isModalOpen && (
        <PeriodSelectionModal onClose={handleModalClose} onSubmit={handleModalSubmit} firstValue={27} />
      )}
    </div>
  );
};

export default Tarasudhiomponent;

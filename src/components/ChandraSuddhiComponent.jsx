import React, { useState } from 'react';
import PeriodSelectionModal from './PeriodSelectionModal'; // Import the modal component
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';
const signs = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const ChandraSuddhiComponent = ({ onChangeChandra }) => {
  const [chandraSuddhiList, setChandraSuddhiList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleAddChandraSuddhi = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = ({ period, numbers }) => {
    const updatedList = [...chandraSuddhiList, { period, numbers }];
    setChandraSuddhiList(updatedList);

    updatedList.map((chandra, index) => {
      onChangeChandra(prev => ({ ...prev, 'CHANDRA SUDDHI': { ...prev['CHANDRA SUDDHI'], [`${chandra.period}`]: chandra.numbers.map(val => signs[val - 1]) } }))

    });
    console.log(updatedList);
    // const updatedList = [...tarasudhiList, { period, numbers }];
    // settarasudhiList(updatedList);
    // console.log(tarasudhiList);
    // const formattedList = updatedList.map((tarasudhi, index) => `${tara.numbers.join('/')} : ${tara.period}`);
    // onChangeTara(prev => ({ ...prev, 'TARA SUDDHI': [...formattedList] }));


  };

  const handleDeleteChandraSuddhi = (index) => {
    const updatedList = [...chandraSuddhiList];
    updatedList.splice(index, 1);
    setChandraSuddhiList(updatedList);
    updatedList.map((chandra, index) => {
      onChangeChandra(prev => ({ ...prev, 'CHANDRA SUDDHI': { ...prev['CHANDRA SUDDHI'], [`${chandra.period}`]: chandra.numbers.map(val => signs[val - 1]) } }))

    });
  };

  return (
    <div>
      {/* <h1>Chandra Suddhi List</h1> */}
      {chandraSuddhiList.map((chandraSuddhi, index) => (
        <div key={index} style={{ display: "flex", gap: "6px", alignItems: 'center' }}>

          <p className='font-bold'>Period: <span className='font-normal'>{chandraSuddhi.period}</span></p>
          <p className='font-bold'>Numbers: <span className='font-normal'>{chandraSuddhi.numbers.join(', ')}</span></p>


          <IconButton
            onClick={() => handleDeleteChandraSuddhi(index)}
            size='small'
          >
            <DelIcon fontSize='small' />
          </IconButton>
        </div>
      ))}
      {/* <h2>Add New Chandra Suddhi</h2> */}
      {/* <button onClick={handleAddChandraSuddhi}>Add Chandra Suddhi</button> */}
      <Button onClick={handleAddChandraSuddhi} variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
        Add Chandra Suddhi
      </Button>

      {isModalOpen && (
        <PeriodSelectionModal onClose={handleModalClose} onSubmit={handleModalSubmit} firstValue={12} />
      )}
    </div>
  );
};

export default ChandraSuddhiComponent;

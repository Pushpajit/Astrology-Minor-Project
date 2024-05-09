import React, { useState } from 'react';
import PeriodSelectionModal from './PeriodSelectionModal'; // Import the modal component
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';

const Tarasudhiomponent = () => {
  const [tarasudhiList, settarasudhiList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddtarasudhi = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = ({ period, numbers }) => {
    settarasudhiList([...tarasudhiList, { period, numbers }]);
  };

  const handleDeletetarasudhi = (index) => {
    const updatedList = [...tarasudhiList];
    updatedList.splice(index, 1);
    settarasudhiList(updatedList);
  };

  return (
    <div>
      {/* <h1>Chandra Suddhi List</h1> */}
      {tarasudhiList.map((tarasudhi, index) => (
        <div key={index} style={{ display: "flex", gap: "6px" }}>
          <p>Period: {tarasudhi.period}</p>
          <p>Numbers: {tarasudhi.numbers.join(', ')}</p>
          {/* <button onClick={() => handleDeletetarasudhi(index)}>Delete</button> */}
          <Button onClick={() => handleDeletetarasudhi(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red",margin:"3px" }}>
                                            </Button>
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

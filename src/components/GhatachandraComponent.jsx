import React, { useState } from 'react';
import PeriodSelectionModal from './PeriodSelectionModal'; // Import the modal component
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';

const GhatachandraComponent = () => {
  const [ghatachandraList, setghatachandraList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddghatachandra = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = ({ period, numbers }) => {
    setghatachandraList([...ghatachandraList, { period, numbers }]);
  };

  const handleDeleteghatachandra = (index) => {
    const updatedList = [...ghatachandraList];
    updatedList.splice(index, 1);
    setghatachandraList(updatedList);
  };

  return (
    <div>
      {/* <h1>Chandra Suddhi List</h1> */}
      {ghatachandraList.map((ghatachandra, index) => (
        <div key={index} style={{ display: "flex", gap: "6px" }}>
          <p>Period: {ghatachandra.period}</p>
          <p>Numbers: {ghatachandra.numbers.join(', ')}</p>
          {/* <button onClick={() => handleDeleteghatachandra(index)}>Delete</button> */}
          <Button onClick={() => handleDeleteghatachandra(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red",margin:"3px" }}>
                                            </Button>
        </div>
      ))}
      {/* <h2>Add New Chandra Suddhi</h2> */}
      {/* <button onClick={handleAddghatachandra}>Add Chandra Suddhi</button> */}
      <Button onClick={handleAddghatachandra} variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
                                        Add Ghata Chandra
                                    </Button>

      {isModalOpen && (
        <PeriodSelectionModal onClose={handleModalClose} onSubmit={handleModalSubmit} firstValue={12} />
      )}
    </div>
  );
};

export default GhatachandraComponent;

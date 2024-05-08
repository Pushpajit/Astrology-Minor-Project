import React, { useState } from 'react';
import PeriodSelectionModal from './PeriodSelectionModal'; // Import the modal component
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';

const ChandraSuddhiComponent = () => {
  const [chandraSuddhiList, setChandraSuddhiList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddChandraSuddhi = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = ({ period, numbers }) => {
    setChandraSuddhiList([...chandraSuddhiList, { period, numbers }]);
  };

  const handleDeleteChandraSuddhi = (index) => {
    const updatedList = [...chandraSuddhiList];
    updatedList.splice(index, 1);
    setChandraSuddhiList(updatedList);
  };

  return (
    <div>
      {/* <h1>Chandra Suddhi List</h1> */}
      {chandraSuddhiList.map((chandraSuddhi, index) => (
        <div key={index} style={{ display: "flex", gap: "6px" }}>
          <p>Period: {chandraSuddhi.period}</p>
          <p>Numbers: {chandraSuddhi.numbers.join(', ')}</p>
          {/* <button onClick={() => handleDeleteChandraSuddhi(index)}>Delete</button> */}
          <Button onClick={() => handleDeleteChandraSuddhi(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red",margin:"3px" }}>
                                            </Button>
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
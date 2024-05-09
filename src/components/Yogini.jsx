import React from 'react'
import { Button } from '@mui/material';
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
        setYoginiList([...yoginiList, { ...newYogini }]);
        setNewYogini({ direction: '', period: '' });
    };

    const handleDeleteYogini = (index) => {
        const updatedList = [...yoginiList];
        updatedList.splice(index, 1);
        setYoginiList(updatedList);
    };
  return (
    <div>
                                    
                                    {yoginiList.map((yogini, index) => (
                                        <div key={index} style={{ display: "flex", gap: "6px" }}>
                                            <p>Direction: {yogini.direction}</p>
                                            <p>Period: {yogini.period}</p>
                                            {/* <button onClick={() => handleDeleteYogini(index)}>Delete</button> */}
                                            <Button onClick={() => handleDeleteYogini(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red",margin:"3px" }}>
                                            </Button>
                                        </div>
                                    ))}
                                    {/* <button onClose={handleModalClose} onClick={handleAdd}>Add Chandra Suddhi</button> */}
                                    <Button onClick={handleAdd}
                                    variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
                                        Add New Yogini
                                    </Button>
                                    {isModalOpen && (
        
                               <form>
                                    <h2>Add New Yogini</h2>
                                    <input
                                        type="text"
                                        placeholder="Direction"
                                        value={newYogini.direction}
                                        onChange={(e) => setNewYogini({ ...newYogini, direction: e.target.value })}
                                    />
                                    
                                    <input
                                        type="text"
                                        placeholder="Period"
                                        value={newYogini.period}
                                        onChange={(e) => setNewYogini({ ...newYogini, period: e.target.value })}
                                    />
                                    <Button onClick={() => { handleAddYogini(); handleModalClose(); }} 
                                    variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "50%", color: "whitesmoke", margin: "6px" }}>
                                        Submit
                                    </Button>
                                    </form>
                                      )}
                                    {/* <button onClick={handleAddYogini}>Add</button> */}
                                </div>
  )
}

export default Yogini
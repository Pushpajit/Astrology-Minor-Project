import React from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const InauspiciousTime = () => {
    const [inauspiciousList, setinauspiciousList] = useState([]);
    const [newinauspicious, setNewinauspicious] = useState({ period: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const handleAddChandraSuddhi = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    const handleAddinauspicious = () => {
        
        if(newinauspicious.period.trim() !== ''){

          setinauspiciousList([...inauspiciousList, { ...newinauspicious }]);
        setNewinauspicious({  period: '' });
        }
        else {
          alert('Please add  period');
        }
    };

    const handleDeleteinauspicious = (index) => {
        const updatedList = [...inauspiciousList];
        updatedList.splice(index, 1);
        setinauspiciousList(updatedList);
    };
  return (
    <div>
                                    
                                    {inauspiciousList.map((inauspicious, index) => (
                                        <div key={index} style={{ display: "flex", gap: "6px" }}>
                                            {/* <p>Direction: {inauspicious.direction}</p> */}
                                            <p>Period: {inauspicious.period}</p>
                                            {/* <button onClick={() => handleDeleteinauspicious(index)}>Delete</button> */}
                                            <Button onClick={() => handleDeleteinauspicious(index)} variant='contained' startIcon={<DelIcon />} sx={{ width: "20%", color: "whitesmoke", backgroundColor: "red",margin:"3px" }}>
                                            </Button>
                                        </div>
                                    ))}
                                    {/* <button onClose={handleModalClose} onClick={handleAddChandraSuddhi}>Add Chandra Suddhi</button> */}
                                    <Button onClick={handleAddChandraSuddhi}
                                    variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
                                        Add New inauspicious
                                    </Button>
                                    {isModalOpen && (
        
                               <form>
                                    <h2>Add New Inauspicious Time</h2>
                                    {/* <input
                                        type="text"
                                        placeholder="Type"
                                        value={newinauspicious.direction}
                                        onChange={(e) => setNewinauspicious({ ...newinauspicious, direction: e.target.value })}
                                    /> */}
                                    
                                    <input
                                        type="text"
                                        placeholder="Period"
                                        value={newinauspicious.period}
                                        onChange={(e) => setNewinauspicious({ ...newinauspicious, period: e.target.value })}
                                    />
                                    <Button onClick={() => { handleAddinauspicious(); handleModalClose(); }} 
                                    variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "50%", color: "whitesmoke", margin: "6px" }}>
                                        Submit
                                    </Button>
                                    </form>
                                      )}
                                    {/* <button onClick={handleAddinauspicious}>Add</button> */}
                                </div>
  )
}

export default InauspiciousTime
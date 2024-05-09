import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PeriodSelectionModal = ({ onClose, onSubmit ,firstValue}) => {
  const [period, setPeriod] = useState('');
  const [selectedSigns, setSelectedSigns] = useState([]);
  const bottomRef = useRef(null);
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const stars = [
    'Aswini', 'Dwija(bharani)', 'Kritika', 'Rohini', 'Mrigasira', 'Ardra',
    'Punarvasu', 'Pusya', 'Ashlesa', 'Magha', 'Purva Phalguni', 'Utara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Bishakha', 'Anuradha', 'Jyestha', 'Moola',
    'Purvashadha', 'Utarashadha', 'Shravana', 'Dhanishta', 'Shatabhisa', 'Purva Bhadra',
    'Utara Bhadra', 'Revati'
  ];
  const handleSignToggle = (sign) => {
    setSelectedSigns((prevSelected) =>
      prevSelected.includes(sign)
        ? prevSelected.filter((s) => s !== sign)
        : [...prevSelected, sign]
    );
  };

  const handleSubmit = () => {
    if (period && selectedSigns.length > 0) {
      onSubmit({ period, numbers: selectedSigns });
      setPeriod('');
      setSelectedSigns([]);
      onClose();
    } else {
      alert('Please select period and signs.');
    }
  };

  


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Select Period and Zodiac Signs</h2>
        <div>
          <input
            type="text"
            placeholder="Period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            style={{width:"50%",border:"2px solid black",borderRadius:"10px"}}
          />
        </div>
        <div style={{display:"flex",width:"100%",flexWrap:"wrap",gap:"2px",justifyContent:"space-between"}}>
          {[...Array(firstValue)].map((_, i) => (
            <div style={{display:"flex",width:"30%"}}>
            <label key={i + 1}>
              <p>{i + 1} {firstValue === 12 ? `${signs[i]}` : `${stars[i]}`} </p>
              <input
                type="checkbox"
                value={i + 1}
                checked={selectedSigns.includes(i + 1)}
                onChange={() => handleSignToggle(i + 1)}
              />
            </label>
            </div>
          ))}
        </div>
        {/* <button onClick={handleSubmit}>Submit</button> */}
        <Button onClick={handleSubmit} variant='contained' startIcon={<AddIcon />} color='success' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
                                       Submit
                                    </Button>
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default PeriodSelectionModal;

import React, { useEffect, useState } from 'react'

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


function Panchang(props) {
  const [panjiData, setPanjiData] = useState([]);
  const [entries, setEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/panjiData'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPanjiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(panjiData);

  // console.log(props.time);
  let date;
  let time;
  if (props.date)
    date = new Date(props.date['$d']);
  else
    date = new Date();

  if (props.time)
    time = new Date(props.time['$d']);
  else
    time = new Date();

  if (panjiData.length >= 1 && entries.length === 0)
    setEntries(Object.entries(panjiData[0]));

  // console.log(entries);



  // *****************************Handlers****************************//

  // Giving a search functionality for searchbox
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  // Clear the state when Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery('');
    }
  };

  // *****************************Handlers End****************************//

  return (
    <div className='p-5 w-full '>

      <div className='float-right bg-slate-500 rounded-md'>
        <div style={{ width: 350, display: 'flex', alignItems: 'center', borderRadius: '10px', padding: '5px' }}>
          <SearchIcon style={{ marginRight: '5px', color: "whitesmoke" }} />
          <InputBase
            placeholder="Search..."
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            value={searchQuery}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div className="mt-4 bg-transparent min-h-screen py-8 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Panchang for {panjiData.length >= 1 && panjiData[0]?.ENG_DATE}</h1>
          <div className="flex flex-wrap justify-evenly gap-5 ">
            {entries && entries.map((item, ind) => (
              (item[0] !== "YOGINI" &&
                item[0] !== "CHANDRA SUDDHI" &&
                item[0] !== "GHATA CHANDRA") &&
              item[0] !== "AUSPICIOUS TIME" &&
              item[0] !== "BARRED/INAUSPICIOUS TIME" &&
              item[0] !== "_id" &&

              (item[0].toLowerCase().includes(searchQuery.toLowerCase()) && <div key={ind} className="border border-slate-300 p-3 w-[350px] rounded-md hover:cursor-pointer bg-slate-600 text-white">
                <p className="font-bold">{item[0]}</p>
                <p>{item[1]}</p>
              </div>)

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panchang

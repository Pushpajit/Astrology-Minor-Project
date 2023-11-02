import { Box, Paper } from '@mui/material';
import React from 'react'
import ZodiacCard from './ZodiacCard';

const zodiacSigns = [
  {
    name: 'Aries',
    date: 'March 21 - April 19',
    description: 'Aries is a fire sign known for its energy, enthusiasm, and leadership qualities.',
  },
  {
    name: 'Taurus',
    date: 'April 20 - May 20',
    description: 'Taurus is an earth sign characterized by its strong determination, practicality, and love for comfort.',
  },
  {
    name: 'Gemini',
    date: 'May 21 - June 20',
    description: 'Gemini is an air sign associated with adaptability, communication skills, and curiosity.',
  },
  {
    name: 'Cancer',
    date: 'June 21 - July 22',
    description: 'Cancer is a water sign known for its emotional sensitivity, nurturing nature, and loyalty.',
  },
  {
    name: 'Leo',
    date: 'July 23 - August 22',
    description: 'Leo is a fire sign characterized by its confidence, generosity, and leadership abilities.',
  },
  {
    name: 'Virgo',
    date: 'August 23 - September 22',
    description: 'Virgo is an earth sign associated with practicality, attention to detail, and analytical thinking.',
  },
  {
    name: 'Libra',
    date: 'September 23 - October 22',
    description: 'Libra is an air sign known for its diplomacy, balance, and social charm.',
  },
  {
    name: 'Scorpio',
    date: 'October 23 - November 21',
    description: 'Scorpio is a water sign characterized by its intensity, mystery, and determination.',
  },
  {
    name: 'Sagittarius',
    date: 'November 22 - December 21',
    description: 'Sagittarius is a fire sign associated with adventure, optimism, and a love for exploration.',
  },
  {
    name: 'Capricorn',
    date: 'December 22 - January 19',
    description: 'Capricorn is an earth sign known for its discipline, ambition, and practicality.',
  },
  {
    name: 'Aquarius',
    date: 'January 20 - February 18',
    description: 'Aquarius is an air sign characterized by its creativity, independence, and humanitarian values.',
  },
  {
    name: 'Pisces',
    date: 'February 19 - March 20',
    description: 'Pisces is a water sign associated with empathy, imagination, and a deep emotional connection.'
  }
];


function MainSection(props) {

  // console.log(props.time);
  let date;
  let time;
  if (props.value)
    date = new Date(props.value['$d']);
  else
    date = new Date();

  if (props.time)
    time = new Date(props.time['$d']);
  else
    time = new Date();

  return (
    <main>
      {time.toLocaleTimeString()}
      <br></br>
      {date.toLocaleDateString()}

      <div className='flex flex-wrap justify-evenly'>
        
        {zodiacSigns.map((sign, index) => (
          <ZodiacCard key={index} {...sign} />
        ))}
      </div>
      
    </main>
  )
}

export default MainSection

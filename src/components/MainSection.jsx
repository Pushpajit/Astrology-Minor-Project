import { Box, Paper } from '@mui/material';
import React from 'react'
import ZodiacCard from './ZodiacCard';


import Aquarius from '../assets/xaquarius_kumbha.png';
import Aries from '../assets/xaries_mesha.png';
import Cancer from '../assets/xcancer_karka.png';
import Capricorn from '../assets/xcapricorn_makara.png';
import Gemini from '../assets/xgemini_mithuna.png';
import Leo from '../assets/xleo_simha.png';
import Libra from '../assets/xlibra_tula.png';
import Pisces from '../assets/xpisces_meena.png';
import Sagittarius from '../assets/xsagittarius_dhanu.png';
import Scorpio from '../assets/xscorpio_vrishchika.png'; 
import Taurus from '../assets/xtaurus_vrishabha.png';
import Virgo from '../assets/xvirgo_kanya.png';







function MainSection({data}) {


    const zodiacSigns = [
      {
        name: 'Aries',
        altname: "Mesha",
        date: 'March 21 - April 19',
        description: 'Aries is a fire sign known for its energy, enthusiasm, and leadership qualities.',
        image: Aries,
        CS: (data && data['CHANDRA SUDDHI']?.Aries) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Aries) || "N/A",
      },
      {
        name: 'Taurus',
        altname: "Vrishabha",
        date: 'April 20 - May 20',
        description: 'Taurus is an earth sign characterized by its strong determination, practicality, and love for comfort.',
        image: Taurus,
        CS: (data && data['CHANDRA SUDDHI']?.Taurus) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Taurus) || "N/A",
      },
      {
        name: 'Gemini',
        altname: "Mithuna",
        date: 'May 21 - June 20',
        description: 'Gemini is an air sign associated with adaptability, communication skills, and curiosity.',
        image: Gemini,
        CS: (data && data['CHANDRA SUDDHI']?.Gemini) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Gemini) || "N/A",
      },
      {
        name: 'Cancer',
        altname: "Makara",
        date: 'June 21 - July 22',
        description: 'Cancer is a water sign known for its emotional sensitivity, nurturing nature, and loyalty.',
        image: Cancer,
        CS: (data && data['CHANDRA SUDDHI']?.Cancer) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Cancer) || "N/A",
      },
      {
        name: 'Leo',
        altname: "Simha",
        date: 'July 23 - August 22',
        description: 'Leo is a fire sign characterized by its confidence, generosity, and leadership abilities.',
        image: Leo,
        CS: (data && data['CHANDRA SUDDHI']?.Leo) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Leo) || "N/A",
      },
      {
        name: 'Virgo',
        altname: "Kanya",
        date: 'August 23 - September 22',
        description: 'Virgo is an earth sign associated with practicality, attention to detail, and analytical thinking.',
        image: Virgo,
        CS: (data && data['CHANDRA SUDDHI']?.Virgo) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Virgo) || "N/A",
      },
      {
        name: 'Libra',
        altname: "Tula",
        date: 'September 23 - October 22',
        description: 'Libra is an air sign known for its diplomacy, balance, and social charm.',
        image: Libra,
        CS: (data && data['CHANDRA SUDDHI']?.Libra) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Libra) || "N/A",
      },
      {
        name: 'Scorpio',
        altname: "Vrishchika",
        date: 'October 23 - November 21',
        description: 'Scorpio is a water sign characterized by its intensity, mystery, and determination.',
        image: Scorpio,
        CS: (data && data['CHANDRA SUDDHI']?.Scorpio) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Scorpio) || "N/A",
      },
      {
        name: 'Sagittarius',
        altname: "Dhanu",
        date: 'November 22 - December 21',
        description: 'Sagittarius is a fire sign associated with adventure, optimism, and a love for exploration.',
        image: Sagittarius,
        CS: (data && data['CHANDRA SUDDHI']?.Sagittarius) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Sagittarius) || "N/A",
      },
      {
        name: 'Capricorn',
        altname: "Makara",
        date: 'December 22 - January 19',
        description: 'Capricorn is an earth sign known for its discipline, ambition, and practicality.',
        image: Capricorn,
        CS: (data && data['CHANDRA SUDDHI']?.Capricorn) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Capricorn) || "N/A",
      },
      {
        name: 'Aquarius',
        altname: "Kumbha",
        date: 'January 20 - February 18',
        description: 'Aquarius is an air sign characterized by its creativity, independence, and humanitarian values.',
        image: Aquarius,
        CS: (data && data['CHANDRA SUDDHI']?.Aquarius) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Aquarius) || "N/A",
      },
      {
        name: 'Pisces',
        altname: "Meena",
        date: 'February 19 - March 20',
        description: 'Pisces is a water sign associated with empathy, imagination, and a deep emotional connection.',
        image: Pisces,
        CS: (data && data['CHANDRA SUDDHI']?.Pisces) || "N/A",
        GC: (data && data['GHATA CHANDRA']?.Pisces) || "N/A",
      }
    ];

  // console.log(data['CHANDRA SUDDHI']);
  return (
    <main className='mt-8'>

      <div className='flex flex-wrap justify-evenly border mb-8 border-slate-300 p-3 rounded-md hover:border-dashed hover:cursor-pointer bg-slate-600 text-white  transition-all ml-14 mr-14'>

        {zodiacSigns.map((sign, index) => (
          <ZodiacCard key={index} {...sign} />
        ))}
      </div>

    </main>
  )
}

export default MainSection

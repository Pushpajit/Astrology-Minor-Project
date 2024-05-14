import * as React from 'react';
import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import { Modal } from 'antd';
import Fade from '@mui/material/Fade';
import { ScrollShadow } from "@nextui-org/react";
import { Button, Paper, TextField } from '@mui/material';


import ChandraSuddhiComponent from './ChandraSuddhiComponent';
import GhatachandraComponent from './GhatachandraComponent';
import { useState } from 'react';
import Yogini from './Yogini';
import Tarasudhiomponent from './Tarasudhicomponent';
import AuspiciousTime from './AuspiciousTime';
import InauspiciousTime from './InauspiciousTIme';
import TimePickerComponent from './TimePickerComponent';


const formatDate = (dateObj) => {
    console.log(dateObj);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = String(dateObj.getFullYear()).slice(-2); // Extract last 2 digits of the year

    return `${day}/${month}/${year}`;
};

async function createData(data) {

    const URL = `https://online-panchang.onrender.com/api/panjiData`;
    console.log("TOKEN " + JSON.parse(localStorage.getItem('token')));
    // console.log(data);

    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },

        body: JSON.stringify(data)
    });

    if (res.ok) {
        alert("Data Successfully Saved!");
        const result = await res.json();
    } else {
        alert('Something Went Wrong');
    }

}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};




export default function FormData({ open, setOpen, date }) {
    const handleClose = () => setOpen(false);

    // console.log(formatDate(date));

    // const [lunarMonth, setLunarMonth] = useState('');
    // const [solarMonth, setSolarMonth] = useState('');
    // const [dayOfSolarMonth, setDayOfSolarMonth] = useState('');
    // const [engSunrise, setEngSunrise] = useState('');
    // const [engSunset, setEngSunset] = useState('');
    // const [sunrise, setSunrise] = useState('');
    // const [sunriseLagna, setSunriseLagna] = useState('');
    // const [sunset, setSunset] = useState('');
    // const [sunsetLagna, setSunsetLagna] = useState('');
    // const [paksha, setPaksha] = useState('');
    // const [tithi, setTithi] = useState('');
    // const [thithiPeriod, setThithiPeriod] = useState('');
    // const [thithiPeriodEnglish, setThithiPeriodEnglish] = useState('');
    // const [nakshatra, setNakshatra] = useState('');
    // const [nakshatraPeriod, setNakshatraPeriod] = useState('');
    // const [nakshatraPeriodEnglish, setNakshatraPeriodEnglish] = useState('');
    // const [chandraRaasi, setChandraRaasi] = useState('');
    // const [chandraRaasiPeriod, setChandraRaasiPeriod] = useState('');
    // const [chandraRaasiPeriodEnglish, setChandraRaasiPeriodEnglish] = useState('');
    // const [puskar, setPuskar] = useState('');
    // const [sraddha, setSraddha] = useState('');
    // const [festivalOccasion, setFestivalOccasion] = useState('');
    const [data, setData] = useState({
        'DATE (English)': '',
        'DAY (English)': '',
        LUNAR_MONTH: '',
        SOLAR_MONTH: '',
        DAY_OF_SOLAR_MONTH: '',
        SUNRISE: '',
        SUNSET: '',
        ENG_SUNRISE: '',
        ENG_SUNSET: '',
        SUNRISE_LAGNA: '',
        SUNSET_LAGNA: '',
        PAKSHA: '',
        TITHI: '',
        THITHI_PERIOD: '',
        'TITHI_PERIOD (English)': '',
        NAKSHATRA: '',
        NKTRA_PERIOD: '',
        'NKTRA_PERIOD (English)': '',
        CHANDRA_RAASI: '',
        CHANDRA_RAASI_PERIOD: '',
        'CHANDRA_RAASI_PERIOD (English)': '',
        PUSKAR: '',
        SRADDHA: '',
        FESTIVAL_OCCASION: '',
        YOGINI: [],
        'CHANDRA SUDDHI': {},
        'GHATA CHANDRA': {},
        'AUSPICIOUS TIME': [],
        'BARRED/INAUSPICIOUS TIME': [],
        'TARA SUDDHI': [],
        'CHANDRA_RAASI_PERIOD (English)': []
    })


    const handleFinalSubmit = async () => {
        // Create an object with the form values
        const formData = {
            'DATE (English)': `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`,
            'DAY (English)': '',
            LUNAR_MONTH: data.LUNAR_MONTH,
            SOLAR_MONTH: data.SOLAR_MONTH,
            DAY_OF_SOLAR_MONTH: data.DAY_OF_SOLAR_MONTH,
            SUNRISE: data.SUNRISE,
            SUNSET: data.SUNSET,
            ENG_SUNRISE: data.ENG_SUNRISE,
            ENG_SUNSET: data.ENG_SUNSET,
            SUNRISE_LAGNA: data.SUNRISE_LAGNA,
            SUNSET_LAGNA: data.SUNSET_LAGNA,
            PAKSHA: data.PAKSHA,
            TITHI: data.TITHI,
            THITHI_PERIOD: data.THITHI_PERIOD,
            'TITHI_PERIOD (English)': data['TITHI_PERIOD (English)'],
            NAKSHATRA: data.NAKSHATRA,
            NKTRA_PERIOD: data.NKTRA_PERIOD,
            'NKTRA_PERIOD (English)': data['NKTRA_PERIOD (English)'],
            CHANDRA_RAASI: data.CHANDRA_RAASI,
            CHANDRA_RAASI_PERIOD: data.CHANDRA_RAASI_PERIOD,
            'CHANDRA_RAASI_PERIOD (English)': data['CHANDRA_RAASI_PERIOD (English)'],
            PUSKAR: data.PUSKAR,
            SRADDHA: data.SRADDHA,
            FESTIVAL_OCCASION: data.FESTIVAL_OCCASION,
            YOGINI: data.YOGINI,
            'CHANDRA SUDDHI': data['CHANDRA SUDDHI'],
            'GHATA CHANDRA': data['GHATA CHANDRA'],
            'AUSPICIOUS TIME': data['AUSPICIOUS TIME'],
            'BARRED/INAUSPICIOUS TIME': data['BARRED/INAUSPICIOUS TIME'],
            'TARA SUDDHI': data['TARA SUDDHI'],
            'CHANDRA_RAASI_PERIOD (English)': data['CHANDRA_RAASI_PERIOD (English)']

        };


        console.log(formData)

        // const res = await createData(formData);
        // handleClose();
    };



    return (
        <div>
            <Modal
                open={open}
                onCancel={handleClose}
                cancelButtonProps={{
                    hidden: true
                }}
                okButtonProps={{
                    hidden: true
                }}
                closeIcon={false}
                centered
            >
                <Fade in={open}>
                    <Box sx={style}>


                        <p className='text-center text-lg font-bold text-slate-700'>Data For {date?.toDateString() || new Date().toDateString()}</p>
                        <ScrollShadow size={100} className="w-full h-[650px] overflow-y-scroll space-y-3">

                            <p className='mb-1 font-semibold text-slate-800'>MONTH AND DAY:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField required id="standard-basic" label="Lunar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['LUNAR_MONTH']}
                                    onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'LUNAR_MONTH': e.target.value }
                                        })
                                    }}
                                />

                                <TextField required id="standard-basic" label="Solar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['SOLAR_MONTH']}
                                    onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'SOLAR_MONTH': e.target.value }
                                        })
                                    }} />

                                <TextField id="standard-basic" label="Day of Solar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['DAY_OF_SOLAR_MONTH']}
                                    onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'DAY_OF_SOLAR_MONTH': e.target.value }
                                        })
                                    }}
                                />

                            </Paper>

                            <p className='mb-1 font-semibold text-slate-800'>SUNRISE AND SUNSET:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%" }}>

                                <div className='flex gap-11 mb-3'>
                                    <div className='flex gap-2 items-center'>
                                        <p>Sunrise: </p>
                                        <TimePickerComponent defaultValue="05:34:46" onChange={(time, timeString) => {
                                            setData(prev => {
                                                return { ...prev, 'SUNRISE': timeString }
                                            })
                                        }} />
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <p>Sunset: </p>
                                        <TimePickerComponent defaultValue="07:58:10" onChange={(time, timeString) => {
                                            setData(prev => {
                                                return { ...prev, 'SUNSET': timeString }
                                            })
                                        }} />
                                    </div>
                                </div>

                                <div className='flex gap-5 mb-3'>
                                    <div className='flex gap-2 items-center'>
                                        <p>Eng Sunrise: </p>
                                        <TimePickerComponent defaultValue="02:38:48" onChange={(time, timeString) => {
                                            setData(prev => {
                                                return { ...prev, 'ENG_SUNRISE': timeString }
                                            })
                                        }} />
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <p>Eng Sunset: </p>
                                        <TimePickerComponent defaultValue="02:03:03" onChange={(time, timeString) => {
                                            setData(prev => {
                                                return { ...prev, 'ENG_SUNSET': timeString }
                                            })
                                        }} />
                                    </div>
                                </div>

                                {/* Lagna text fields */}
                                <div className='flex gap-2'>
                                    <TextField id="sunrise-lagna" label="Sunrise Lagna" size='small' variant="standard" sx={{ marginBottom: 2 }} onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'SUNRISE_LAGNA': e.target.value }
                                        })
                                    }} />

                                    <TextField id="sunset-lagna" label="Sunset Lagna" size='small' variant="standard" sx={{ marginBottom: 2 }} onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'SUNSET_LAGNA': e.target.value }
                                        })
                                    }} />
                                </div>




                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>PAKSHA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Paksha" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['PAKSHA']}
                                    onChange={(e) => {
                                        setData(prev => {
                                            return { ...prev, 'PAKSHA': e.target.value }
                                        })
                                    }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>TITHI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    id="tithi"
                                    label="Tithi"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['TITHI']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'TITHI': e.target.value }))}
                                />
                                <TextField
                                    id="tithi-period"
                                    label="Tithi Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['THITHI_PERIOD']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'THITHI_PERIOD': e.target.value }))}
                                />
                                <TextField
                                    id="english-tithi-period"
                                    label="English Tithi Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['TITHI_PERIOD (English)']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'TITHI_PERIOD (English)': e.target.value }))}
                                />


                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>NAKSHATRA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    id="nakshatra"
                                    label="Nakshatra"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['NAKSHATRA']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'NAKSHATRA': e.target.value }))}
                                />
                                <TextField
                                    id="nakshatra-period"
                                    label="Nakshatra Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['NKTRA_PERIOD']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'NKTRA_PERIOD': e.target.value }))}
                                />
                                <TextField
                                    id="english-nakshatra-period"
                                    label="English Nakshatra Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['NKTRA_PERIOD (English)']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'NKTRA_PERIOD (English)': e.target.value }))}
                                />


                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>CHANDRA RAASI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    id="chandra-raasi"
                                    label="Chandra Raasi"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['CHANDRA_RAASI']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'CHANDRA_RAASI': e.target.value }))}
                                />
                                <TextField
                                    id="chandra-raasi-period"
                                    label="Chandra Raasi Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['CHANDRA_RAASI_PERIOD']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'CHANDRA_RAASI_PERIOD': e.target.value }))}
                                />
                                <TextField
                                    id="english-chandra-raasi-period"
                                    label="English Chandra Raasi Period"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['CHANDRA_RAASI_PERIOD (English)']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'CHANDRA_RAASI_PERIOD (English)': e.target.value }))}
                                />


                            </Paper>

                            <p className='mb-1 font-semibold text-slate-800'>PUSKAR:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    id="puskar"
                                    label="Puskar"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['PUSKAR']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'PUSKAR': e.target.value }))}
                                />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>SRADDHA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    id="sraddha"
                                    label="Sraddha"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['SRADDHA']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'SRADDHA': e.target.value }))}
                                />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>FESTIVAL OCCASSION:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField
                                    multiline
                                    id="festival-occasion"
                                    label="Festival Occasion"
                                    size='small'
                                    variant="standard"
                                    sx={{ marginBottom: 2, width: "50%" }}
                                    value={data['FESTIVAL_OCCASION']}
                                    onChange={(e) => setData(prev => ({ ...prev, 'FESTIVAL_OCCASION': e.target.value }))}
                                />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>YOGINI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <Yogini onYoginiChange={setData}/>
                            </Paper>

                            <p className='mb-1 font-semibold text-slate-800'>CHANDRA SUDDHI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <ChandraSuddhiComponent />
                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>GHATA CHANDRA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <GhatachandraComponent />
                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>TARA SUDHI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <Tarasudhiomponent />
                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>AUSPICIOUS TIME:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <AuspiciousTime />
                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>INAUSPICIOUS TIME:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <InauspiciousTime />
                            </Paper>

                        </ScrollShadow>

                        <Button onClick={handleFinalSubmit}
                            variant='contained' color='primary' sx={{ width: "100%", color: "whitesmoke", margin: "6px" }}>
                            FINAL SUBMIT
                        </Button>

                    </Box>
                </Fade>
            </Modal>
            {/* </Modal> */}
        </div>
    );
}
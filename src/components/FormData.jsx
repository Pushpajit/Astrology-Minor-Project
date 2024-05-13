import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ScrollShadow } from "@nextui-org/react";
import { Paper, TextField } from '@mui/material';


import ChandraSuddhiComponent from './ChandraSuddhiComponent';
import GhatachandraComponent from './GhatachandraComponent';
import { useState } from 'react';
import Yogini from './Yogini';
import Tarasudhiomponent from './Tarasudhicomponent';
import AuspiciousTime from './AuspiciousTime';
import InauspiciousTime from './InauspiciousTIme';
import TimePickerComponenet from './TimePicker';
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

    //yogini
    const [yoginiList, setYoginiList] = useState([]);
    const [newYogini, setNewYogini] = useState({ direction: '', period: '' });

    const handleAddYogini = () => {
        setYoginiList([...yoginiList, { ...newYogini }]);
        setNewYogini({ direction: '', period: '' });
    };

    const handleDeleteYogini = (index) => {
        const updatedList = [...yoginiList];
        updatedList.splice(index, 1);
        setYoginiList(updatedList);
    };

    //chndrasaddha






    // console.log(typeof(date));

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>


                        <p className='text-center text-lg font-bold text-slate-700'>Data For {date?.toDateString() || new Date().toDateString()}</p>
                        <ScrollShadow size={100} className="w-full h-[650px] overflow-y-scroll space-y-3">

                            <p className='mb-1 font-semibold text-slate-800'>MONTH AND DAY:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Lunar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="Solar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="Day of Solar Month" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>SUNRISE AND SUNSET:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%" }}>
                                <div className='flex gap-2'>

                                    {/* <TextField id="standard-basic" label="Sunrise" size='small' variant="standard" sx={{ marginBottom: 2 }} /> */}
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimeField variant='standard' label="Sunrise" format="HH:mm:ss" />
                                    </LocalizationProvider>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimeField variant='standard' label="Sunset" format="HH:mm:ss" />
                                    </LocalizationProvider>

                                    {/* <TextField id="standard-basic" label="Sunset" size='small' variant="standard" sx={{ marginBottom: 2 }} /> */}
                                </div>
                                <div className='flex gap-2'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimeField variant='standard' label="Eng Sunrise" format="HH:mm:ss"/>
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimeField variant='standard' label="Eng Sunset" format="HH:mm:ss"/>
                                    </LocalizationProvider>
                                    {/* <TextField id="standard-basic" label="Eng Sunrise" size='small' variant="standard" sx={{ marginBottom: 2 }} />
                                    <TextField id="standard-basic" label="Eng Sunset" size='small' variant="standard" sx={{ marginBottom: 2 }} /> */}
                                </div>

                                <div className='flex gap-2'>


                                    <TextField id="standard-basic" label="Sunrise Lagna" size='small' variant="standard" sx={{ marginBottom: 2 }} />
                                    <TextField id="standard-basic" label="Sunset Lagna" size='small' variant="standard" sx={{ marginBottom: 2 }} />

                                </div>
                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>PAKSHA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Paksha" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>TITHI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Tithi" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="Tithi Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="English Tithi Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>NAKSHATRA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Nakshatra" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="Nakshatra Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="English Nakshatra Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>CHANDRA RAASI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Chandra Raasi" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="Chandra Raasi Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />
                                <TextField id="standard-basic" label="English Chandra Raasi Period" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>

                            <p className='mb-1 font-semibold text-slate-800'>PUSKAR:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Puskar" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>SRADDHA:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Sraddha" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>FESTIVAL OCCASSION:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <TextField id="standard-basic" label="Festival Occasion" size='small' variant="standard" sx={{ marginBottom: 2, width: "50%" }} />

                            </Paper>
                            <p className='mb-1 font-semibold text-slate-800'>YOGINI:</p>
                            <Paper elevation={2} sx={{ p: 1, width: "100%", display: 'flex', gap: 2 }}>

                                <Yogini />
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

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
import React, { useState } from 'react'
import './ZodiacCard.css'

import { Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function ZodiacCard({ name, date, description }) {

    const [ flip, setFlip ] = useState("flip-card");
    
    

    return (
        // <div className="h-fit border border-slate-500 w-1/4 group rounded-lg bg-white p-4 m-4 shadow-lg transform hover:scale-105 hover:shadow-xl hover:cursor-pointer transition-transform transition-shadow">
        //     <h2 className="text-2xl font-semibold">{name}</h2>
        //     <p className="text-gray-600">{date}</p>
        //     <p className="text-gray-700 mt-2">{description}</p>
        // </div>
        <div className={`${flip} hover:cursor-pointer`} >
            <div className="flip-card-inner" >
                <div class="flip-card-front " onClick={() => setFlip("flip")}>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{date}</p>
                    <p className="text-gray-700 mt-2">{description}</p>

                    {/* <Button onClick={handleSwap} color='warning' size='small' variant='outlined' sx={{width: 20, marginX: "auto", marginTop: 5}}>click</Button> */}
                </div>

                <div className="flip-card-back flex flex-col justify-between">
                    <IconButton onClick={() => setFlip("flip-card")} sx={{width: 20, height: 20, p:1}}>
                        <ArrowBackIcon sx={{height: 25, width: 25}} />
                    </IconButton>
                    <p className="title">BACK</p>
                    <p>Content</p>
                    <Button size='small' color='warning' variant='contained' sx={{color: "white", width: "50%", marginX: "auto", p:1, marginBottom: 1}}>View more</Button>
                </div>
            </div>
        </div>
    );
}

export default ZodiacCard

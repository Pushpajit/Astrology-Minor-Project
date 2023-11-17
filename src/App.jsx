import { useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainSection from "./components/MainSection";
import { ThemeProvider, createTheme } from "@mui/material";
import Panchang from "./components/Panchang";


function App() {
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Header />
      
      <div className="flex gap-10">

        <LeftSideBar setValue={setValue} setTime={setTime}/>

        <div>
          <div className="w-full h-1/2 bg-slate-600/50 border-[2px] border-dashed rounded-md">
            <Panchang date={value} time={time}/>
          </div>
          <MainSection value={value} time={time}/>
        </div>
      </div>
    </ThemeProvider>
     
    </>
  );
}

export default App;

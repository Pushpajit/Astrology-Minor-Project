import { useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainSection from "./components/MainSection";
import { ThemeProvider, createTheme } from "@mui/material";
import Panchang from "./components/Panchang";


function App() {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState(null);
  const [zodiacData, setZodiacData] = useState(null);

  const lighTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  // console.log(zodiacData[0]);
  console.log(value);

  return (
    <>
      <ThemeProvider theme={lighTheme}>
        <Header />

        <div className="flex ">

          <LeftSideBar date={value} setValue={setValue} setTime={setTime} />

          <div className="flex-grow flex-3">
            <div className="w-full h-fit bg-slate-600/50  rounded-md ">
              <Panchang date={value} time={time} setZodiacData={setZodiacData}/>
            </div>
              {/* <MainSection value={value} time={time} data={zodiacData ? zodiacData[0] : null}/> */}
          </div>
        </div>
      </ThemeProvider>

    </>
  );
}

export default App;

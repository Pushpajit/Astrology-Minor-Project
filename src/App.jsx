import { useState } from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainSection from "./components/MainSection";
import { ThemeProvider, createTheme } from "@mui/material";


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
        <MainSection value={value} time={time}/>
      </div>
    </ThemeProvider>
     
    </>
  );
}

export default App;

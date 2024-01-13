import { JSX, useEffect } from "react";
import { initilizeJuno } from "./juno/config";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import "./styles/index.scss";


function App(): JSX.Element {
  useEffect(()=>{
initilizeJuno()
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

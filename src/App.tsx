import { JSX, useEffect } from "react";
import { initilizeJuno } from "./juno/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import { Account } from "./components/global/Account";
import "./styles/index.scss";

function App(): JSX.Element {
  useEffect(() => {
    initilizeJuno();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home/:key" element={<Home />} />
      </Routes>

      <Account />
    </BrowserRouter>
  );
}

export default App;

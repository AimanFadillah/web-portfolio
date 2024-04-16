import { BrowserRouter, Route, Routes } from "react-router-dom";
import Utama from "./pages/Utama";

export default function App (){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Utama/>} ></Route>
    </Routes>
  </BrowserRouter>
}
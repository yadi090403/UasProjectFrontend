import { Routes, Route } from "react-router-dom";
import GlobalPage from "./pages/Global/Global";
import HomeLayout from "./components/layouts/HomeLayout";
import IndonesiaPage from "./pages/Indonesia/Indonesia";
import ProvinsiPage from "./pages/Provinsi/Provinsi";
import data from "./utils/constants/provinces";
import { useState } from "react";
import DataContext from "./context/DataContext";
import AboutPage from "./pages/About/About";

function App() {
 const [dataProvinsi, setDataProvinsi] = useState(data?.provinces || []);
 const ContextValue = { dataProvinsi, setDataProvinsi };

 return (
  <HomeLayout>
   <DataContext.Provider value={ContextValue}>
    <Routes>
     <Route path="/" element={<GlobalPage />} />
     <Route path="/indonesia" element={<IndonesiaPage />} />
     <Route path="/provinsi" element={<ProvinsiPage />} />
     <Route path="/about" element={<AboutPage />} />
    </Routes>
   </DataContext.Provider>
  </HomeLayout>
 );
}

export default App;

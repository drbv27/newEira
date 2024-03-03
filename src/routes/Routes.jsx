import { Route, Routes } from "react-router-dom";
import Ambulance from "../pages/Ambulance";
import Home from "../pages/Home";
import HomeMedicine from "../pages/HomeMedicine";
import Telemedicine from "../pages/Telemedicine";
import Laboratorie from "../pages/Laboratorie";
import Support from "../pages/Support";
import Aplication from "../pages/Aplication";


const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/telemedicine" element={<Telemedicine />} />
        <Route path="/homemedicine" element={<HomeMedicine />} />
        <Route path="/laboratorie" element={<Laboratorie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/aplication" element={<Aplication />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
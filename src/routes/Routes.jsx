import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HistorialClinico from "../pages/HistorialClinico";
import HomeMedicine from "../pages/HomeMedicine";
import RecetasHome from "../pages/RecetasHome";
import Laboratorie from "../pages/Laboratorie";
import Support from "../pages/Support";
import Aplication from "../pages/Aplication";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial-clinico" element={<HistorialClinico />} />
        <Route path="/recipes" element={<RecetasHome />} />
        <Route path="/citas" element={<HomeMedicine />} />
        <Route path="/chat" element={<Laboratorie />} />
        <Route path="/consultas" element={<Support />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

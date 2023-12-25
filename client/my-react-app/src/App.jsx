import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import DashboardRoutes from "./Routes/DashboardRoutes.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

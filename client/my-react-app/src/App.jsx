import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

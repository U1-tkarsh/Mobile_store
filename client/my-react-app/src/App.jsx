import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';

function App() {
  

  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/*" element={<MainRoutes />} />
  </Routes>
  </BrowserRouter>

    </>
  )
}

export default App

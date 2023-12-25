import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "./PrivateRoutes";

import DashboardHome from "../Admin/partials/dashboard/DashboardHome";

import DashboardUsers from "../Admin/partials/dashboard/users/DashboardUsers";
import AddSmartphone from "../Admin/partials/dashboard/AddSmartphone"
import AdminRoute from "./AdminRoute";
import confirmedOrder from '../Admin/partials/dashboard/confirmedOrder';

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminRoute element={DashboardHome} />} />
        <Route
          path="/users"
          element={<AdminRoute element={DashboardUsers} />}
        />
        <Route
          path="/addSmartphone"
          element={<AdminRoute element={AddSmartphone} />}
        />
        <Route
          path="/confirmedOrder"
          element={<AdminRoute element={confirmedOrder} />}
        />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;

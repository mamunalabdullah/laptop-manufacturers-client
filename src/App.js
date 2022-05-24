import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { PublicRoutes } from "./Routes/PublicRoutes";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Routes/RequireAuth";
import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import AddTool from "./Pages/Dashboard/AddTool";

function App() {

  return (
    <div>
      <Header>
        <Routes>
          {
            PublicRoutes.map(({path, Component}, index) =>(
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route element={<RequireAuth />}>
              {PrivateRoutes.map(({path, Component}, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
            <Route element={<AdminRoute />}>
                <Route path="dashboard" element={<Dashboard />} >
                  <Route path="add-admin" element={<AddAdmin />} />
                  <Route path="add-tool" element={<AddTool />} />
                </Route>
            </Route>
        </Routes>
      </Header>
      <ToastContainer />
    </div>
  );
}

export default App;

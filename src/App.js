import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Routes/RequireAuth";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllTool from "./Pages/Tools/AllTool";
import PurchaseTool from "./Pages/Tools/PurchaseTool";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReviews from "./Pages/Dashboard/MyReviews";

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="alltool"
            element={
              <RequireAuth>
                <AllTool />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="review" element={<MyReviews></MyReviews>}></Route>
          </Route>

          <Route
            path="tool/:id"
            element={
              <RequireAuth>
                <PurchaseTool />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
      <ToastContainer />
    </div>
  );
}

export default App;

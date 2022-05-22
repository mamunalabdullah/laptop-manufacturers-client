import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { PublicRoutes } from "./Routes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header>
        <Routes>
          {
            PublicRoutes.map(({path, Component}, index) =>(
              <Route key={index} path={path} element={<Component />} />
            ))}
        </Routes>
      </Header>
      <ToastContainer />
    </div>
  );
}

export default App;

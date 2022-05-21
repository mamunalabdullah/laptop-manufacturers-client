import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { PublicRoutes } from "./Routes/PublicRoutes";


function App() {
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
      <Footer />
    </div>
  );
}

export default App;

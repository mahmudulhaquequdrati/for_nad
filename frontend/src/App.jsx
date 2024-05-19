import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FindBloods from "./pages/FindBlood/FindBloods";
import AuthProtected from "./routes/PrivateRoute";
import Donor from "./pages/Add/Donor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <AuthProtected>
              <Home />
            </AuthProtected>
          }
        />
        <Route path="/add-donor" element={<Donor />} />
        {/* <Route path="about" element={<About />} /> */}

        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

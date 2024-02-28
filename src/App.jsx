import React , {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Main, Section } from "./pages/Main";
import Myvoice from "./pages/Myvoice";
import Forum from "./pages/Forum";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import { useSelector } from "react-redux";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const token = useSelector((state) => state.Auth.token);
  const isLoggedIn = !!token;

  return (
    <Router>
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/Main/*" element={<Main />} />
        <Route
          path="/"
          element={
            <Main>
              <Route path="/" element={<Section id="mainSection" />} />
              <Route path="/howToUse" element={<Section id="howToUseSection" />} />
              <Route path="/aboutUs" element={<Section id="aboutUsSection" />} />
            </Main>
          }
        />
        <Route path="/Forum" element={<PrivateRoute component={Forum} />} />
        <Route path="/New" element={<New />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Myvoice" element={<Myvoice />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

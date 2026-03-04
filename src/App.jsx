import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/cursor/Cursor.jsx";
import KolosiWebsite from "./components/kolosiWebSite/KolosiWebSite.jsx";
import AboutPage from "./components/kolosiWebSite/AboutPage.jsx";
import ActionsPage from "./components/kolosiWebSite/ActionsPage.jsx";
import Gallery from "./components/kolosiWebSite/Gallery.jsx";
import ParcoursTransformation from "./components/parcoursTransformation/ParcoursTransformation.jsx";

const App = () => {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<KolosiWebsite />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/actions" element={<ActionsPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

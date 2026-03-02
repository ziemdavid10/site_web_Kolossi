import "./App.css";
import Cursor from "./components/cursor/Cursor.jsx";
import KolosiWebsite from "./components/KolosiWebSite/KolosiWebSite.jsx";
import Footer from "./components/footer/Footer.jsx";
import ParcoursTransformation from "./components/parcoursTransformation/ParcoursTransformation.jsx";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="KolosiWebSite">
        <KolosiWebsite />
      </section>

      <section id="ParcoursTransformation">
        <ParcoursTransformation />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;

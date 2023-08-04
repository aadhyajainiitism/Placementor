import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Insight from "./pages/Insight";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import InsightPlacement from "./components/InsightsComponents/InsightPlacement";
import InsightPlacement2022 from "./components/InsightsComponents/InsightPlacement2022";
import InsightPlacement2023 from "./components/InsightsComponents/InsightPlacement2023";
import Footer from "./components/HomeComponents/Footer";
import Contact from "./components/HomeComponents/Contact";
import Data from "./components/Data";


export default function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>

          <Route path="/:type/:id/:year" element={<Data />} />

          <Route path="/" exact element={<Home />} />

          <Route path="/insight" exact element={<Insight />} />
          
          <Route
            path="/insight/placement/2021"
            exact
            element={<InsightPlacement />}
          />
          <Route
            path="/insight/placement/2022"
            exact
            element={<InsightPlacement2022 />}
          />
          <Route
            path="/insight/placement/2023"
            exact
            element={<InsightPlacement2023 />}
          />


          <Route path="/stats" exact element={<Stats />}></Route>
          <Route path="*" exact element={<><div style={{ margin: "2rem auto", textAlign: "center", fontSize: "2.5rem", color: "rgba(138, 94, 191, 1) " }}>Not Found 😔</div></>}></Route>
        </Routes>
        <Contact />
        <Footer />
     
    </div>
  );
}

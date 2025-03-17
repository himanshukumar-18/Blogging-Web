import Home from "./Pages/Home";
import SystemGuide from "./Pages/SystemGuide";
import Plan from "./Pages/Plan";
import Nav from "./Components/nav";
import { Route, Routes } from "react-router";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SystemGuide" element={<SystemGuide />} />
        <Route path="/Plane" element={<Plan />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

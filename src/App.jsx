import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Teams from "./Pages/Teams.jsx";
import Event from "./Pages/Event.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
import Achievements from "./Pages/Achievements.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="events" element={<Event />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
                    <Route path="achievements" element={<Achievements />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
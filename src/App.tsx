import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Class8 } from "./pages/class8/Class8";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class-8" element={<Class8 />} />
      </Routes>
    </Router>
  );
};

export default App;

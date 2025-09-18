import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Class8 } from "./pages/class8/Class8";
import { Class9 } from "./pages/class9/Class9";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class-8" element={<Class8 />} />
        <Route path="/class-9" element={<Class9 />} />
      </Routes>
    </Router>
  );
};

export default App;

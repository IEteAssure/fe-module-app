import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Class8 } from "./pages/class8/Class8";
import { Class9 } from "./pages/class9/Class9";
import { Class10 } from "./pages/class10/Class10";
import ProtectedRoute from "./pages/class10/ProtectedRoute";
import UserProfile from "./pages/class10/UserProfile";
import AccessForbidden from "./pages/class10/AccessForbidden";
import NotFound from "./pages/class10/NotFound";

const App = () => {
  const isAuthenticated = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class-8" element={<Class8 />} />
        <Route path="/class-9" element={<Class9 />} />
        <Route path="/class-10" element={<Class10 />} />
        <Route
          path="/class-10/users/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/forbidden" element={<AccessForbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

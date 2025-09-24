import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";

import "./Dashboard.css";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Frontend Module </h2>
      <div className="dashboard">
        <Button onClick={() => navigate("/class-8")}>Class 8</Button>
        <Button onClick={() => navigate("/class-9")}>Class 9</Button>
        <Button onClick={() => navigate("/class-10")}>Class 10</Button>
        <Button onClick={() => navigate("/class-11")}>Class 11</Button>
      </div>
    </>
  );
};

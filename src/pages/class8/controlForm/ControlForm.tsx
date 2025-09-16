import { useRef, useState } from "react";
import { Button } from "../../../components/button/Button";
import "./ControlForm.css";

export const ControlForm = () => {
  const [username, setUsername] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const password = passwordRef.current?.value;
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username (Controlled):</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password (Uncontrolled):</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            className="input"
          />
        </div>

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

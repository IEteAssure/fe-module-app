import { useState } from "react";
import { Button } from "../../../components/button/Button";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

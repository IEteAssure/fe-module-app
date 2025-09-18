import { UseEffectDemo } from "./UseEffectDemo";
import { UseRefDemo } from "./UseRefDemo";
import { UseStateDemo } from "./UseStateDemo";

export const Class9 = () => {
  return (
    <div>
      <h1>Welcome to Class 9: React Hooks</h1>
      <h2>Use State</h2>
      <UseStateDemo />
      <hr />
      <h2>Use Ref</h2>
      <UseRefDemo />
      <hr />
      <h2>Use Effect</h2>
      <UseEffectDemo />
    </div>
  );
};

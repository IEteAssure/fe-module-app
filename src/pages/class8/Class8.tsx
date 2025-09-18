import { Counter } from "./componentExamples/Counter";
import { OldCounter } from "./componentExamples/OldCounter";
import { ControlForm } from "./controlForm/ControlForm";

export const Class8 = () => {
  return (
    <div>
      <h2>Welcome to Class 8: Controlled vs Uncontrolled Components</h2>
      <ControlForm />
      <h3>Class vs Function Components</h3>
      <Counter />
      <OldCounter />
    </div>
  );
};

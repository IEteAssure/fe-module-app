import ControlledForm from "./ControlledForm";
import ReactHookForm from "./ReactHookForm";

export const Class11 = () => {
  return (
    <div className="min-h-screen text-white bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-1">Class 11 React Forms</h1>
      <div className="flex row">
        <ControlledForm />
        <ReactHookForm />
      </div>
    </div>
  );
};

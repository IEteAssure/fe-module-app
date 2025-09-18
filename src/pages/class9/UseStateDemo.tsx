import { useState, type FC } from "react";

export const UseStateDemo: FC = () => {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center  p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Profile Form
        </h2>

        <form className="space-y-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
                         text-base shadow-sm transition"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
                         text-base shadow-sm transition"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
                         text-base shadow-sm transition"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </form>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl text-center">
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
            {form.firstName} {form.lastName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 italic">
            {form.email}
          </p>
        </div>
      </div>
    </div>
  );
};

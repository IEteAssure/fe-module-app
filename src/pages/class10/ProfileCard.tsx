import { FaStar } from "react-icons/fa";

type ProfileCardProps = {
  name: string;
  role: string;
  avatar: string;
  location: string;
  isFavorite: boolean;
};

export const ProfileCard = ({
  name,
  role,
  avatar,
  location,
  isFavorite,
}: ProfileCardProps) => {
  return (
    <div className="relative flex flex-col items-center p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800">
      {isFavorite && (
        <FaStar className="absolute top-3 right-3 text-yellow-400 w-5 h-5" />
      )}
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      <p className="text-sm text-gray-400 mt-1">{location}</p>
    </div>
  );
};

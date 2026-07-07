import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <FaSpinner className="animate-spin text-5xl text-blue-700" />
    </div>
  );
};

export default Loader;

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-6">
      <h1 className="text-7xl font-bold text-green-700">404</h1>

      <p className="text-gray-600">Page Not Found</p>

      <Link
        to="/"
        className="rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;

import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <FaTimesCircle className="text-red-600 w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold text-red-700">Payment Failed</h1>
      <p className="text-gray-600 mt-2">Your transaction was not completed.</p>
      <Link
        to="/orders"
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </Link>
    </div>
  );
};

export default Cancel;

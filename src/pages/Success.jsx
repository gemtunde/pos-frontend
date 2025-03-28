import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <FaCheckCircle className="text-green-600 w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Success;

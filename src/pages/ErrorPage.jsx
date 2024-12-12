import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-6xl font-bold text-[#5d5ced] mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">
                Oops! The page you are looking for does not exist.
            </p>
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-[#5d5ced] text-white rounded-lg shadow-md hover:bg-[#4c4ebc] transition duration-200"
            >
                Go Back
            </button>
        </div>
    );
}

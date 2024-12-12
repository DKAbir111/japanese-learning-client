import banner from '../../assets/banner.png'
export default function Banner() {
    return (
        <div className="relative bg-gradient-to-r from-[#5d5ced] to-indigo-600 text-white py-20 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Learn Japanese Vocabulary
                    </h1>
                    <p className="text-lg mb-6 leading-relaxed">
                        Explore our interactive lessons and expand your Japanese communication
                        skills effortlessly. Learning has never been this engaging and fun!
                    </p>
                    <a
                        href="#lessons"
                        className="bg-white text-[#5d5ced] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition"
                    >
                        Start Learning Now
                    </a>
                </div>
                {/* Right Section */}
                <div className="mt-10 lg:mt-0">
                    <img
                        src={banner}
                        alt="Learn Japanese"
                        className="w-full max-w-md lg:max-w-lg shadow-lg rounded-lg"
                    />
                </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full lg:w-48 lg:h-48"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full lg:w-32 lg:h-32"></div>
        </div>
    );
}



export default function AddLesson() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const lessonName = e.target.lessonName.value;
        const lessonNumber = e.target.lessonNumber.value;

        const newLesson = { lessonName, lessonNumber };
        console.log("Lesson Created:", newLesson);
        // Make an API call here to save the lesson
    };

    return (

        <div className="flex justify-center items-center mx-auto">
            <div className="card bg-white shadow-lg rounded-lg max-w-md w-full p-8">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Create a New Lesson
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Lesson Name */}
                    <div className="form-control mb-4">
                        <label className="label mb-2">
                            <span className="label-text text-gray-600 font-medium">
                                Lesson Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="lessonName"
                            placeholder="Enter lesson name"
                            className="input input-bordered w-full rounded-md p-3 border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    {/* Lesson Number */}
                    <div className="form-control mb-4">
                        <label className="label mb-2">
                            <span className="label-text text-gray-600 font-medium">
                                Lesson Number
                            </span>
                        </label>
                        <input
                            type="number"
                            name="lessonNumber"
                            placeholder="Enter lesson number"
                            className="input input-bordered w-full rounded-md p-3 border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-md transition duration-300 border-none"
                        >
                            Create Lesson
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
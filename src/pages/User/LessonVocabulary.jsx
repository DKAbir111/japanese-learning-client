import { Link, useLoaderData } from "react-router-dom";

export default function LessonVocabulary() {
    const vocabulary = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Vocabulary for Lesson {vocabulary[0]?.lessonNo}
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vocabulary.map((word) => (
                    <li
                        key={word._id}
                        className="p-4 bg-white shadow-md rounded-md border-l-4 border-[#5d5ced] hover:shadow-lg transition-shadow"
                    >
                        <Link to={`/user/vocabulary/${word._id}`}>
                            <h2 className="text-xl font-semibold mb-2 text-blue-700 hover:text-blue-900">
                                {word.word}
                            </h2>
                            <p className="text-gray-600">
                                <strong>Pronunciation:</strong> {word.pronunciation}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

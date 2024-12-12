import { useLoaderData } from "react-router-dom";

export default function VocabularyDetails() {
    const wordDetails = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="p-6 bg-white shadow-md rounded-md border-l-4 border-[#5d5ced]">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    {wordDetails.word}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    <strong>Pronunciation:</strong> {wordDetails.pronunciation}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    <strong>When to Say:</strong> {wordDetails.whenToSay}
                </p>
                <p className="text-lg text-gray-600">
                    <strong>Lesson Number:</strong> {wordDetails.lessonNo}
                </p>
            </div>
        </div>
    );
}

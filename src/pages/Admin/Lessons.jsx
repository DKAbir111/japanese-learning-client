import { useState, useEffect } from 'react';

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [vocabularies, setVocabularies] = useState([]);
    const [lessonData, setLessonData] = useState([]);

    useEffect(() => {
        // Fetch lessons
        fetch('http://localhost:5001/api/lessons')
            .then((res) => res.json())
            .then((data) => setLessons(data));

        fetch('http://localhost:5001/api/all-vocabulary')
            .then((res) => res.json())
            .then((data) => setVocabularies(data));
    }, []);

    useEffect(() => {
        const mergedData = lessons.map((lesson) => {
            const vocabCount = vocabularies.filter(
                (vocab) => vocab.lessonNo === lesson.lessonNumber
            ).length;
            return { ...lesson, vocabCount };
        });
        setLessonData(mergedData);
    }, [lessons, vocabularies]);

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    All Lessons
                </h1>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-[#5d5ced] text-white text-left">
                            <tr>
                                <th className="px-6 py-4 text-lg">Lesson Name</th>
                                <th className="px-6 py-4 text-lg">Lesson Number</th>
                                <th className="px-6 py-4 text-lg">Vocabulary Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessonData.map((lesson) => (
                                <tr
                                    key={lesson.lessonNumber}
                                    className="hover:bg-[#5d5ced] hover:bg-opacity-15 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 text-gray-700">{lesson.lessonName}</td>
                                    <td className="px-6 py-4 text-gray-700">{lesson.lessonNumber}</td>
                                    <td className="px-6 py-4 text-gray-700">{lesson.vocabCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Lessons;

import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';

export default function Lesson() {
    const lessons = useLoaderData();
    console.log("hello", lessons);

    return (
        <div>
            <Banner />
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Explore Lessons</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessons.map((lesson) => (
                        <li
                            key={lesson.lessonNumber}
                            className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <Link
                                to={`/user/lesson-vocabulary/${lesson.lessonNumber}`}
                                className="block text-gray-800"
                            >
                                <h2 className="text-2xl font-semibold mb-3 text-blue-700 hover:text-blue-900">
                                    {lesson.lessonName}
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Lesson Number: <span className="font-medium">{lesson.lessonNumber}</span>
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

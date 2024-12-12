import { useState, useEffect } from 'react';
import LessonCard from './card/LessonCard';
import Swal from "sweetalert2";
import axios from "axios";
const LessonManagement = () => {
    const [lessons, setLessons] = useState([]);
    const [vocabularies, setVocabularies] = useState([]);
    const [lessonData, setLessonData] = useState([]);

    useEffect(() => {
        // Fetch lessons
        fetch('https://japanese-learing-server.vercel.app/api/lessons')
            .then((res) => res.json())
            .then((data) => setLessons(data));

        fetch('https://japanese-learing-server.vercel.app/api/all-vocabulary')
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

    const handleDelete = async (id) => {
        const token = localStorage.getItem("authToken");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`https://japanese-learing-server.vercel.app/api/lessons/${id}`, {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Lesson has been deleted.",
                            icon: "success",
                        });

                        // Update the state to remove the deleted lesson
                        setLessons(lessons.filter((lesson) => lesson._id !== id));
                    }
                } catch (error) {
                    console.error("Error deleting lesson:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete the lesson. Please try again.",
                        icon: "error",
                    });
                }
            }
        });
    };

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
                                <th className="px-6 py-4 text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessonData.map((lesson) => (
                                <LessonCard key={lesson._id} lesson={lesson} handleDelete={handleDelete} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LessonManagement;

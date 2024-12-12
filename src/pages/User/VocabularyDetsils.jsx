import { useLoaderData, useLocation, Link, useNavigate } from "react-router-dom";
import { FcSpeaker } from "react-icons/fc";
import Confetti from 'react-confetti';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function VocabularyDetails() {
    const wordDetails = useLoaderData();
    const { state } = useLocation();
    const vocabulary = state?.vocabulary || [];
    const navigate = useNavigate();


    const currentIndex = vocabulary.findIndex(word => word._id === wordDetails._id);


    const prevWord = vocabulary[currentIndex - 1] || null;
    const nextWord = vocabulary[currentIndex + 1] || null;
    const [showConfetti, setShowConfetti] = useState(false);


    // Play pronunciation of the word
    const playPronunciation = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };


    useEffect(() => {
        if (nextWord === null) {
            setShowConfetti(true);
            toast.success("You have successfully completed the lesson.")
            setTimeout(() => {
                navigate('/user');
            }, 5000);
        }
    }, [nextWord, navigate]);



    return (
        <div className="container mx-auto px-4 py-10">
            {showConfetti && <Confetti />}

            <div className="p-6 bg-white shadow-md rounded-md border-l-4 border-[#5d5ced] flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        {wordDetails.word}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        <strong>Pronunciation:</strong> {wordDetails.pronunciation}{" "}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <strong>When to Say:</strong> {wordDetails.whenToSay}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Lesson Number:</strong> {wordDetails.lessonNo}
                    </p>
                </div>
                <button
                    onClick={() => playPronunciation(wordDetails.word)}
                    className="ml-2 text-[#5d5ced] font-semibold hover:underline text-6xl"
                >
                    <FcSpeaker />
                </button>
            </div>

            <div className="flex justify-between mt-6">
                {/* Previous Button */}
                {prevWord && (
                    <Link
                        to={`/user/vocabulary/${prevWord._id}`}
                        state={{ vocabulary }}
                        className="text-[#5d5ced] font-semibold hover:underline"
                    >
                        Previous
                    </Link>
                )}

                {/* Next Button */}
                {nextWord && (
                    <Link
                        to={`/user/vocabulary/${nextWord._id}`}
                        state={{ vocabulary }}
                        className="text-[#5d5ced] font-semibold hover:underline"
                    >
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}

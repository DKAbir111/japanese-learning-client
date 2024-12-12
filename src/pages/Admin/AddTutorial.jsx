import { useState } from 'react';
import { toast } from 'react-toastify';

const AddTutorial = () => {
    const [tutorialName, setTutorialName] = useState('');
    const [tutorialUrl, setTutorialUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation'
        if (!tutorialName || !tutorialUrl) {
            setMessage('Please fill in both fields.');
            return;
        }

        const tutorialData = { tutorialName, tutorialUrl };

        try {
            const response = await fetch('https://japanese-learing-server.vercel.app/api/tutorial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tutorialData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Tutorial added successfully!")
                setTutorialName('');
                setTutorialUrl('');
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            if (error) {
                toast.error("Failed to add tutorial")
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-20">
            <h2 className="text-xl font-bold mb-4 text-center">Add a New Tutorial</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="tutorialName" className="block text-sm font-semibold mb-2">
                        Tutorial Name
                    </label>
                    <input
                        type="text"
                        id="tutorialName"
                        value={tutorialName}
                        onChange={(e) => setTutorialName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter tutorial name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="tutorialUrl" className="block text-sm font-semibold mb-2">
                        Tutorial URL
                    </label>
                    <input
                        type="text"
                        id="tutorialUrl"
                        value={tutorialUrl}
                        onChange={(e) => setTutorialUrl(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter tutorial URL"
                    />
                </div>

                {message && <p className="text-center text-red-500 mb-4 text-sm">{message}</p>}

                <button
                    type="submit"
                    className="w-full py-2 bg-[#5d5ced] text-white font-semibold rounded-md"
                >
                    Add Tutorial
                </button>
            </form>
        </div>
    );
};

export default AddTutorial;

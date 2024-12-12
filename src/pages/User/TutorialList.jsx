import { useEffect, useState } from 'react';

const TutorialList = () => {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTutorials = async () => {
            try {
                const response = await fetch('https://japanese-learing-server.vercel.app/api/tutorials');
                const data = await response.json();

                if (response.ok) {
                    setTutorials(data);
                } else {
                    setError('Failed to fetch tutorials');
                }
            } catch (err) {
                if (err) {
                    setError('Error: Unable to fetch tutorials');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTutorials();
    }, []);

    if (loading) {
        return <div className="text-center text-lg text-gray-500">Loading tutorials...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-[#5d5ced] mb-6 text-center">Available Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial) => {
                    const youtubeEmbedUrl = tutorial.tutorialUrl.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0];
                    return (
                        <div
                            key={tutorial._id}
                            className="p-4 border border-gray-200 shadow-md rounded-lg bg-white hover:shadow-lg transition duration-200"
                        >
                            <div className="aspect-w-16 aspect-h-20">
                                <iframe
                                    className="w-full rounded-md"
                                    src={youtubeEmbedUrl}
                                    title={tutorial.tutorialName}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                                {tutorial.tutorialName}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TutorialList;

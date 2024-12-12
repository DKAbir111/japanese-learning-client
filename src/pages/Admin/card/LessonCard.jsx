import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function LessonCard({ lesson, handleDelete }) {
    return (
        <tr
            key={lesson.lessonNumber}
            className="hover:bg-[#5d5ced] hover:bg-opacity-15 transition-colors duration-200"
        >
            <td className="px-6 py-4 text-gray-700">{lesson.lessonName}</td>
            <td className="px-6 py-4 text-gray-700">{lesson.lessonNumber}</td>
            <td className="px-6 py-4 text-gray-700">{lesson.vocabCount}</td>
            <td className="py-2 px-4 flex space-x-2">
                <Link to={`/admin/lesson-update/${lesson._id}`}
                    className="btn bg-[#5d5ced] text-white"
                >
                    Edit
                </Link>
                <button onClick={() => handleDelete(lesson._id)}
                    className="btn btn-error text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

LessonCard.propTypes = {
    lesson: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
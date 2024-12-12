import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function VocabularyCard({ vocab, handleDelete }) {
    return (
        <tr className="hover:bg-gray-50">
            <td className="py-2 px-4">{vocab.word}</td>
            <td className="py-2 px-4">{vocab.meaning}</td>
            <td className="py-2 px-4">{vocab.pronunciation}</td>
            <td className="py-2 px-4">{vocab.whenToSay}</td>
            <td className="py-2 px-4">{vocab.lessonNo}</td>
            <td className="py-2 px-4 flex space-x-2">
                <Link to={`/admin/vocabulary-update/${vocab._id}`}
                    className="btn bg-[#5d5ced] text-white"
                >
                    Edit
                </Link>
                <button onClick={() => handleDelete(vocab._id)}
                    className="btn btn-error text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
VocabularyCard.propTypes = {
    vocab: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
import PropTypes from 'prop-types'
export default function DashBoardCard({ title, count, bgColor, icon }) {
    return (
        <div className={`card flex flex-col items-center p-6 rounded-lg shadow-lg ${bgColor} text-white`}>
            <div className="text-4xl mb-4">
                <span>{icon}</span>
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-3xl font-bold mt-2">{count}</p>
        </div>
    );
}

//prop-validation
DashBoardCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    bgColor: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
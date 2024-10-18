import PropTypes from "prop-types";

const ConfirmOrder = ({ total }) => {
    return (
        <div className="mt-6 text-right">
            <h2 className="text-xl font-bold sm:text-2xl">
                Total: PKR {total}
            </h2>
            <button
                className="px-4 py-2 mt-4 text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-600"
            >
                Confirm Order
            </button>
        </div>
    );
};

ConfirmOrder.propTypes = {
    total: PropTypes.number.isRequired,
};

export default ConfirmOrder;

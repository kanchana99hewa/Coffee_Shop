
import PropTypes from 'prop-types';
import { FaCoffee, FaLock, FaLeaf } from 'react-icons/fa6';

const ServiceCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4 text-5xl text-brown-500">{icon}</div> {/* Icon */}
    <h3 className="text-xl font-semibold">{title}</h3> {/* Title */}
    <p className="mt-2 text-gray-600">{description}</p> {/* Description */}
  </div>
);

// Add PropTypes validation
ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired, // 'node' can be any renderable content (JSX, string, etc.)
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ServiceSection = () => {
  return (
    <div className="py-10 bg-gray-50"> {/* Background and padding */}
      <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
        <ServiceCard
          icon={<FaCoffee />}
          title="Cup Of Coffee"
          description="Freshly Roasted Specialty Beans for your Home or Business"
        />
        <ServiceCard
          icon={<FaLock />}
          title="Safe Payment"
          description="Secure transactions for your Home or Business"
        />
        <ServiceCard
          icon={<FaLeaf />}
          title="Coffee Beans"
          description="Carefully sourced, Skillfully roasted, Freshly delivered today."
        />
      </div>
    </div>
  );
};

export default ServiceSection;

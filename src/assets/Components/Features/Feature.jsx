import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-1 items-center">
        <span>
          <FaCheck className="text-green-700" />
        </span>
        <span>{feature}</span>
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;

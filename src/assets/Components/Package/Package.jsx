import PropTypes from "prop-types";
import Feature from "../Features/Feature";

const Package = ({ packages }) => {
  //   console.log(packages);
  const { price, plan, features } = packages;
  return (
    <div className="border space-y-2 p-5 rounded-xl bg-slate-100">
      <h3>
        <span className="text-6xl font-black">${price}</span>
        <span className="text-xl">/month</span>
      </h3>
      <h3 className="text-4xl font-bold text-rose-400">{plan}</h3>
      <div>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn w-full bg-rose-400 text-white">Book Now</button>
    </div>
  );
};
Package.propTypes = {
  packages: PropTypes.object,
};
export default Package;

import PropTypes from "prop-types";

const NavLink = ({ link }) => {
  //   console.log(link);
  const { name, path } = link;
  return (
    <li className="hover:bg-sky-400 transition-all font-semibold ease-in-out">
      <a href={path}>{name}</a>
    </li>
  );
};
NavLink.propTypes = {
  link: PropTypes.object,
};
export default NavLink;

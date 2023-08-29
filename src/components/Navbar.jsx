import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="new">New</Link>
        </li>
        <li>
          <Link to="/">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { routes } from "../../config/routes";

import "./Header.css";
// const StyledAside = styled.aside`
//   display: flex;
//   justify-content: space-between;
//   border: none;
//   padding: 15px;
//   background-color: rgba(238, 174, 202, 1) 50%;
//   width: 15%;
//   height: 4vh;
//   position: sticky;
//   top: 0;
// `;

const Header = () => {
  return (
    <aside className="header">
      {routes.map((button) => (
        <Link key={button.path} to={button.path}>
          {button.name}
        </Link>
      ))}
    </aside>
  );
};
export default Header;

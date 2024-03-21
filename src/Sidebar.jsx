import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="">
      <nav className="p-3">
        <h3>Admin</h3>
        <ul className="list-unstyled">
          <li>
            <Button onClick={() => navigate("/books")}>Books</Button>
          </li>
          <li>
            <Button onClick={() => navigate("/authors")}>Authors</Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;

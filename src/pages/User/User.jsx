import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./User.css";

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="user">
      <h2 className="title">UserPage</h2>

      <div className="titles">
        <p onClick={() => navigate("")}>User Home Page</p>
        <p onClick={() => navigate("userProduct")}>User Product List</p>
      </div>
      <div>
      <span style={{marginRight:"1rem"}}><Link to="/">Home</Link></span>
      <span onClick={()=> navigate(-1)}>Back</span>
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default User;

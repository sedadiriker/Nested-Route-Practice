import { useNavigate,Link, Outlet } from "react-router-dom";
import "./Admin.css"

const Admin = () => {
  const navigate = useNavigate()
  return (
    <div className="admin">
      <h2 className="title">AdminPage</h2>
      <div className="titles">
        <p onClick={() => navigate("adminHome")}>Admin Home Page</p>
        <p onClick={() => navigate("")}>Admin Product List</p>
        <p onClick={() => navigate("adminAddProduct")}>Admin Add Product</p>
      </div>
      <div>
      <span style={{marginRight:"1rem"}}><Link to="/">Home</Link></span>
      <span onClick={()=> navigate(-1)}>Back</span>

      </div>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>

    
  );
};

export default Admin;

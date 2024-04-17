import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="btns">
      <button onClick={() => navigate("/user")}>User Login</button>
      <button onClick={() => navigate("/admin")}>Admin Login</button>    
      </div>
      <div className="back">
        <Link className="back-home" to={"/"}>Home</Link>
      </div>
    </div>
  )
}

export default Login

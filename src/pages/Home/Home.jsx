import { useNavigate } from "react-router"
import "./Home.css"
const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="home">
      <h3>Welcome</h3>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default Home

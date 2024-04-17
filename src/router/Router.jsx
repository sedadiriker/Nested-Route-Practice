import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import User from "../pages/User/User";
import Home from "../pages/Home/Home";
import UserHome from "../pages/User/UserHome";
import UserProduct from "../pages/User/UserProduct";
import AdminHome from "../pages/Admin/AdminHome";
import AdminProduct from "../pages/Admin/AdminProduct";
import AdminAddProduct from "../pages/Admin/AdminAddProduct";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />}>
            <Route index path="" element={<UserHome/>}/>
            <Route path="userProduct" element={<UserProduct/>}/>
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="adminHome" element={<AdminHome/>}/>
            <Route index path="" element={<AdminProduct/>}/>
            <Route path="adminAddProduct" element={<AdminAddProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

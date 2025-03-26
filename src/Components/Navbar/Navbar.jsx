import { Link, NavLink, Outlet } from "react-router-dom";
import register from "../../assets/register.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => console.log("User logged out successfully"))
    .catch(error => console.error(error))
  }
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm font-[Boldonse]">
            <div className="flex-1">
              <Link to='/' className="btn btn-ghost text-xl gap-0"> MyNote<span className="text-yellow-500">App</span></Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-500  font-bold' : 'font-bold')}><span className="mr-5">Home</span></NavLink>
                <NavLink to="/notes" className={({ isActive }) => (isActive ? 'text-yellow-500 font-bold' : 'font-bold')}><span className="mr-5">Notes</span></NavLink>
                {
                  user ? <div className="flex  items-center">
                    <Link to="/accounts"><img src={avatar} alt="" /></Link>
                    <button onClick={handleLogOut} className="btn btn-warning mx-4  btn-sm">Logout</button>
                  </div> : <NavLink to="/register" className={({ isActive }) => (isActive ? 'indicator font-bold' : 'font-bold')}>
                  <span className={({ isActive }) => (isActive ? 'indicator-item status status-error w-3 h-3' : 'indicator-item status status-error w-3 h-3')}></span>
                  <img src={register} className="w-[50px]" alt="" />
                </NavLink>
                }
                
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
    );
};

export default Navbar;

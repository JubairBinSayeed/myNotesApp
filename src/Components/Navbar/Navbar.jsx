import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm font-[Boldonse]">
            <div className="flex-1">
              <Link to='/' className="btn btn-ghost text-xl gap-0"> MyNotes<span className="text-yellow-500">App</span></Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-500  font-bold' : 'font-bold')}><span className="mr-5">Home</span></NavLink>
                <NavLink to="/notes" className={({ isActive }) => (isActive ? 'text-yellow-500 font-bold' : 'font-bold')}><span className="mr-5">Notes</span></NavLink>
                <NavLink to="/pinnednotes" className={({ isActive }) => (isActive ? 'text-yellow-500 font-bold' : 'font-bold')}><span className="mr-5">PinnedNotes</span></NavLink>
                <NavLink to="/register" className={({ isActive }) => (isActive ? 'text-yellow-500 font-bold' : 'font-bold')}><span className="mr-5">Register</span></NavLink>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
    );
};

export default Navbar;

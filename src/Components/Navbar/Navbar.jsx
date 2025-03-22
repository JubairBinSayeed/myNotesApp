import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm font-[Boldonse]">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl gap-0">MyNotes<span className="text-yellow-500">App</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <NavLink to="/"  className="mr-5">Home</NavLink>
      <NavLink to="/notes"  className="mr-5">Notes</NavLink>
      <NavLink to="/pinnednotes"  className="mr-5">PinnedNotes</NavLink>
      <NavLink to="/register"  className="mr-5">Register</NavLink>
    </ul>
  </div>
</div>
    <Outlet />
        </div>
    );
};

export default Navbar;
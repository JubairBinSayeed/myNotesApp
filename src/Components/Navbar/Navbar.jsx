

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl gap-0">MyNotes<span className="text-yellow-500">App</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className="mr-5">Notes</li>
      <li className="mr-5">PinnedNotes</li>
      <li className="mr-5">Register</li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;
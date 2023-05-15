const SideNavbar = ({ menu, setMenu }: any) => {
  return (
    <div className="flex flex-col justify-between">
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <img src="/images/logo.png" alt="logo" className="w-32"></img>
        </li>
        <li>
          <p className="text-xl font-medium">User Management</p>
          <button
            className="btn btn-primary text-white"
            onClick={() => setMenu(true)}
          >
            User Grid
          </button>

          <label
            htmlFor="my-modal-add"
            className="btn btn-primary mt-4 text-white "
          >
            Add User
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;

import React, { useState } from "react";
import EditUser from "./EditUser";
import { deleteUser } from "../apis/api";
import Notifications, { notify } from "react-notify-toast";
import { listUser } from "../apis/api";

// interface UserGridProps {
//   name: string;
//   email: string;
//   phone: string;
//   profile_image: string;
//   status: string;
//   id: number;
// }

const UserGrid = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await listUser();
      console.log(data);
      setUsers(data.data.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const data = await deleteUser(id);
      console.log(data);
      if (data.status === 200) {
        notify.show("User Deleted Successfully", "success", 3000);
      }
    } catch (error) {
      notify.show("Something went wrong!", "error", 3000);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-300">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profile Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <img
                  src={item.profile_image}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                ></img>
              </td>
              <td>{item.status}</td>
              <td>
                <div className="flex justify-between">
                  <label
                    htmlFor="my-modal-edit"
                    className="btn btn-outline btn-accent "
                  >
                    Edit
                  </label>
                  <EditUser item={item} />

                  <button
                    className="btn btn-outline btn-accent ml-3"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Notifications />
    </div>
  );
};

export default UserGrid;

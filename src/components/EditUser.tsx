import React, { useState } from "react";
import Notifications, { notify } from "react-notify-toast";
import { updateUser } from "../apis/api";

interface EditUserProps {
  name: string;
  email: string;
  phone: string;
  profile_image: string;
  status: string;
  id: number;
}

const EditUser = ({ item }: { item: EditUserProps }) => {
  const [formData, setFormData] = useState({
    updateName: item.name,
    updateEmail: item.email,
    updatePhone: item.phone,
    updateProfileImage: item.profile_image,
    updateStatus: item.status,
  });

  const {
    updateName,
    updateEmail,
    updatePhone,
    updateProfileImage,
    updateStatus,
  } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(formData, "formData");
      const data = await updateUser(item.id, formData);
      console.log(data, "data");
      if (data.status === 200) {
        notify.show("User Updated Successfully", "success", 3000);
      }
    } catch (error) {
      notify.show("Something went wrong!", "error", 3000);
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-edit" className="modal-toggle" />

      <div className="modal" id="my-modal-edit">
        <div className="modal-box">
          <p className="modal-box-title">Edit User</p>
          <label
            htmlFor="my-modal-edit"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              onChange={(e) => handleChange(e)}
              value={updateName}
              name="updateName"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
              onChange={(e) => handleChange(e)}
              value={updateEmail}
              name="updateEmail"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered"
              onChange={(e) => handleChange(e)}
              value={updatePhone}
              name="updatePhone"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Image</span>
            </label>
            <input
              type="text"
              placeholder="Profile Image"
              className="input input-bordered"
              onChange={(e) => handleChange(e)}
              value={updateProfileImage}
              name="updateProfileImage"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              placeholder="Status"
              className="input input-bordered"
              onChange={(e) => handleChange(e)}
              value={updateStatus}
              name="updateStatus"
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-edit"
              className="btn"
              onClick={handleSubmit}
            >
              Update
            </label>
          </div>
        </div>
        <Notifications options={{ zIndex: 200, top: "20px" }} />
      </div>
    </>
  );
};

export default EditUser;

import React from "react";
import { createUser } from "../apis/api";
import { notify } from "react-notify-toast";

interface AddUserProps {
  name: string;
  email: string;
  phone: string;
  profile_image: string;
  status: string;
}

const AddUser = () => {
  const [formData, setFormData] = React.useState<AddUserProps>({
    name: "",
    email: "",
    phone: "",
    profile_image: "",
    status: "",
  });

  const { name, email, phone, profile_image, status } = formData;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(formData, "formData");
      const data = await createUser(formData);
      console.log(data, "data");
      if (data.status === 201) {
        notify.show("User Added Successfully", "success", 3000);
      }
    } catch (error) {
      notify.show("Something went wrong!", "error", 3000);
    }
  };
  return (
    <>
      <input type="checkbox" id="my-modal-add" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <p className="modal-box-title">Add User</p>
          <label
            htmlFor="my-modal-add"
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
              value={name}
              name="name"
            />

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                value={email}
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile No.</span>
              </label>
              <input
                type="text"
                placeholder="Mobile No."
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                value={phone}
                name="phone"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                placeholder="Profile Image"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                value={profile_image}
                name="profile_image"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select className="select select-bordered select-info w-full max-w-xs">
                <option value={status} onChange={(e) => handleChange}>
                  Select Status
                </option>
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div className="modal-action">
              <label
                htmlFor="my-modal-add"
                className="btn"
                onClick={handleSubmit}
              >
                Add
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;

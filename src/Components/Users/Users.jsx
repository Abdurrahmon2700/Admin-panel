import React from "react";

function Users(props) {
  return (
    <div>
      <h1 className="text-center">Users</h1>
      <div className="form-control">
        <input
          className="form-control mb-2"
          type="text"
          name=""
          id=""
          placeholder="User name"
        />
        <input
          className="form-control mb-2"
          type="text"
          name=""
          id=""
          placeholder="Last name"
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder="User phone number"
        />
        <input className="form-control mb-2" type="password" name="" id="" />
        <div className="d-flex justify-content-end">
          <button className="btn">Done</button>
        </div>
      </div>
    </div>
  );
}

export default Users;

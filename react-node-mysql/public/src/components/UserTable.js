import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserTable = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUser(res.data);
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUser();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="field mt-3">
          <Link to={`add`} className="button is-primary">
            Add User
          </Link>
        </div>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-responsive is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-responsive is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

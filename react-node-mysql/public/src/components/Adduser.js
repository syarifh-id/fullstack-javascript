import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name :</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email :</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div
            className="control "
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <label className="radio">
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label className="radio">
              <input type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <div className="field mt-3">
            <button className="button is-normal is-primary" type="submit">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adduser;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserByID();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const getUserByID = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setName(res.data.name);
    setEmail(res.data.email);
    setGender(res.data.gender);
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
            <button className="button is-normal is-warning" type="submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

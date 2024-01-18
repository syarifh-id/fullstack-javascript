import User from "../models/userModels.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};
export const addUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.status(201).json({ msg: "user added" });
  } catch (err) {
    console.log(err.message);
  }
};
export const updateUser = async (req, res) => {
  try {
    const response = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "user updated" });
  } catch (err) {
    console.log(err.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const response = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "user Deleted" });
  } catch (err) {
    console.log(err.message);
  }
};

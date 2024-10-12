import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = `http://localhost:3005`;

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + `/users`);
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + `/users/` + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users/`, newUser);
    console.log(response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    const repsone = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(response.data);
  };

  const deleteUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(1);
    // const newUser = {
    //   usernName: "Test",
    //   password: "Test",
    // };
    // createUser(newUser);
    // updateUser("9e98", {
    //   userName: "Yakup",
    //   password: "YakupPass",
    // });
    deleteUserById("9e98");
  }, []);

  return <></>;
}

export default App;

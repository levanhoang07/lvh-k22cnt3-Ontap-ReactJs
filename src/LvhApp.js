import React, { useState, useEffect } from 'react';
import './App.css';
import LvhListUsers from './components/LvhListUsers';
import axios from './api/lvhApi';

function LvhApp() {
  const [lvhListUsers, setLvhUsers] = useState([]); // typo: userState -> useState
  // Đọc dữ liệu từ API
  const lvhGetAllUsers = async () => {
    const lvhResponse = await axios.get("lvhUsers");
    setLvhUsers(lvhResponse.data); // typo: setUsers -> setLvhUsers
    console.log("Api Data:", lvhResponse.data);
  }

  useEffect(() => {
    lvhGetAllUsers();
    console.log("State Data:", lvhListUsers);
  }, []);

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      <LvhListUsers renderLvhListUsers={lvhListUsers} />
    </div>
  );
}

export default LvhApp;
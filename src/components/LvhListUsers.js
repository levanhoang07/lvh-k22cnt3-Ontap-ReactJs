import React from 'react';

export default function LvhListUsers({ renderLvhListUsers }) {
  console.log("LvhListUsers:", renderLvhListUsers);

  // Hiển thị dữ liệu
  const lvhElemenUsers = renderLvhListUsers.map((lvhUser, index) => (
    <tr key={lvhUser.id}>
      <td>{lvhUser.id}</td>
      <td>{lvhUser.UserName}</td>
      <td>{lvhUser.Password}</td>
      <td>{lvhUser.Email}</td>
      <td>{lvhUser.Phone}</td>
      <td>...</td>
    </tr>
  ));

  return (
    <div className='row'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {lvhElemenUsers}
        </tbody>
      </table>
    </div>
  );
}
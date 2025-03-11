import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="user-form">
      <h2>Форма користувача</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Прізвище"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="groupCode"
          placeholder="Код групи"
          value={formData.groupCode}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleChange}
        />
      </form>

      <div className="form-output">
        <h3>Введені дані:</h3>
        <ul>
          <li><strong>Ім'я:</strong> {formData.name}</li>
          <li><strong>Прізвище:</strong> {formData.surname}</li>
          <li><strong>Код групи:</strong> {formData.groupCode}</li>
          <li><strong>Електронна пошта:</strong> {formData.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserForm;

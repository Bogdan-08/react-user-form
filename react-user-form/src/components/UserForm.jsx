import { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="user-form-container">
      <h2>Форма користувача</h2>
      <form className="user-form">
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

      <div className="output">
        <h3>Введені дані:</h3>
        <ul>
          <li>Ім'я: {formData.name}</li>
          <li>Прізвище: {formData.surname}</li>
          <li>Код групи: {formData.groupCode}</li>
          <li>Електронна пошта: {formData.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserForm;

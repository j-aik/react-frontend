import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

interface FormData {
  username: string;
  email: string;
  password: string;
  about: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [editedItem, setEditedItem] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    about: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedItem((prev: Partial<FormData>) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveEdit = (editedItem: FormData) => {
    fetch(`http://127.0.0.1:8000/api/user_register/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Update successful:', data);
        setEditedItem({
          username: '',
          email: '',
          password: '',
          about: '',
        });
        navigate('/Login');
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Welcome to Registration</h1>
        <p className="register-subtitle">Please fill out the form to create an account</p>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Your Full Name"
            value={editedItem.username || ''}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={editedItem.email || ''}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={editedItem.password || ''}
            onChange={handleChange}
            className="form-input"
          />
          <button
            onClick={() => saveEdit(editedItem as FormData)}
            className="register-button"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

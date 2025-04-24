import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the custom CSS

interface FormData {
  username: string;
  email: string;
  password: string;
  about: string;
}

const Login: React.FC = () => {
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
    fetch(`http://127.0.0.1:8000/api/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedItem),
    })
      .then((res) => res.json())
      .then((data) => {
  // Check if the backend returns the tokens correctly
  if (data.access && data.refresh) {
    console.log('Login successful:', data);
    if (data.access && data.refresh) {
    console.log('Login successful:', data);

    try {
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
    } catch (error) {
      console.error('Error saving tokens to localStorage:', error);
      alert('An error occurred while storing your login data. You may experience issues.');
    }


    setEditedItem({
      username: '',
      email: '',
      password: '',
      about: '',
    });


    navigate('/Userpage');
  } else {
    console.error('Login failed:', data);
    alert('Invalid credentials, please try again.');
  }
  } else {
    // Handle login failure (invalid credentials, etc.)
    console.error('Login failed:', data);
    alert('Invalid credentials, please try again.');
  }
})
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN PAGE</h1>
        <p className="login-subtitle">
          THIS PAGE IS FOR AUTHENTICATION OF THE USER
        </p>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Type your username..."
            value={editedItem.username || ''}
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Type your email..."
            value={editedItem.email || ''}
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Type your password..."
            value={editedItem.password || ''}
            onChange={handleChange}
            className="login-input"
          />
          <button onClick={() => saveEdit(editedItem as FormData)} className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

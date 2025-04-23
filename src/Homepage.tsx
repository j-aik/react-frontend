import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  username: string;
  email: string;
  password: string;
  about: string;
}


const Homepage: React.FC = () => {
   const navigate = useNavigate();
   const [editedItem, setEditedItem] = useState<Partial<FormData>>({});
   const [formData, setFormData] = useState<FormData>({
  username: '',
  email: '',
  password: '',
  about: '',
   });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setEditedItem((prev:Partial<FormData>) => ({
    ...prev,
    [name]: value,
  }));
};


   const saveEdit = (editedItem:FormData) => {
    fetch(`http://127.0.0.1:8000/api/user_register/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedItem),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Update successful:', data);
        setEditedItem({
        username: '',
        email: '',
        password: '',
        about: '',
      });
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };


   return (
    <div style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p>Welcome to the About page! Here you can learn more about our project and team.</p>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate('/Register')}
      >
        Go to Register Page
      </button>
       <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate('/login')}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Homepage;
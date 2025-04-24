import React, { useEffect, useState } from 'react';



const Userpage: React.FC = () => {
  const userName = "User";
//   const [items, setItems] = useState<Item[]>([]);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Render welcome block
  const renderWelcomeBlock = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {userName}!
        </h1>
        <p className="text-gray-600">We're glad to have you back.</p>
      </div>
    </div>
  );

  // Fetch saved images
//   useEffect(() => {
//     const token = localStorage.getItem('accessToken'); // Or sessionStorage.getItem(...)
//
//     fetch('http://127.0.0.1:8000/api/saved_picture_view/', {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Unauthorized or other error');
//         }
//         return res.json();
//       })
//       .then((data: Item[]) => {
//         console.log(data);
//         setItems(data);
//       })
//       .catch((err) => {
//         console.error('Error fetching items:', err);
//       });
//   }, []);
//
//   // Handle image selection
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };
//
//   // Handle form submission
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Prevent the default form submission
//
//     if (!selectedImage) return; // Make sure an image is selected before submitting
//
//     const formData = new FormData();
//     formData.append("image", selectedImage); // selectedImage should be a File object from input
//
//     fetch("http://127.0.0.1:8000/api/saved_picture_view/", {
//       method: "POST",
//       body: formData,
//       headers: {
//         "Authorization": "Bearer " + localStorage.getItem("accessToken"),
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         // Optionally, refresh the images or reset the form
//         setItems((prevItems) => [...prevItems, data]); // Add newly uploaded image to the list
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

  return (
     <>
    {renderWelcomeBlock()}
    <div>
      <h2>Upload Image</h2>
      <form>
        <button type="submit">Upload</button>
      </form>
    </div>
  </>
  );
};

export default Userpage;

import React, { useState, useEffect } from 'react';
import defaultImg from '../imgs/carnival.jpg'
export default function Testblog() {

  let [blogPosts, setBlogPosts] = useState([]);
  let [user, setUser] = useState(null)
  let [token, setToken] = useState(null)
  let [logged_in, setLogged_in] = useState(false)
  let [error, setError] = useState('')
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', user.id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', event.target.image.files[0]);

    try {
      const response = await fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload blog post')
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
    (async function fetchUser(){
      try{
        const token = localStorage.getItem('token')

        if(token){
          const response = await fetch('http://localhost:3001/user',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
          })
          setLogged_in(true)
          const data = await response.json();
          setUser(data.user);
          // console.log(`Found user ${data.user.name}`)
        }
      }catch(error){
        console.error(error)
      }
    })();
    
    
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogposts");
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the data.");
        }
        const data = await response.json();
        setBlogPosts(data.blogposts); // Fix - use array of blog posts received from the API.
      } catch (error) {
        setError(error.message);
      }
    };

    
    fetchPosts();
  }, []);
  
  if (error) {
    alert(error)
  }
  return (
    <div className="blog-container">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Description:</label>
          <textarea
            id="body"
            name="body"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}
          />
          {image && <img src={image} alt="Uploaded Image" />}
        </div>

        <button type="submit">Submit</button>
      </form>

      {blogPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={defaultImg} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import defaultImg from '../imgs/carnival.jpg'

export default function Testblog() {

  let [blogPosts, setBlogPosts] = useState([]);
  let [user, setUser] = useState(null)
  let [all_users, setAllUsers] = useState([])
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

    console.log(`Submitting, ID: ${user.id} \nTitle: ${title} \nDescription: ${description} \nImage: ${event.target.image.files[0]}`)
    try {
      const response = await fetch('http://localhost:3003/testblogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload blog post')
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Catching error:\n" + error);
    }
  };

  useEffect(() => {
    
    (async function fetchCurrentUser(){
      try{
        const token = localStorage.getItem('token')

        if(token){
          const response = await fetch('http://localhost:3003/user',{
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
    
    (async function fetchAllUsers(){
      try{

          const response = await fetch('http://localhost:3003/all_users',{
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
          })
          const data = await response.json();
          setAllUsers(data.user);
          // console.log(`Found user ${data.user.name}`)
      }catch(error){
        console.error(error)
      }
    })();
    
    (async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3003/blogposts-with-users");
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the data.");
        }
        const data = await response.json();
        setBlogPosts(data.blogposts); // Fix - use array of blog posts received from the API.
      } catch (error) {
        setError(error.message);
      }
    })();

  }, [token]);
  
  if (error) {
    alert(error)
  }
  return (
    <div className="blog-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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

      {blogPosts && blogPosts.length > 0 && all_users ? (
  blogPosts.map((post, index) => {
    const currentUser = all_users.filter((user) => user.id === post.user_id)[0];
    console.log(post.image);
    console.log(currentUser)
    
    return(
      <div key={post.id} className="display">
        <h1>{currentUser.name}</h1>
        <p>{post.description}</p>
        <img src={`http://localhost:3003/Images/${post.image}`} alt={post.image} />
      </div>
    )
  })
) : (
  <h1>Loading please wait...</h1>
)}

           
       
       
    </div>
  );
}

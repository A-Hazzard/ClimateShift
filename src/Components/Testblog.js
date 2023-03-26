import React, { useState, useEffect } from 'react';

export default function Testblog() {

  let [blogTitle, setBlogTitle] = useState('');
  let [blogDescription, setBlogDescription] = useState('');
  let [blogImage, setBlogImage] = useState('');
  let [blogDateCreated, setDateCreated] = useState('');
  let [blogPosts, setBlogPosts] = useState('');
  let [user, setUser] = useState(null)
  let [token, setToken] = useState(null)
  let [logged_in, setLogged_in] = useState(false)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=>{
    (async function fetchUser(){
      try{
        const token = localStorage.getItem('token')

        if(token){
          const response = await fetch('http://localhost:3001/user',{
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 
            credentials: 'include',
        }
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

    (async function fetchBlogs(){
        try{
            const response = await fetch('http://localhost:3001/blogposts', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
            });

            const data = await response.json()

          if (response.ok) {
              data.blogposts.forEach((row) => {
                setBlogTitle(row.title);
                setBlogDescription(row.description);
                setDateCreated(row.created_at);
              });

              setBlogPosts(data.blogposts)
          } else {
              console.log(data.error);
          }
          
            // console.log(`Found user ${data.user.name}`)
        } catch(error) {
            console.error(error);
        }
    })();
    
    
  },[])


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ title, description , image ,'user_id': user.id })
     
    })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // assuming the API returns the created blog object

      if(response.ok){
        alert(data.message)
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="blog-container">
      <form onSubmit={handleSubmit}>
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


      {
        Object.values(blogPosts).map(blog => (
          <div className="blog-wrapper">
            <p className="title">{blog.title}</p>
            <p className="description">{blog.description}</p>
            <p className="image">{blog.image}</p>
          </div>
        ))
      }
      
    </div>
  );
}
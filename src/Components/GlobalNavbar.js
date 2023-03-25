import '../css/globalnavbar.css'
import logo from '../imgs/atz.jpg'

import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function GlobalNavbar() {

  const [logged_in, setLogged_in] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

   useEffect(()=>{
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
  },[])
  
  

  function handlelogOut() {
    fetch('http://localhost:3001/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        localStorage.clear();
        // window.location.href = '/';
        navigate('/')
      } else {
        response.json().then(error => console.log(error));
      }
    })
    .catch(error => console.log(error));
  };
  

  return (
    <div className="nav">
    {logged_in ? (
      <nav className="logged_in-navbar">
        <img src={logo} className = "logo" alt = "logo" onClick={()=> window.location.href = "/"}/>
            
            <ul className="nav nav-tabs">

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                    <i className="fa-solid fa-circle active-status"></i>
                      {user ? (
                          user.name
                      ): null}
                </Link>
                  <ul className="dropdown-menu">
                   
                    <li><Link className="dropdown-item" onClick={handlelogOut}>Logout</Link></li>
                  </ul>
                </li>
               
                    <li className="nav-item"><Link className="nav-link" to={'/about'}>About</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li> 
                        <li className="nav-item"><Link className="nav-link" to={'/storyboard'}>StoryBoard</Link>
                        </li>
                
              </ul>
        </nav>

        ) : (

          <nav className="logged_out-navbar">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/members/signup">Login/Signup</Link></li>
            </ul>
          </nav>

          

    )}
    </div>
    
   
  );
}

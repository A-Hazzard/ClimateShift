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
    <header className='home-header'>
                    <div className="navbar">
                    <div className="logo">
                        <img src="#" />
                    </div>
                       
                    {logged_in ? (

                       <ul className="nav">

                       {window.location.pathname !== '/' ? 
                      (
                        <li className="item">
                           <Link to="/">Home</Link>
                         </li>
                      ):null}

                      {window.location.pathname !== '/storyboard' ? 
                      (
                        <li className="item">
                           <Link to="/storyboard">StoryBoard</Link>
                         </li>
                         ):null}
                     
                       

                         <li className="item">
                           <Link to="/community">Community</Link>
                         </li>
                         </ul>
                      ): (
                        <ul className="nav">
                          {window.location.pathname !== '/' ? 
                            (
                              <li className="item">
                                <Link to="/">Home</Link>
                              </li>
                            ):null}
                      

                         <li className="item">
                           <Link to="/posts">Community</Link>
                         </li>
                         <li className="item">
                           <button className= "login"><Link to="/members/login">Login</Link></button>
                         </li>
                       
                         <li className="item">
                           <button className="sign-up"><Link to="/members/signup">Sign Up Free</Link></button>
                         </li>
                       </ul>
                      )}
            
                    
                    </div>
                </header>
                <hr />
    </div>
    
   
  );
}

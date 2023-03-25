import '../../css/members/members.css'
import GlobalNavbar from '../GlobalNavbar'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Signup(){

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem('token')

        if (storedToken) {
          console.log('Found Token, user is logged in')
          setToken(storedToken)
          setLoggedIn(true)
          navigate('/members/profile')
        }else{
          console.log('Rendered. Token not found, user not logged in')
        }

        if (loggedIn) navigate('/about')
        
    }, [loggedIn, navigate])

  const handleSignup = async event => {
    //Prevents the page from reloading
     event.preventDefault();

    // Check for valid input
    if (!username) return alert('Username required')
  
    if (!password1 || !password2) return alert('Password required')
    
    if(password2 !== password1) return alert('Passwords do not match')
    
    if (!email) return alert('Email required');
    
    // Insert user into database
    try{
        const response = await fetch('http://localhost:3001/signup', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password1, password2})
        })
        let data = await response.json()

        if(response.ok){
          console.log(data.message);
          // window.location.href = `/members/login?message=${encodeURIComponent(data.message)}`;
          localStorage.setItem('token', data.token);
          navigate('/members/profile')
        }
        else{
          setError(data.error);
          console.log("Front End \n" + error)
        }
      }
      catch{
            setError('An error occurred, please try again')
            console.log(error)
      }
    
      
  }

  return (
    <main className="signup-main-container">
      <GlobalNavbar />
      <form className="signupForm" onSubmit={handleSignup}>
      
      {error ? (
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong><i className="fa-solid fa-triangle-exclamation"></i>{error}</strong>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div> 
        ) : null
      }

      

        <h1 className="signup-header">Sign up</h1>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control inputs" id="username" name="username" placeholder="John Doe"
            onChange={(event) => setUsername(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control inputs" id="email" name="email" placeholder="example@example.com"
            onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="password1" className="form-label">Password</label>
          <input type="password" className="form-control inputs" id="password1" name="password1" placeholder="********"
             onChange={(event) => setPassword1(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control inputs" id="password2" name="password2" placeholder="********"
             onChange={(event) => setPassword2(event.target.value)} />
        </div>

        <div className="col-12">
          <p>Already a member?
            <Link to='/members/login'>Login</Link>
          </p>
        </div>

        <div className="col-12">
          <button className="btn btn-primary submit-btn" type="submit">Sign up</button>
        </div>

      </form>
    </main>
  )
}


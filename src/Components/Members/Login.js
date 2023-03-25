import '../../css/members/members.css'
import GlobalNavbar from '../GlobalNavbar'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function Login(props){

  const location = useLocation()
  const navigate = useNavigate();

  const [message, setMessage] = useState(new URLSearchParams(location.search).get('message'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [is_Staff, setIs_Staff] = useState('');
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setLoggedIn(true);
      navigate('/members/profile');
    }
  }, [loggedIn, navigate]);


  //This function is called when the submit button is clicked
  const handleSubmit = async event =>{
  
      //Prevent form from submitting and refreshing the page
      event.preventDefault();
  
      //checks for valid input
      if (!password && !email) return alert('Enter your Email and Password')
      if (!email) return alert('Email required');
      if (!password) return alert('Password required');
  
      try{
            //Send user authentication data to the server
            const response = await fetch('http://localhost:3001/login',{
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({ email, password, is_Staff }),
            });
  
            //Extract the response data
            const data = await response.json();
            
  
            //Handle successful login and redirect user to profile page
            if(response.ok){
              if(is_Staff){
                setMessage(`${data.user.name} Logged in Successfully.`);
                navigate('/admin');
              } 
              else{
              //Store the user's authentication token in local storage
               localStorage.setItem('token', data.token);
                setLoggedIn(true);
                setMessage(`${data.user.name} Logged in Successfully.`);
                navigate('/members/profile');
              // window.location.href = "/";
              }
            }else setMessage(data.error)
            
          }catch(error){
            //Handle server request errors and display error message
            setMessage("An error occurred while requesting the server")
            console.log(`ERROR FETCHING SERVER:\n ${error}`);
          }
  }//end handleSubmit

    return(
      <main className = "login-main-container">
    
        <GlobalNavbar/>

          <form className="loginForm">
          
          {message ? (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>
                      <i className="fa-solid fa-triangle-exclamation"></i>
                      {message}
                  </strong>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div> 
          ) : null
          }
                




          <h1>Login</h1>
          {/* {% csrf_token %} */}

          <div className="mb-3">
            <label for="email" className="form-label">Email:</label>
            <input type="email" className="form-control inputs" id="email" name = "email" placeholder="example@example.com"
              value={email} onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control inputs" id="password" name = "password" placeholder="********"
              value={password} onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div className="col-12">
            <p>Need an Account?
              <Link to='/members/signup'>Signup</Link>
            </p>
          </div>

          <div className="col-12">
            <button className="btn btn-primary submit-btn" type="submit" onClick={handleSubmit}>Login</button>
          </div>


        </form> {/* End Form */}
    </main> //  End Login Container 

)}  // End stateless function component
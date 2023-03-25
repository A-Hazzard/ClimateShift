
import {Link, useNavigate} from 'react-router-dom'

export default function GlobalNavbar() {

  const navigate = useNavigate();
  //This logout function only works when the user is logged in
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
    {/* THIS IS COMMENTED OUT UNTIL THE LOGIN SYSTEM WORKS
    {logged_in ? (
      <nav class="logged_in-navbar">
        <img src={Logo} className = "logo" alt = "logo" onClick={()=> window.location.href = "/"}/>
            
            <ul class="nav nav-tabs">

                <li class="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                    <i class="fa-solid fa-circle active-status"></i>
                      {user ? (
                          user.name
                      ): null}
                </Link>
                  <ul class="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/createjob'}>Create job</Link></li>
                    {window.location.pathname !== "/members/profile" ? (
                      <li><Link className="dropdown-item" to={'/members/profile'}>Profile</Link></li>
                    ) : null
                    }
                    <li><Link className="dropdown-item" to={'/admin'}>Admin</Link></li>
                    <li><Link class="dropdown-item" onClick={handlelogOut}>Logout</Link></li>
                  </ul>
                </li>
                    
                <li class="nav-item"><Link className = "nav-link" to={'/jobs/search'}>Search</Link>
                    </li>
                    <li class="nav-item"><Link className="nav-link" to={'/about'}>About</Link>
                    </li>
                        <li class="nav-item"><Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>
                
              </ul>
        </nav>

        ) : (
*/}

{/* THIS NAVBAR IS DISPLAYED WHEN THE USER IS NOT LOGGED IN */}
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

          

    {/*)}*/}
    </div>
    
   
  );
}

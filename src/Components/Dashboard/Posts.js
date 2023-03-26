import '../../css/dashboard/new.css'
import Avatar from '../../imgs/avatar.jpg'
import Carnival from '../../imgs/carnival.jpg'

export default function Posts(){
    return(
        <div className="posts">
               <nav className="navbar">
                    <a href="#" className="logo">ATZ</a>
                    <div className="search-bar">
                    <input type="text" placeholder="Search..." /><i className="fa fa-search"></i>
                    <button type="submit" className="searchbtn">Search</button>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#"><i className="fa fa-home"></i></a></li>
                        <li><a href="#"><i className="fa fa-user"></i></a></li>
                        <li><a href="#"><i className="fa fa-bell"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                </nav>

                {/* Side Nav- */}
                <div id="sidebar-wrapper">

                <div className="account">
                    <img src = "/images/users.png" width = "70" height = "70" />
                    <h3>Tyler Bhagwandeen</h3>
                    <p>Welcome Back Mr. Bhagwandeen!</p>
                </div>

                <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                    <li className="active">
                    <a href="admin-home.html"><span className="fa-stack fa-lg pull-left"><i className="fa fa-home"></i></span> Home Page</a>
                    </li>
                    <li>
                    <ul className="nav-pills nav-stacked" style={{ listStyleType: "none" }}>
                    </ul>
                    </li>
                    <li>
                    <a href="admin-product.html"><span className="fa-stack fa-lg pull-left"><i className="fa-solid fa-user-group"></i></span>Friends</a>
                    <i className="fa-solid fa-chevron-down" style={{"fontSize": "10px"}}></i>
                    </li>
                    <li>
                    <a href="calender.html"> <span className="fa-stack fa-lg pull-left"><i className="fa-solid fa-clock"></i></span>Most Recent </a>
                    </li>
                    <li>
                    <a href="mailbox.html"><span className="fa-stack fa-lg pull-left"><i className="fa-solid fa-people-group"></i></span>Groups<i className="fa-solid fa-chevron-down" style={{"fontSize":"10px"}}></i></a>
                    </li>
                    <li>
                    <a href="settings.html">
                    <span className="fa-stack fa-lg pull-left"><i className="fa-solid fa-gear"></i></span>
                    Settings
                    <i className="fa-solid fa-chevron-down" style={{ fontSize: "10px" }}></i>
                    </a>
                    </li>
                    <li>

                    <br/><br/><br/><br/>
                    <a href="/home.html"><span className="fa-stack fa-lg pull-left"><i className="fa-solid fa-right-from-bracket"></i></span>Log out</a>
                </li>
                </ul>

                </div>

                {/* Dropdown */}
                <div className="dropdown">
                    <div className="dropdown-header">
                    <span>What's on your mind?</span>
                    <i className="fa-solid fa-image"></i>
                    <i className="fa-solid fa-video"></i>
                    <i className="fas fa-caret-down"></i>
                    </div>
                    <div className="dropdown-content">
                    <form>
                        <div>
                            <textarea placeholder="Type your message here" />
                        </div>        
                        <button type="submit">Post</button>
                    </form>
                    <i className="fas fa-caret-down"></i>
                    </div>
                </div><br/><br/>
                {/* End of dropdown */}

                {/* TABS */}
                <div className="tabbuttons">
                    <div className="tabs">
                        <button className="tab-btn active" data-tab="all">All</button>
                        <button className="tab-btn" data-tab="parts">Events</button>
                        <button className="tab-btn" data-tab="machines">Culinary</button>
                    </div>
                </div>  

                
                {/* ALL */}
                <div id="all-tab" className="tab-content active">   
                    <section className="post section-1">
                    <div className="post-header">
                        <img src={Avatar} alt="user profile picture"/>
                        <div className="post-info">
                        <h2>kevin_r868</h2>
                        <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>Carnival 2K23!! </p>
                        <img src={Carnival} alt="post image"/>
                    </div>
                    <div className="post-actions">
                        {/* <a className="like-btn" href="#">
                            <i className="fa fa-heart"></i> Like
                        </a> */}
                        <button id="like-button" className="like-button">
                            <i className="fa fa-heart"></i>
                            <span className="like-count">100</span>
                        </button>
                        
                        <button><i className="fa fa-comment"></i> Comment</button>
                        <button><i className="fa fa-share"></i> Share</button>
                    </div>
                    </section>
                    <section className="post section-2">
                    <div className="post-header">
                        <img src="https://via.placeholder.com/50x50" alt="user profile picture"/>
                        <div className="post-info">
                        <h2>Username</h2>
                        <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>So loving this new Bunji tune!! <a href=""> #iaintcomeherefornostandup</a> !!</p>
                    </div>
                    <div className="post-actions">
                        <a className="like-btn" href="#">
                            <i className="fa fa-heart"></i> Like
                        </a>
                        <button><i className="fa fa-comment"></i> Comment</button>
                        <button><i className="fa fa-share"></i> Share</button>
                    </div>
                    </section>
                    <section className="post section-3">
                        <div className="post-header">
                        <img src={Avatar} alt="post image"/>
                        <div className="post-info">
                            <h2>kevin_r868</h2>
                            <p>2 hours ago</p>
                        </div>
                        </div>
                        <div className="post-content">
                        <p>Carnival 2K23!! </p>
                        <img src={Carnival} alt="post image"/>
                        </div>
                        <div className="post-actions">
                            <a className="like-btn" href="#">
                                <i className="fa fa-heart"></i> Like
                            </a>
                        <button><i className="fa fa-comment"></i> Comment</button>
                        <button><i className="fa fa-share"></i> Share</button>
                        </div>
                    </section>
                    <section className="post section-3">
                        <div className="post-header">
                        <img src={Avatar} alt="post image"/>
                        <div className="post-info">
                            <h2>kevin_r868</h2>
                            <p>2 hours ago</p>
                        </div>
                        </div>
                        <div className="post-content">
                        <p>Carnival 2K23!! </p>
                        <img src={Carnival} alt="post image"/>
                        </div>
                        <div className="post-actions">
                            <a className="like-btn" href="#">
                                <i className="fa fa-heart"></i> Like
                            </a>
                        <button><i className="fa fa-comment"></i> Comment</button>
                        <button><i className="fa fa-share"></i> Share</button>
                        </div>
                    </section>
                </div>


                <div id="parts-tab" className="tab-content">
                    <section className="post">
                        <div className="post-header">
                        <img src="images/avatar2.jpg" alt="user profile picture"/>
                        <div className="post-info">
                            <h2>ricardoconstantine</h2>
                            <p>5 hours ago</p>
                        </div>
                        </div>
                        <div className="post-content">
                        <p>Machel with the gals! #likeyuhself"</p>
                        <img src="../../../imgs/girlsnight.jpg" alt="post image"/>
                        </div>
                        <div className="post-actions">
                            <a className="like-btn" href="#">
                                <i className="fa fa-heart"></i> Like
                            </a>
                        <button><i className="fa fa-comment"></i> Comment</button>
                        <button><i className="fa fa-share"></i> Share</button>
                        </div>
                    </section>
                </div>

                {/* Culinary */}
                <div id="machines-tab" className="tab-content">
                    <section className="post">
                        <div className="post-header">
                            <img src="../../../imgs/avatar2.jpg" alt="user profile picture"/>
                            <div className="post-info">
                            <h2>ricardoconstantine</h2>
                            <p>5 hours ago</p>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>Richard's still have it boii...</p>
                            <img src="../../../imgs/bakeandshark.jpg" alt="post image"/>
                        </div>
                        <div className="post-actions">
                            <a className="like-btn" href="#">
                                <i className="fa fa-heart"></i> Like
                            </a>
                            <button><i className="fa fa-comment"></i> Comment</button>
                            <button><i className="fa fa-share"></i> Share</button>
                        </div>
                        </section>
                        <section className="post">
                            <div className="post-header">
                            <img src="../../../imgs/avatar2.jpg" alt="user profile picture"/>
                            <div className="post-info">
                                <h2>ricardoconstantine</h2>
                                <p>5 hours ago</p>
                            </div>
                            </div>
                            <div className="post-content">
                            <p>Richard's still have it boii...</p>
                            <img src="../../../imgs/bakeandshark.jpg" alt="post image"/>
                            </div>
                            <div className="post-actions">
                                <a className="like-btn" href="#">
                                    <i className="fa fa-heart"></i> Like
                                </a>
                            <button><i className="fa fa-comment"></i> Comment</button>
                            <button><i className="fa fa-share"></i> Share</button>
                            </div>
                        </section>
                        <section className="post">
                            <div className="post-header">
                            <img src="../../../imgs/avatar2.jpg" alt="user profile picture"/>
                            <div className="post-info">
                                <h2>ricardoconstantine</h2>
                                <p>5 hours ago</p>
                            </div>
                            </div>
                            <div className="post-content">
                            <p>Richard's still have it boii...</p>
                            <img src="../../../imgs/bakeandshark.jpg" alt="post image"/>
                            </div>
                            <div className="post-actions">
                                <a className="like-btn" href="#">
                                    <i className="fa fa-heart"></i> Like
                                </a>
                            <button><i className="fa fa-comment"></i> Comment</button>
                            <button><i className="fa fa-share"></i> Share</button>
                            </div>
                        </section>
                </div>  
        </div>
 
    )
}
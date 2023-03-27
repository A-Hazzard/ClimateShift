import '../../css/home/home.css'
import bluesplash from '../../imgs/bluesplash.png'
import maskot from '../../imgs/maskot.png'
import template from '../../imgs/template.jpg'
import $ from 'jquery'
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'

import GlobalNavBar from '../GlobalNavbar'

export default function Home(){
    $(document).ready(function() {
        $(window).on('scroll', function() {
          if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('scrolled');
          } else {
            $('.navbar').removeClass('scrolled');
          }
        });
      });
      
    return(
        <main className="home">
            <GlobalNavBar/>

            

                <div className="storyboard">
                    <div className="title">
                        <h1>Free Storyboard Creator for<br/> Cultural Experiences</h1>
                    </div>
                    <div>
                        <button className= "sbutton"><Link to="/storyboard">Create Your Storyboard</Link></button>
                        <h2 className= "smalltext">It's free and easy to use!</h2>
                    </div>
                    <div className="pictureright">
                    <img src={bluesplash} className="splash" style={{ width: "400px", height: "400px" }} />
                    <img src={maskot} className= "maskot" style = {{width: "250px", height: "350px"}} />
                    </div>
                </div>

                <div className="points">
                        <div className="left">
                            <i className="fa-solid fa-circle-check"></i>
                            <h2>Drag-and-drop with templates.</h2>
                        </div>
                        <div className="middle">
                            <i className="fa-solid fa-circle-check"></i>
                            <h2>Share online to collaborate as a team <br /> or download as a PDF.</h2>
                        </div>
                        <div className="right">
                            <i className="fa-solid fa-circle-check"></i>
                            <h2>Discuss your experiences with others around the globe.</h2>
                        </div>
                </div>

                <div className="view">
                        <div className="title">
                            <h1>Browse customizable storyboard <br/> templates</h1>
                            <h2>Start with a pre-made template to make creating your storyboard simple. <br /> 
                            Simply replace the stock images and shot specifics with your own <br/> unique concepts and data, then collaborate with your team to bring <br/> your concepts to life.</h2>
                            <button className= "viewbutton"><a href = "#">Use a Template</a></button>
                            <img src = {template} className= "viewimg" style = {{width: "350px", height: "350px"}}/>
                        </div>
                </div>

                <div className="forums">
                        <div className="title">
                            <h1>Discuss with other culturalists <br/> in our forum.</h1>
                            <h2>Connect with culturists worldwide on our forum!<br/> 
                            Engage in discussions, gain insights, and share ideas <br/> on various cultural topics. Join today and be a part <br/> of a vibrant community of like-minded individuals.</h2>
                            <button className= "forumbutton"><a href = "#">Join our Community</a></button>
                            <img src = {template} className= "forumimg" style = {{width: "350px", height: "350px"}}/>
                        </div>
                </div>

                <div className="info">
                        <div className="title">
                            <h1 className= "storytitle">LEARN ABOUT STORYBOARDS</h1><br></br>
                            <h1> What is a <span style = {{color: "#069211"}}> Storyboard?</span></h1>
                        </div>
                        <div className="body">
                            <p>
                                A storyboard is a visual outline for a project that assists filmmakers <br/> and animators in determining the structure and pacing of their movie <br/> as well as communicating the director's vision to the production team.
                            </p>
                        </div>
                        <button className= "infobutton"><a href = "#">Create Your Storyboard</a></button>
                        <img src = {template} className= "info-img" style = {{width: "350px", height: "350px"}}/>
                </div>

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>company</h4>
                                <ul>
                                    <li><a href="#">about us</a></li>
                                    <li><a href="#">our services</a></li>
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">affiliate program</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>get help</h4>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">shipping</a></li>
                                    <li><a href="#">returns</a></li>
                                    <li><a href="#">order status</a></li>
                                    <li><a href="#">payment options</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>credit</h4>
                                <ul>
                                    <li><a href="#">aaron hazzard</a></li>
                                    <li><a href="#">tyler bhagwandeen</a></li>
                                    <li><a href="#">j'nubian chapman</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>follow us</h4>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </main>
    )
}
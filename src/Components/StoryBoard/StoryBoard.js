import '../../css/storyboard/storyboard.css'
import Img1 from "./images/1.jpg"
import Img2 from "./images/2.jpg"
import Img3 from "./images/3.jpg"
import Img4 from "./images/4.jpg"
import Img5 from "./images/5.jpg"
import Img6 from "./images/6.jpg"
import Img7 from "./images/7.jpg"
import Img8 from "./images/8.jpg"
import Img9 from "./images/9.jpg"
import Img10 from "./images/10.jpg"
import Img11 from "./images/11.jpg"
import Img12 from "./images/12.jpg"
import Img13 from "./images/13.jpg"
import Img14 from "./images/14.jpg"
import Img15 from "./images/15.jpeg"

import { Link } from 'react-router-dom'


import GlobalNavBar from '../GlobalNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function StoryBoard(){
    return(
        <main className="storyboard">
            <GlobalNavBar/> 
            <hr />
            <section>
                <aside className='sideNavBar'>
                    <ul>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Seasonal</li><br />
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Carnival</li><br />
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Eventful</li><br />
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Party</li><br />
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Historical Sites</li>
                    </ul>
                </aside>

                <main className="main-container-storyboard">

                    <div className="banner">
                        <h2>Unleash your creativity with Out Dey!</h2>
                        <p>Don't wait any longer to bring your event to life.
                            <br />
                         Start designing now and make it unforgettable!</p>
                        <button><Link to="/storyboard/canva" style={{color: "black", textDecoration: "none"}}>Create an experience</Link></button>
                    </div>
                    <div className="templates">
                        <h3>Choose a template</h3><br/>

                        <div className="template-images">
                            <img src={Img1} alt="Template 1"/>
                            <img src={Img2} alt="Template 2"/>
                            <img src={Img3} alt="Template 3"/>
                            <img src={Img4} alt="Template 4"/>
                            <img src={Img5} alt="Template 5"/>
                            <img src={Img6} alt="Template 6"/>

                            <img src={Img7} alt="Template 1"/>
                            <img src={Img8} alt="Template 2"/>
                            <img src={Img9} alt="Template 3"/>
                            <img src={Img10} alt="Template 4"/>
                            <img src={Img11} alt="Template 5"/>
                            <img src={Img12} alt="Template 6"/>

                            <img src={Img13} alt="Template 1"/>
                            <img src={Img14} alt="Template 2"/>
                            <img src={Img15} alt="Template 3"/>
                        </div>

                        <div class="pagination">
                                    <ul>
                                        <li class="disabled"><a href="#">«</a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                </div>

</div>


                </main>
            </section>
           
        </main>
    )
}
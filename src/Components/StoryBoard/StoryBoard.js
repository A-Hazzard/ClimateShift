import '../../css/storyboard/storyboard.css'
import Img1 from "../../imgs/1.png"
import Img2 from "../../imgs/2.png"
import Img3 from "../../imgs/3.png"
import Img4 from "../../imgs/4.png"
import Img5 from "../../imgs/5.png"
import Img6 from "../../imgs/6.png"





import GlobalNavBar from '../GlobalNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function StoryBoard(){
    return(
        <main className="storyboard">
            <GlobalNavBar/>

            <section>
                <aside className='sideNavBar'>
                    <ul>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Seasonal</li>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Carnival</li>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Eventful</li>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Party</li>
                        <li><i class="fa-sharp fa-solid fa-angle-down"></i> Historical Sites</li>
                    </ul>
                </aside>

                <main className="main-container-storyboard">

                    <div className="banner">
                        <h2>Unleash your creativity with Out Dey!</h2>
                        <p>Don't wait any longer to bring your event to life.
                            <br />
                         Start designing now and make it unforgettable!</p>
                        <button>Create an experience</button>
                    </div>
                    <div className="templates">
                        <h3>Choose a template</h3>

                        <div className="template-images">
                            <img src={Img1} alt="Template 1"/>
                            <img src={Img2} alt="Template 2"/>
                            <img src={Img3} alt="Template 3"/>
                            <img src={Img4} alt="Template 4"/>
                            <img src={Img5} alt="Template 5"/>
                            <img src={Img6} alt="Template 6"/>

                            <img src={Img1} alt="Template 1"/>
                            <img src={Img2} alt="Template 2"/>
                            <img src={Img3} alt="Template 3"/>
                            <img src={Img4} alt="Template 4"/>
                            <img src={Img5} alt="Template 5"/>
                            <img src={Img6} alt="Template 6"/>

                            <img src={Img1} alt="Template 1"/>
                            <img src={Img2} alt="Template 2"/>
                            <img src={Img3} alt="Template 3"/>
                            <img src={Img4} alt="Template 4"/>
                            <img src={Img5} alt="Template 5"/>
                            <img src={Img6} alt="Template 6"/>
                        </div>
</div>


                </main>
            </section>
           
        </main>
    )
}
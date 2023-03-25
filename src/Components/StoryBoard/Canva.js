import '../../css/storyboard/canva.css'

import React, { useState, useRef, useEffect } from 'react';
import GlobalNavbar from '../GlobalNavbar';
import $ from 'jquery';

export default function Canva() {

    $('.home-header').css('border-bottom', "2px solid black")

  return (
    <div className='canva'>
        <GlobalNavbar/>
    
        <main className="main-container-canva">

            <div className="flex-wrapper">

                <aside className='sidenav'>
                    <ul>
                        <li><button><i className="fa-sharp fa-solid fa-shapes"></i> <br /> Templates</button></li>
                        <li><button><i className="fa-regular fa-image"></i> <br/> Images</button></li>
                        <li><button><i className="fa-solid fa-text-slash"></i><br /> Text</button></li>
                        <li><button><i className="fa-brands fa-pied-piper"></i><br /> Logos</button></li>
                        <li><button><i className="fa-sharp fa-solid fa-file-circle-plus"></i><br /> Elements</button></li>
                        <li><button><i className="fa-solid fa-video"></i><br /> Video</button></li>
                        <li><button><i className="fa-solid fa-play"></i><br /> Animation</button></li>
                    </ul>
                </aside>

                <section className="canva">

                </section>
            </div>
        </main>
    
    </div>
  );
}


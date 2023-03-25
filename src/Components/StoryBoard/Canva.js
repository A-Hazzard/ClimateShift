import '../../css/storyboard/canva.css'
import templateImg from '../../imgs/1.png'


import React, { useState, useRef, useEffect } from 'react';
import GlobalNavbar from '../GlobalNavbar';
import $ from 'jquery';

export default function Canva() {

    $('.home-header').css('backgroundColor', "grey")

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

                <aside className='slider'>
                    <h1>
                        WELCOME TO THE YOUR STORY BOARD
                    </h1>

                    <ul>
                        <li>Choose from a variety of stunning templates</li>
                        <li>Search through royalty free images & icons</li>
                        <li>Upload your images or import them from social media & drives.</li>
                        <li>Use different text banners, fonts, colors, and elements.</li>
                        <li>Unlock your library to store your content.</li>
                        <li>Print, Share or Download as PDF, JPEG or PNG file.</li>
                        <li>Resize your design at any time for free.</li>
                       








                    </ul>
                </aside>

                <section className="canva">

                    <div className="tools">
                        <ul>
                            <li>Drawing</li>
                            <li>Shapes</li>
                            <li>Frames</li>
                            <li>Text</li>
                            <li>Table</li>
                        </ul>
                    </div>

                    <div className="paper">
                        <img src={templateImg} alt="templateImg" />

                    <div className="corner-buttons">

                        <div className='zoom'>

                            <div className="zoom-buttons">
                                <button className='zoom-out'>-</button>
                                    <span className='fit'>Fit</span>
                                <button className='zoom-in'>+</button>
                            </div>

                            <div className="pages">
                                <span className="pages-text">Pages (1)</span>

                            </div>
                                </div>

                        </div>
                    </div>
                       

                </section>
            </div>
        </main>
    
    </div>
  );
}


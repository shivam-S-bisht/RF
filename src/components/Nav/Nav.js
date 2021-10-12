import './Nav.css'
import { useEffect } from 'react'

function Nav() {

    useEffect(() => {
        let landscapenav = document.querySelector('.landscape_nav');
        let navcontainer = document.querySelector('.all_navs_container');

        window.addEventListener("scroll", () => {

            let windowPos = window.scrollY > 0;
            landscapenav.classList.toggle("shadownav", windowPos);
        })


        let hamnavicon = document.querySelector('.hamnav_icon_container');
        let firstbar = document.querySelector('.hamicon_firstbar');
        let secondbar = document.querySelector('.hamicon_secondbar');
        let thirdbar = document.querySelector('.hamicon_thirdbar');
        let hamnav = document.querySelector('.hamnav_container');

        hamnavicon.addEventListener('click', () => {

            firstbar.classList.toggle("ham_opened_firstbar");
            secondbar.classList.toggle("ham_opened_secondbar");
            thirdbar.classList.toggle("ham_opened_thirdbar");
            hamnav.classList.toggle("hamnav_opened");
        })
    }, []);


    return (
        <>
            <nav class="all_navs_container">

                <div class="landscape_nav">

                    <div class="section_wrapper">
                        <ul class="main_nav">

                            <li class="logo-container">
                                <a href="#hero">
                                    <img src="/Image/Logo.png" alt="Plunge2Research" />
                                </a>
                            </li>


                            <div class="navbar_links">
                                <li><a href="#" class="navbar_item">Directors</a></li>
                                <li><a href="#" class="navbar_item">Research Scholars</a></li>
                                <li><a href="#" class="navbar_item">Contact Us</a></li>
                                <li><a href="#" class="navbar_item">Guidance</a></li>
                                <li><a href="#" class="navbar_item" id="navbar_cta">CTA 2</a></li>
                            </div>

                        </ul>
                    </div>
                </div>


                <div class="hamburger_nav">

                    <div class="hamnav_icon_container">
                        <div class="hamnav_icon">
                            <div class="hamicon_firstbar hamicon_bar"></div>
                            <div class="hamicon_secondbar hamicon_bar"></div>
                            <div class="hamicon_thirdbar hamicon_bar"></div>
                        </div>
                    </div>

                    <div class="hamnav_container ">
                        <ul class="hamnav">

                            <a href="#hero" class="ham_logo_container" />


                            <div class="hamnavbar_links">
                                <li><a href="#" class="navbar_item">Directors</a></li>
                                <li><a href="#" class="navbar_item">Research Scholars</a></li>
                                <li><a href="#" class="navbar_item">Contact Us</a></li>
                                <li><a href="#" class="navbar_item">Guidance</a></li>
                                <li><a href="#" class="navbar_item" id="hamnavbar_cta">CTA 2</a></li>
                            </div>

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Nav
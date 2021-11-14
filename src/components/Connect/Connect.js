import { useEffect } from 'react'
import './Connect.css'

function Connect() {

    useEffect(() => {
        let modal1 = document.getElementById('step1_modal');
        let modal2 = document.getElementById('step2_modal');
        let modal3 = document.getElementById('step3_modal');
        let modal4 = document.getElementById('step4_modal');

        let modalLink1 = document.getElementById('step1_link');
        let modalLink2 = document.getElementById('step2_link');
        let modalLink3 = document.getElementById('step3_link');
        let modalLink4 = document.getElementById('step4_link');

        let closebtn = document.getElementsByClassName('close_modal');

        let lowernav = document.querySelector('.all_navs_container');

        let body = document.querySelector('body');

        modalLink1.addEventListener('click', () => {

            lowernav.classList.add('lower_nav_zindex');
            body.classList.add('disable_scroll');
            modal1.classList.add('display_modal');
        })
        modalLink2.addEventListener('click', () => {

            lowernav.classList.add('lower_nav_zindex');
            modal2.classList.add('display_modal');
            body.classList.add('disable_scroll');
        })
        modalLink3.addEventListener('click', () => {

            lowernav.classList.add('lower_nav_zindex');
            modal3.classList.add('display_modal');
            body.classList.add('disable_scroll');
        })
        modalLink4.addEventListener('click', () => {

            lowernav.classList.add('lower_nav_zindex');
            modal4.classList.add('display_modal');
            body.classList.add('disable_scroll');
        })

        for (let j = 0; j <= closebtn.length; j++) {

            closebtn[j]?.addEventListener('click', () => {
                console.log('event happened')
                lowernav.classList.remove('lower_nav_zindex');
                modal1.classList.remove('display_modal');
                modal2.classList.remove('display_modal');
                modal3.classList.remove('display_modal');
                modal4.classList.remove('display_modal');
                body.classList.remove('disable_scroll');
            })
        }

    }, [])

    return (
        <>
            {/* <img src="/Image/blackhexagon.png" class="tr_hex" />
                <img src="/Image/blackhexagon.png" class="b_hex" />
                <img src="/Image/blackhexagon.png" class="tl_hex" /> */}

            <div class="modal_root_wrapper">
                <div class="modal_wrapper">

                    <div class="connect_steps_modals" id="step1_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" alt="loading" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" alt="loading" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 1</h1>
                                    <h2 class="modal_title">Get familiar</h2>
                                    <p class="modal_info">Making research easy is huge responsibility and may seem like a fictional task to many. But we claim to do it with our passion and network. So, why believe what we say if you can witness it. Browse through our website and read the reviews of various researchers before you, connect and talk to them. We are on a mission to bring the research community together and stronger, helping and guiding the new generation through the dark and lesser known roads of being a researchers. We also have a content repository that you can explore at your pace and absorb as much as you can.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step2_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" alt="loading" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" alt="loading" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 2</h1>
                                    <h2 class="modal_title">Join Cohort</h2>
                                    <p class="modal_info">Cheers! Now that you are familiar with we do and who we are, lets get you in. This is a free of cost open research community, so no fees or any kind of favours will be expected from you. The sheer interest and willingness to fight your way through research is required. Please navigate to our <strong>Contact Us</strong>page and get in touch with <strong>Arpan- Director of outreach</strong> who will share some details about us community and the benefits you will receive. Once you are ready to be on-boarded as a research scholar, you will have an orientation and kickstart session with <strong>Muskan- Founder and Director of research</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step3_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" alt="loading" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" alt="loading" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 3</h1>
                                    <h2 class="modal_title">Begin research</h2>
                                    <p class="modal_info">Welcome! You are officially a research scholar with the Plunge2Research community. Now all’s left it to get kicking and start writing your first research paper. Enrol in a one to one mentor ship with our founder- Muskan, where you will navigate through the following
                                        <ul>
                                            <li>Selecting a research topic.</li>
                                            <li>Understanding types of publications and their indexing.</li>
                                            <li>Accessing research papers, navigation <a href="https://scholar.google.co.in/" target="_blank">GoogleScholar</a> and reading research papers.</li>
                                            <li>Writing the publication of your choice.</li>
                                            <li>Proof reading, Plagiarism removal and format editing.</li>
                                            <li>Getting expert guidance from one of Plunge2Research research mentors or any senior professor contact of yours.</li>
                                            <li>Select a Journal & Publication house and submit.</li>
                                        </ul>
                                        PS- This just the overview, you can ask, learn and do anything or everything in research domains like understanding book writings, finding research internships, writing a proposal, making research precence across the web, YouTube collaborations and much more. We are here for you for whatever you want – like a good consultant and advisor !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step4_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" alt="loading" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" alt="loading" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 4</h1>
                                    <h2 class="modal_title">Get published</h2>
                                    <p class="modal_info">Congratulations! You are now a acclaimed and published researchers. So, What’s next for you researcher scholar? Get in touch with Muskan for new opportunities and possibilities. You may want to write a review paper, an implementation paper, a book chapter, a research proposal, apply for a research internship, get your projects and other articles published, learn more about a domain or apply for summer research programs. Sky is the limit
.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section class="connect_section">

                <img src="/Image/blackhexagon.png" class="tr_hex" alt="loading" />
                <img src="/Image/blackhexagon.png" class="b_hex" alt="loading" />
                <img src="/Image/blackhexagon.png" class="tl_hex" alt="loading" />

                <div class="section_wrapper">

                    <div class="connect_flexbox_container">

                        <h1 class="connect_section_title">
                            Steps to connect with us</h1>

                        <div class="connect_steps_container">

                            <div class="steps_lhs">

                                <div class="step_card" id="step1">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Get familiar</h2>

                                        <div class="step_card_img">
                                            <img src="/Image/Illustration 1.png" alt="loading" />
                                        </div>

                                        <p class="step_card_info">Understand our vision and
                                            explore various research
                                            domains.
                                        </p>

                                        <span class="step_card_modal_link" id="step1_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" alt="loading" />
                                    </div>

                                </div>

                                <div class="step_card" id="step2">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Join Cohort</h2>

                                        <div class="step_card_img" id="step2_img">
                                            <img src="/Image/Illustration 2.png" alt="loading" />
                                        </div>

                                        <p class="step_card_info">Contact our team and be
                                            part of the community.
                                        </p>

                                        <span class="step_card_modal_link" id="step2_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" alt="loading" />
                                    </div>

                                </div>

                            </div>

                            <div class="steps_rhs">

                                <div class="step_card" id="step3">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Begin research</h2>

                                        <div class="step_card_img">
                                            <img src="/Image/Illustration 3.png" alt="loading" />
                                        </div>

                                        <p class="step_card_info">Get the research
                                            opportunity of your choice
                                            and start working.
                                        </p>

                                        <span class="step_card_modal_link" id="step3_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" alt="loading" />
                                    </div>

                                </div>

                                <div class="step_card" id="step4">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Get published</h2>

                                        <div class="step_card_img">
                                            <img src="/Image/Illustration 4.png" alt="loading" />
                                        </div>

                                        <p class="step_card_info">Submit your research
                                            article, get reviewed
                                            and published.
                                        </p>

                                        <span class="step_card_modal_link" id="step4_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" alt="loading" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}


export default Connect
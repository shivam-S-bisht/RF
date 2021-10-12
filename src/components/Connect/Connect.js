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

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 1</h1>
                                    <h2 class="modal_title">Get familiar</h2>
                                    <p class="modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquid veniam et
                                        architecto nostrum id saepe quam, quidem iusto molestias quis est hic iste quasi quas neque itaque
                                        voluptas odio dolores ratione libero delectus in! Animi et laborum at incidunt debitis cumque
                                        veritatis, soluta maxime nesciunt quae magni iure modi culpa ipsum deserunt minima. Id doloremque
                                        praesentium vel exercitationem rem nam soluta voluptatem quis facilis, consequatur excepturi,
                                        voluptates at eveniet ullam velit consequuntur sapiente iusto?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step2_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 2</h1>
                                    <h2 class="modal_title">Join Cohort</h2>
                                    <p class="modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquid veniam et
                                        architecto nostrum id saepe quam, quidem iusto molestias quis est hic iste quasi quas neque itaque
                                        voluptas odio dolores ratione libero delectus in! Animi et laborum at incidunt debitis cumque
                                        veritatis, soluta maxime nesciunt quae magni iure modi culpa ipsum deserunt minima. Id doloremque
                                        praesentium vel exercitationem rem nam soluta voluptatem quis facilis, consequatur excepturi,
                                        voluptates at eveniet ullam velit consequuntur sapiente iusto?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step3_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 3</h1>
                                    <h2 class="modal_title">Begin research</h2>
                                    <p class="modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquid veniam et
                                        architecto nostrum id saepe quam, quidem iusto molestias quis est hic iste quasi quas neque itaque
                                        voluptas odio dolores ratione libero delectus in! Animi et laborum at incidunt debitis cumque
                                        veritatis, soluta maxime nesciunt quae magni iure modi culpa ipsum deserunt minima. Id doloremque
                                        praesentium vel exercitationem rem nam soluta voluptatem quis facilis, consequatur excepturi,
                                        voluptates at eveniet ullam velit consequuntur sapiente iusto?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="connect_steps_modals" id="step4_modal">
                        <div class="modal_backdrop">
                            <div class="modal_container">

                                <img src="/Imageimg/purplehexagon.png" class="tr_hex" />
                                <img src="/Imageimg/purplehexagon.png" class="bl_hex" />

                                <i class="fas fa-times close_modal"></i>

                                <div class="modal_content">
                                    <h1 class="modal_count">Step 4</h1>
                                    <h2 class="modal_title">Get published</h2>
                                    <p class="modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquid veniam et
                                        architecto nostrum id saepe quam, quidem iusto molestias quis est hic iste quasi quas neque itaque
                                        voluptas odio dolores ratione libero delectus in! Animi et laborum at incidunt debitis cumque
                                        veritatis, soluta maxime nesciunt quae magni iure modi culpa ipsum deserunt minima. Id doloremque
                                        praesentium vel exercitationem rem nam soluta voluptatem quis facilis, consequatur excepturi,
                                        voluptates at eveniet ullam velit consequuntur sapiente iusto?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section class="connect_section">

                <img src="/Image/blackhexagon.png" class="tr_hex" />
                <img src="/Image/blackhexagon.png" class="b_hex" />
                <img src="/Image/blackhexagon.png" class="tl_hex" />

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
                                            <img src="/Image/Illustration 1.png" />
                                        </div>

                                        <p class="step_card_info">Understand our vision and
                                            explore various research
                                            domains
                                        </p>

                                        <span class="step_card_modal_link" id="step1_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" />
                                    </div>

                                </div>

                                <div class="step_card" id="step2">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Join Cohort</h2>

                                        <div class="step_card_img" id="step2_img">
                                            <img src="/Image/Illustration 2.png" />
                                        </div>

                                        <p class="step_card_info">Contact our team and be
                                            part of the community
                                        </p>

                                        <span class="step_card_modal_link" id="step2_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" />
                                    </div>

                                </div>

                            </div>

                            <div class="steps_rhs">

                                <div class="step_card" id="step3">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Begin research</h2>

                                        <div class="step_card_img">
                                            <img src="/Image/Illustration 3.png" />
                                        </div>

                                        <p class="step_card_info">Get the research
                                            opportunity of your choice
                                            and start working
                                        </p>

                                        <span class="step_card_modal_link" id="step3_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" />
                                    </div>

                                </div>

                                <div class="step_card" id="step4">

                                    <div class="step_card_content">

                                        <h2 class="step_card_title">Get published</h2>

                                        <div class="step_card_img">
                                            <img src="/Image/Illustration 4.png" />
                                        </div>

                                        <p class="step_card_info">Submit your research
                                            article, get reviewed
                                            and published
                                        </p>

                                        <span class="step_card_modal_link" id="step4_link">view more</span>

                                    </div>

                                    <div class="design_container">
                                        <img src="/Image/purplehexagon.png" />
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
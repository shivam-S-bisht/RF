import './Hero.css'

function Hero() {
    return (
        <>
            <header class="hero_section" id="hero">

                <img src="/Image/blackhexagon.png" class="tr_hex" />
                <img src="/Image/blackhexagon.png" class="b_hex" />
                <img src="/Image/blackhexagon.png" class="tl_hex" />

                <article class="hero_content">
                    <div class="section_wrapper">
                        <div class="hero_flexbox_container">

                            <div class="hero_flex_lhs">

                                <div class="hero_lhs_content_container">
                                    <h1>Lorem Ipsum <div>consectetur</div></h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum sint modi earum facere quia unde tempora quas, minima maiores.</p>

                                    <a href="#" class="hero_ctabtn">CTA button</a>
                                </div>
                            </div>

                            <div class="hero_flex_rhs">
                                <div class="hero_illustration">
                                    <img src="/Image/Hero illustration.png" />
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </header>
        </>
    )
}

export default Hero
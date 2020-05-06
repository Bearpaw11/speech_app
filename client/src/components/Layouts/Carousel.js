import React from "react";

function Carousel() {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active"> 
                    <p className="carouselTitle">"Winning Bigly!"</p>
                    <p className="carouselWords">"I am by far one of the greatest businessmen on Earth, and quite frankly, I am that way because of myself, G-d, and Speech Therapy. Speech Therapy is simplistic, slick, and easy to use. Believe me, I know simplicity! This app helps me win bigly whenever I need to speak to my royal subjects."</p>
                    <p className="carouselSignature"> - Donald JT, Businessman</p>
                </div>

            <div class="carousel-item">
                    <p className="carouselTitle">"VP of Public Speaking -- Make That President!"</p>
                    <p className="carouselWords">"Simply the best app for public speaking. After playing second fiddle to the greatest genius on Earth, I knew I needed to take things up a notch. So, I downloaded Speech Therapy. Absolutely love it. I'm using the skills from this app to become the president of my company."</p>
                    <p className="carouselSignature"> - Joe B, VP Communications</p>
            </div>

            <div class="carousel-item">
                    <p className="carouselTitle">"100% VERSATILE, LOVE IT!"</p>
                    <p className="carouselWords">"I am a famous singer, and I have acted in several films and spoken at large gatherings, such as awards shows. I always struggled, though, until I found Speech Therapy. I really like, um, the fact that, like, I can count my fillers, and, like, how long I spoke. Super helpful. Always getting better, thanks to this app!"</p>
                    <p className="carouselSignature"> - Britney S, Singer</p>
            </div>
        </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>
    )
}

export default Carousel;
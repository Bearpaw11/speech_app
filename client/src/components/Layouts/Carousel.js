import React from "react";

function Carousel() {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active"> 
                <p className="carouselTitle">"Winning Bigly!"</p>
                <p className="carouselWords">"I am the greatest businessman on Earth, and frankly, I am that way because of myself, G-d, and Speech Therapy. Speech Therapy is simplistic, and easy to use. Believe me, I know simplicity! This app helps me win bigly whenever I need to speak to my royal subjects."</p>
                <p className="carouselSignature"> - Donald JT, Businessman</p>
            </div>


        <div class="carousel-item">
                <p className="carouselTitle">"VP of Public Speaking -- Make That President!"</p>
                <p className="carouselWords">"After playing second fiddle to the greatest genius on Earth, I knew I needed to take things up a notch. So, I downloaded Speech Therapy. I love it. I'm using the skills from this app to become the president of my company."</p>
                <p className="carouselSignature"> - Joe B, VP Communications</p>
        </div>

        <div class="carousel-item">
                <p className="carouselTitle">"100% VERSATILE, LOVE IT!"</p>
                <p className="carouselWords">"I am a famous singer, and I have acted in several films and spoken at gatherings, such as awards shows. I always struggled, though, until I found Speech Therapy. I just really like, the fact that, like, I can count my fillers, and, like, time myself. Thanks, Speech Therapy!"</p>
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
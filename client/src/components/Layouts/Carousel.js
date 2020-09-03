import React from "react";

function Carousel() {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active"> 
                <p className="carouselTitle">"5 Stars!"</p>
                <p className="carouselWords">"It is not often that one comes across a free app of this caliber. Speech Therapy is fun and very easy to use."</p>
                <p className="carouselSignature"> - John C, CEO</p>
            </div>


        <div class="carousel-item">
                <p className="carouselTitle">"A New Classic"</p>
                <p className="carouselWords">"After a recent presentation, I knew I needed to take things up a notch. So, I downloaded Speech Therapy. I love it. I'm using the skills from this app to become the president of my company."</p>
                <p className="carouselSignature"> - Carina M, VP Communications</p>
        </div>

        <div class="carousel-item">
                <p className="carouselTitle">"A GAMECHANGER!"</p>
                <p className="carouselWords">"I speak at numerous gatherings, and I am always seeking to improve. Everything changed once I found Speech Therapy. I appreciate that I can count my fillers and time myself. Thanks, Speech Therapy!"</p>
                <p className="carouselSignature"> - Britney S, Singer/Speaker</p>
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
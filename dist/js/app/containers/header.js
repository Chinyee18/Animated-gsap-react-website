"use strict";
const { useRef, useEffect } = React;
const tecHeaderImg1 = '../../../../assets/images/tecnatives/tec_header_img_1.webp';
const tecHeaderImg2 = '../../../../assets/images/tecnatives/tec_header_img_2.webp';
const tecHeaderClickArea = '../../../../assets/images/tecnatives/rounded-line.svg';
const dcaHeaderImg = '../../../../assets/images/dcatalyst/dca_header_img.webp';
const dcaHeaderClickArea = '../../../../assets/images/dcatalyst/rounded-line.svg';

const Header = ({children, headerImgSlideIn, secHeaderImgFadeOut, mainHeaderImgFadeOut, headerImg1, headerImg2, headerImg3, headerImg3Link}) => {
    useEffect(() => {
        //header images slide out on init
        const tecYPercent = window.innerHeight > window.innerWidth && window.innerWidth < 390  ? 39 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 480  ? 30 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 750  ? 15 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 920 ? 12 //portrait
            : window.innerHeight < window.innerWidth && window.innerHeight < 480 ? 45 //landscape
            : window.innerHeight < window.innerWidth && window.innerHeight < 650 ? 35 //landscape
            : 20;
        const tecXPercent = window.innerHeight > window.innerWidth && window.innerWidth < 390 ? -45 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 480 ? -40 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 920 ? -55 //portrait
            : window.innerHeight < window.innerWidth && window.innerWidth < 750 ? -50 //landscape
            : window.innerHeight < window.innerWidth && window.innerWidth < 1000 ? -65 //landscape
            : -75;
        const dcaXPercent = window.innerHeight > window.innerWidth && window.innerWidth < 480 ? 45 //portrait
            : window.innerHeight > window.innerWidth && window.innerWidth < 920 ? 10 //portrait
            : window.innerHeight < window.innerWidth && window.innerWidth < 800 ? 120 //landscape
            : window.innerHeight < window.innerWidth && window.innerWidth < 1000 ? 140 //landscape
            : 50;
        gsap.set(".gs-mainHeaderImage", {yPercent: -40, xPercent: 70, opacity: 0 });
        gsap.set(".gs-secHeaderImage", {opacity: 1, delay:0.8 });
        gsap.timeline({
            scrollTrigger: {
                toggleActions: "restart complete complete reset", 
                trigger: headerImgSlideIn
            }
        })
        .to('.gs-mainHeaderImage', { duration: 1.5, yPercent: tecYPercent, xPercent: tecXPercent, ease: "none", opacity: 1}, 0)
        .to(".gs-secHeaderImage", { yPercent: -45, xPercent: dcaXPercent, ease: "none", opacity: 1}, 0)

        //tec header images switch 
        gsap.set(".gs-mainHeaderImg1", { yPercent: -100});
        gsap.timeline({
            scrollTrigger: {
                toggleActions: "restart complete reverse reset", 
                trigger: ".gs-mainHeaderImage"
            }
        })
        .to('.gs-mainHeaderImg1', { duration: 2, opacity: 1, scale: 1.1, ease: "none"}, 0)
        .to('.gs-mainHeaderImg1', { delay: 1, duration: 1, opacity: 0, ease: "none"}, 1)
        .to('.gs-mainHeaderImg2', { duration: 2, opacity: 1, ease: "none" ,scale: 1.1}, 3)

        //secondary header images fade out at video container
        gsap.to(".gs-secHeaderImage", {autoAlpha:0, opacity:0, display:'none', duration: 1, ease: "none", delay: 1, 
            scrollTrigger: {
                trigger: secHeaderImgFadeOut,
                start: "top top",
                end: "bottom center",
                toggleActions: "restart complete reverse reset",
                scrub: 1
            }
        });

        //main header images fade out at end of .AETE--container
        const start = window.innerWidth < 992 ? "top center" : "top 1%"
        gsap.to(".gs-mainHeaderImage", {autoAlpha:0, opacity:0 , display:'none', duration:1, ease: 'none', delay: 1.5,
            scrollTrigger: {
                trigger: mainHeaderImgFadeOut,
                start: start,
                end: "+=10",
                toggleActions: "restart pause reverse pause",
                scrub: 1
                //markers: true
            }
        })
    }, []);
    return (
        <div className='section__padding'>
            <div className='container header--container'>
                <div className='row'>
                    <div className='col-md-9 col-lg header--content'>
                        {children}
                    </div>
                    <div className='col-lg'></div>
                </div>
                <div className='header--images'>
                    <div className='gs-mainHeaderImage maskMain maskMain--position'>
                        <img src={headerImg1} className='gs-mainHeaderImg2' />
                        <img src={headerImg2} className='gs-mainHeaderImg1' />
                    </div>
                    <Link to={headerImg3Link}>
                        <div className='gs-secHeaderImage dca--click-area maskSec--position'></div>    
                        <div className='gs-secHeaderImage maskSec maskSec--position'>
                            <img src={headerImg3} alt=""/>
                        </div>
                    </Link>
                </div>    
            </div>
        </div>
    )
}


if (!customElements.get('header')) { customElements.define('header', Header); }
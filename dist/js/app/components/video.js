"use strict";

const Video = ({imgUrl, videoUrl, videoTrigger}) => {
    
    useEffect(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".V--container",
          start: "top 2%",
          end: () => innerHeight * 1,
          scrub: 1,
          pin: ".video--container",
          anticipatePin: 1
        }
      })
      .from(".video--container", { scale: 0.5, ease: "none",})
      .to(".video--container", {duration: 0.5}, 1);
      
    }, []);

  //   useEffect(() => {
  //     for (const video of document.querySelectorAll(".videoPlayer")) {
  //        ScrollTrigger.create({
  //           trigger: videoTrigger,
  //           onEnter: () => video.play(),
  //           onEnterBack: () => video.play(),
  //           onLeave: () => video.pause(),
  //           onLeaveBack: () => video.pause(),
  //        });
  //     }
  //  }, []);
 
    return (
      <div className='container section__padding'>
        <div className='V--container row'>
          <div className="section__padding video--container showVideo" >
            <video 
              className="player--wrapper videoPlayer" 
              controls 
              preload="auto"
              src={videoUrl}
              autoPlay muted
              // poster={imgUrl}
              width="100%">
            </video>
          </div>
        </div>
      </div>
    )
}

if (!customElements.get('video')) { customElements.define('video', Video); }
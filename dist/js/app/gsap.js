// TecnativesPage
const tecHeaderImageRef = useRef(null);
  const dcaHeaderImageRef = useRef(null);

  useEffect(() => {
    //switch header images
    gsap.set(".tecHeaderImg1", { yPercent: -100});
    gsap.set(".tecHeaderImg2", { yPercent: 0});
    gsap.timeline({
      scrollTrigger: {
        toggleActions: "restart complete reverse reset",
        trigger: ".tecHeaderImage"
      }
    })
    .to('.tecHeaderImg1', { delay: 1,duration: 1, opacity: 1, ease: "none" }, 0)
    .to('.tecHeaderImg1', { delay: 1,duration: 1, opacity: 0, ease: "none" }, 1)
    .to('.tecHeaderImg2', { duration: 1, opacity: 1, ease: "none" }, 2)
    
    //dcatalyst header images slide down at video container
    gsap.to(".dcaHeaderImage", {
      y: 600,
      x: -600,
      duration: 2,
      ease: "none",
      delay: 1,
      scrollTrigger: {
        trigger: ".V--container",
        start: "top top",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 2
      }
    });
    
    //tecnatives header images slide up at end of .AETE--container
    
    gsap.set(".tecHeaderImage", { yPercent: 5, xPercent: -5});
    gsap.to(".tecHeaderImage", {
      y: -800,
      x: 800,
      duration: 2,
      ease: 'none',
      delay: 1.5,
      scrollTrigger: {
        trigger: ".AETE--container",
        start: "top top",
        //end: () => innerHeight * 3,
        end: '+=1000',
        pin: ".AETE--container",
        toggleActions: "restart pause reverse pause",
        scrub: 2
      }
    })
    //AETE--container fade out at end of .AETE--container
    gsap.set(".AETE--container", { duration: 1, opacity: 1, ease: "none" });
    gsap.to(".AETE--container", { 
      duration: 1, 
      opacity: 0, 
      ease: "none" ,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".AETE--container",
        start: "top top",
        end: '+=1000',
        scrub: 2
      }
    });
  }, []);
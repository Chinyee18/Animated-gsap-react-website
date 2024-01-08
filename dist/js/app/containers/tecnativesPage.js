"use strict";

const tecVideoImg = '../../../../assets/video/videoImg.jpg';
const video = '../../../../assets/video/&Tecnative.mp4';

const introTecImg1 = '../../../../assets/images/tecnatives/introTec1.webp';
const introTecImg2 = '../../../../assets/images/tecnatives/introTec2.webp';
const introTecImg3 = '../../../../assets/images/tecnatives/introTec3.webp';
const introTecImg4 = '../../../../assets/images/tecnatives/introTec4.webp';
const introTecImg5 = '../../../../assets/images/tecnatives/introTec5.webp';
const introTecImg6 = '../../../../assets/images/tecnatives/introTec6.webp';

const muscleIcon =  '../../../../assets/images/tecnatives/muscle.png';
const enduranceIcon =  '../../../../assets/images/tecnatives/endurance.png';
const reduceFatIcon =  '../../../../assets/images/tecnatives/reduceFat.png';

const provenSafeTec1 = '../../../../assets/images/tecnatives/provenSafeTec1.webp';
const provenSafeTec2 = '../../../../assets/images/tecnatives/provenSafeTec2.png';

const engPdf = '../../../../assets/pdf/Combined_Additonal_Info_EN.pdf';
const thaiPdf = '../../../../assets/pdf/Combined_Additonal_Info_TH.pdf';

const TecnativesPage = () => {
    const AETE = useRef(null);
    const executeScroll = () => AETE.current.scrollIntoView({ behavior: "smooth" });

    function ScrollToTopOnMount() {
        useEffect(() => {
        gsap.to(window, {scrollTo: 0});
        }, []);
        ScrollTrigger.refresh();
        console.log("ScrollToTopOnMount")
        return null;
    }

    const mainHeaderImgFadeOut = window.innerHeight > window.innerWidth && window.innerWidth < 920 
    ? ".gs-video" : ".AETE--container"
   
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;
    const allPdf = language == "en"?engPdf:thaiPdf;

    useEffect(() => {
        fetch("./dist/lang/cta.json")
        .then(response => response.json())
        .then(data => {
          if (language == "en"){
            setContent(data.en)
          }else if(language == "th"){
            setContent(data.th)
          }
        })
      },[language])
  return (
    <div>
      <ScrollToTopOnMount/>
      <TopTec />
      <ArrowBtn btnType="scrollTopBtn" />
      <Header 
        headerImgSlideIn=".gs-tecStart" 
        secHeaderImgFadeOut=".V--container" 
        mainHeaderImgFadeOut={mainHeaderImgFadeOut}
        headerImg1={tecHeaderImg2} 
        headerImg2={tecHeaderImg1} 
        headerImg3={dcaHeaderImg}
        headerImg3Link="dcatalyst">
        <div className="tecHeaderContent"> 
          <h1 className='title__green'>Andthen Enterprise + Tecnatives EMS</h1>
          {/* <Button children='Learn More' btnStyle='btn--outlineTecColor' onClick={executeScroll} /> */}
        </div>
      </Header>
      <Video imgUrl={tecVideoImg} videoUrl={video} videoTrigger=".gs-video"/>
      <VideoPage />
      <AndthenEnterpriseTecnativeEMS ref={AETE}/>
      <IntroducingTecnative />
      <WirelessFreedom />
      <MuscleUpReduceFat />
      <ProvenAndSafeTechnology />
      <NtSystem />
      <CTA url={allPdf} btnStyle3='btn--outlineTecColor' btnStyle2='btn--outlineTecColor' btnOnClick={(e) => {e.preventDefault();window.open("https://www.tecnatives.asia/", "_blank");}} 
      btnChildren={language == "en"?'Visit our Regional Website': 'เยี่ยมชมเว็บไซต์อย่างเป็นทางการได้ที่นี่'} >
        <p className={`mt-4 ${language}`}>{content.p}</p>
        <Link to="nativeTraining" ><h3 className={`mt-4 ${language}`}>{content.p1}</h3></Link><hr/>
        <Link to="benefitsofEMS" ><h3 className={`mt-4 ${language}`}>{content.p2}</h3></Link><hr/>
        <Link to="howDoesItWork" ><h3 className={`mt-4 ${language}`}>{content.p3}</h3></Link><hr/>
        <Link to="ntTechnology" ><h3 className={`mt-4 ${language}`}>{content.p4}</h3></Link><hr/>
      </CTA>
      <Contact />
    </div>
  )           
}

const TopTec = () => {return(<div className="gs-tecStart" id="top-page"></div>)}

const VideoPage = () => {
  return(
    <div className='section__padding'>
      <div className='container empty--container gs-video'></div>
    </div>
  )
}

const AndthenEnterpriseTecnativeEMS = React.forwardRef((props, ref) => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/aete.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
  return(
    <div className='section__padding' ref={ref}>
      <div className='AETE--container container' id="AETE">
        <div className='row AETE--content'>
          <div className='col-lg black__text'><h1>Andthen Enterprise <br/>+ Tecnatives EMS</h1>
          { content.p && content.p.map((arr) => <p className={language} key={arr}>{arr}</p>)}
          </div>
          <div className='col-sm'>
          </div>
        </div>
      </div>
    </div>
  )
})

const IntroducingTecnative = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/it.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
  useEffect(() => {
    const images = gsap.utils.toArray(".IT--img"),
    tl = gsap.timeline({repeat: -1}),
    fadeDuration = 0.5,
    stayDuration = 1.2;
    // show the first one
    gsap.set(images[0], {autoAlpha: 1});

    // fade each one in successively (in a staggered fashion) EXCEPT the first one (because it's already visible)
    tl.to(images.slice(1), {delay: stayDuration, autoAlpha: 1, duration: fadeDuration, stagger: stayDuration + fadeDuration})
    // hide each one after the next one finishes fading in on top of it. Exclude the final image because we'll handle the crossfade with the first image with a tween at the end.
    .to(images.slice(0, images.length-1), {autoAlpha: 0, duration:0.01, stagger: stayDuration + fadeDuration}, stayDuration + fadeDuration)
    // show the first image (but it won't be visible yet because the last image is on top of it)
    .set(images[0], {autoAlpha: 1})
    // now fade out the last image so that the first one is showing again
    .to(images[images.length-1], {autoAlpha: 0, duration: fadeDuration}, "+=" + stayDuration);
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className="IT--container gs-IT--container section__padding_small">
      <div className='IT--content_container container-fluid'>
        <div className='row'>
          <div className='IT--img_wrapper col-sm-6'>
            <img className='IT--img' src={introTecImg6}/>
            <img className='IT--img' src={introTecImg5}/>
            <img className='IT--img' src={introTecImg4}/>
            <img className='IT--img' src={introTecImg3}/>
            <img className='IT--img' src={introTecImg2}/>
            <img className='IT--img' src={introTecImg1}/>
          </div>
          <div className='col-sm-6 IT--text_wrapper bold-green__text grey__medium'>
            <div className='IT--text-content'>
              <h5>Tecnatives EMS</h5>
              { content.p1 && content.p1.map((arr) => <h1 className={language} key={arr}>{arr}</h1>)}
              <h5>{content.l2}</h5>
              { content.p2 && content.p2.map((arr) => <h1 className={language} key={arr}>{arr}</h1>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WirelessFreedom = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/wf.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])

  useEffect(() => {
    const pin1 = window.innerWidth < 992 ? "none" : ".gs-text-content";
    const pin2 = window.innerWidth < 992 ? "none" : ".gs-text-content-2";
    const scrollEnd = window.innerWidth < 480 ? "+=200" : 
    window.innerWidth < 992 ? "+=100" : "+=500";
    const opacity = window.innerWidth < 992 ? 1 : 0;
    gsap.set(".text-content--2", {opacity:opacity})
    const t11 = gsap.timeline({
      scrollTrigger: {
        delay:1,
        toggleActions: "restart pause reverse pause",
        trigger: ".gs-text-content",
        pin:pin1,
        scrub: 5,
        start: "top 25%",
        end: scrollEnd
      }
    })
    t11.to(".text-content--1", {opacity:opacity},1)
    t11.to(".text-content--2", {opacity:1},1)
    const t12 = gsap.timeline({
      scrollTrigger: {
        delay:1,
        toggleActions: "restart pause reverse pause",
        trigger: ".gs-text-content-2",
        pin:pin2,
        scrub: 5,
        start: "top 25%",
        end: scrollEnd
      }
    })
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className="WF--container section__padding_small" id="WF">
      <div className='WF--content_container container-fluid gs--bg'>
        <div className='row'>
          <div className='col-sm-6'>
              <Gallery list={wirelessFreedomList} gsGalleryIdName="wirelessFreedomGallery" numOfRColInMobile={mobile2Cols}/>
          </div>
          <div className='col-sm-6'>
            <div className=" text-content">
              <div className='gs-text-content text-content--1 grey__medium section__padding'>
              <h1 className={`title__black ${language}`}>{content.l1}</h1>
              <h5 className={language}>{content.p1}</h5>
              
              <div className='bold-green__text mt-5 mb-4'>
                <h2 className={language}>{content.p2}</h2>
              </div>
              
              <ul className='no__bullets'>
              { content.p3 && content.p3.map((arr) => (<li className={`icon__check ${language}`} key={arr.id}>{arr.p}</li>))}
              </ul>
              </div>
              <div className='gs-text-content-2 text-content--2 bold-green__text grey_medium section__padding'>
                <h5 className={`mb-4 ${language}`} >{content.p4}</h5>
                {content.p5 && content.p5.map((arr) => (<h1 className={language} key={arr}>{arr}</h1>))}
                <h5 className={`mt-4 ${language}`}>{content.p6}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MuscleUpReduceFat = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/murf.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])

  const scrollStart = window.innerWidth < 480 ? "top 5%" : "top top";
  const scale = window.innerWidth < 992 ? 1 : 1.2;
  const x = window.innerWidth < 992 ? 0 : 60;
  useEffect(() => {
    gsap.set('#MURFcard1', { opacity: 0})
    gsap.set('#MURFcard2', { opacity: 0})
    gsap.set('#MURFcard3', { opacity: 0})
    gsap.set('#MURFcard-content1-desc', { opacity: 0,height: 0})
    gsap.set('#MURFcard-content2-desc', { opacity: 0,height: 0})
    gsap.set('#MURFcard-content3-desc', { opacity: 0,height: 0})
    gsap.timeline({
      scrollTrigger: {
        trigger: ".MURF--animation",
        pin: ".MURF--container",
        start: scrollStart,
        end: "+=2000",
        scrub: 1
      }
    })
    // .to('#MURFcard1', { duration: 0.5, opacity: 1, ease: "none" }, 0)
    .to('#MURFcard-content1-desc', { duration: 1, opacity: 1, ease: "none", height: 120}, 0)
    .to('#MURFcard-content1', { duration: 0.5, scale:scale , x:x, ease: "none" }, 0)
    // .to('#MURFcard1', { duration: 0.5, opacity: 0, ease: "none" }, 1)
    .to('#MURFcard-content1', { duration: 0.5, scale:1 , x:0, ease: "none" }, 1)
    .to('#MURFcard-content1-desc', { duration: 0.5, opacity: 0, ease: "none" ,height: 0}, 1)

    // .to('#MURFcard2', { duration: 0.5, opacity: 1, ease: "none" }, 2)
    .to('#MURFcard-content2-desc', { duration: 1, opacity: 1, ease: "none" , height: 120}, 2)
    .to('#MURFcard-content2', { duration: 0.5, scale:scale , x:x, ease: "none" }, 2)
    // .to('#MURFcard2', { duration: 0.5, opacity: 0, ease: "none" }, 3)
    .to('#MURFcard-content2', { duration: 0.5, scale:1 , x:0, ease: "none" }, 3)
    .to('#MURFcard-content2-desc', { duration: 0.5, opacity: 0, ease: "none" ,height: 0}, 3)

    // .to('#MURFcard3', { duration: 0.5, opacity: 1, ease: "none" }, 4)
    .to('#MURFcard-content3-desc', { duration: 1, opacity: 1, ease: "none" , height: 120}, 4)
    .to('#MURFcard-content3', { duration: 0.5, scale:scale , x:x, ease: "none" }, 4)
    // .to('#MURFcard3', { duration: 0.5, opacity: 0, ease: "none" }, 5)
    .to('#MURFcard-content3', { duration: 0.5, scale:1 , x:0, ease: "none" }, 5)
    .to('#MURFcard-content3-desc', { duration: 0.5, opacity: 0, ease: "none" ,height: 0}, 5)
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className='section__padding' id="MURF">
      <div className='container MURF--container'>
        <div className='row MURF--animation'>
          <div className='col-md'>
            <div className='bold-green__text'>
                <div className='MURF--card' id='MURFcard1'></div>
                <div className='MURF--card-content' id='MURFcard-content1'>
                    <img src={muscleIcon}></img>
                    <h2 className={language}>{ content.p1 }</h2>
                </div>
                <div className='MURF--card-content-desc' id='MURFcard-content1-desc'>
                    { content.p1Desc && content.p1Desc .map((arr) => (<p className={language} key={arr}>{arr}</p>))}
                </div>
                <div className='MURF--card' id='MURFcard2'></div>
                <div className='MURF--card-content' id='MURFcard-content2'>
                    <img src={enduranceIcon}></img>
                    <h2 className={language}>{ content.p2 }</h2>
                </div>
                <div className='MURF--card-content-desc' id='MURFcard-content2-desc'>
                    { content.p2Desc && content.p2Desc .map((arr) => (<p className={language} key={arr}>{arr}</p>))}
                </div>
                <div className='MURF--card' id='MURFcard3'></div>
                <div className='MURF--card-content' id='MURFcard-content3'>
                    <img src={reduceFatIcon}></img>
                    <h2 className={language}>{ content.p3 }</h2>
                </div>
                <div className='MURF--card-content-desc' id='MURFcard-content3-desc'>
                    { content.p3Desc && content.p3Desc .map((arr) => (<p className={language} key={arr}>{arr}</p>))}
                </div>
            </div>
          </div>
          <div className='col-md mt-3 mt-md-0 mb-md-3'>
            <h1 className={`title__black ${language}`}>{ content.l1 }</h1>
            <ul className='no__bullets'>
            { content.p4 && content.p4.map((arr) => (<li className={`icon__check ${language}`} key={arr.id}>{arr.p}</li>)) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProvenAndSafeTechnology = () => {
  const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/past.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
    ScrollTrigger.refresh();
  return(
    <div className='section__padding_small' id="PAST">
      <div className='PAST--container gs-PAST-bgColor'>
        <div className='container'>
          <div className='row'>
            <h1 className={`title__white PAST--title ${language} ms-4`}>
            { content.l && content.l.map((arr) => (<span key={arr}>{arr}<br/></span> )) }</h1>
          </div>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='PAST-img--container'>
                {/* <ImageReveal src={provenSafeTec1} alt="" scrollTrigger=".PAST-img--container"/> */}
                <div className='imgReveal--container'>
                  <img className="imgReveal"  src={provenSafeTec1}/>
                </div>
                <img className="PAST-img-2" alt="" src={provenSafeTec2}/>
              </div>
            </div>
            <div className='col-lg-6 PAST--content mt-5 mt-lg-0 ms-4'>
            { content.p && content.p.map((arr) => (<p className={language} key={arr}>{arr}</p>)) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const NtSystem = () => {
  const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/tecnativesPage/ns.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
  useEffect(() => {
    const scrollStart = window.innerWidth < 992 ? "top top" : "top 25%";
    const scrollEnd = window.innerWidth < 992 ? "+=1" : 
    window.innerWidth < 1024 ? "+=550" : "+=600";
    const pin = window.innerWidth < 992 ? false : ".gs-NS-text-content";
    gsap.timeline({
      scrollTrigger: {
        delay:1,
        toggleActions: "restart pause reverse pause",
        trigger: ".gs-NS-text-content",
        pin:pin,
        scrub: 5,
        start: scrollStart,
        end: scrollEnd
      }
    })
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className='section__padding' id="NS">
      <div className='container'>
        <div className='row NS--content'>
          <div className='col-lg-4 gs-NS-text-content mb-lg-4'>
            <h1 className={`title__black ${language}`}>
                { content.l && content.l.map((arr) => (<span key={arr}>{arr}<br/></span> )) }
            </h1>
            <p className={language}>{content.p}</p>
          </div>
          <div className='col-lg-1'>
          </div>
          <div className='col-lg-7' >
              <Gallery list={ntSyetemList} gsGalleryIdName="ntSyetemGallery" numOfRColInMobile={mobile1Col} />
          </div>
        </div>
      </div>
    </div>
  )
}

if (!customElements.get('tecnativesPage')) { customElements.define('tecnativesPage', TecnativesPage); }
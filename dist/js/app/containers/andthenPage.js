"use strict";

const ourBusinessImg = '../../../../assets/images/andthen/our_business.webp';

const AndthenPage = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    ScrollTrigger.refresh();
    console.log("ScrollToTopOnMount")
    return null;
  }
  return (
    <div>
      <div id="athTop"></div>
      <ScrollToTopOnMount/>
      <ArrowBtn btnType="scrollTopBtn" />
      <OurBusiness />
      <AboutUs />
      <Contact />
    </div>
  )  
}
const OurBusiness = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/andthenPage/ob.json")
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
    gsap.set(".OB-img--container", {autoAlpha: 0})
    gsap.timeline({
      scrollTrigger: {
        trigger: ".OB--container",
        start: () => innerHeight * 0.5,
        end: () => innerHeight * 1,
        scrub: 1
      }
    })
    .to(".OB-img--container", {duration: 0.05, autoAlpha: 1}, 0.001)
    .from(".OB-img--container", {
      scale: 0.8,
      ease: "none"
      // y:100
    });

  }, []);
  ScrollTrigger.refresh();
  return(
    <div>
      <div className='section__padding' id="OB">
        <div className='container OB--container'>
          <div className='row mb-5'>
            <p className="subtitle">Andthen Enterprise</p>
            <h1 className={`title__black mb-5 ${language}`}>{content.l}</h1>
            <div className='col-sm-1'></div>
            <div className='col-lg-7'>
                { content.p && content.p.map((arr) => <p className={language} key={arr}>{arr}</p>)}
            </div>
          </div>
        </div>
      </div>
      <div className='OB-img--container'>
          <img alt="our business" src={ourBusinessImg} />
      </div>
    </div>
  )
}

const AboutUs = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/andthenPage/au.json")
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
    <div className='AU--container section__padding_small' id="AU">
      <div className='gradient--bg section__padding'>
      <div className='container AU--content '>
        <div className='row mb-5'>
          <p className='subtitle'>Andthen Enterprise</p>
          <h1 className={`title__black ${language}`}>{content.l}</h1>
        </div>
        <div className='row mb-5'>
          <div className='col-lg-2'>
            <p className={`subtitle2 ${language}`}>{content.p1}</p>
          </div>
          <div className='col-lg-8 black__text'>
            <h1 className={language}>{content.p1desc}</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-2'>
            <p className={`subtitle2 ${language}`}>{content.p2}</p>
          </div>
          <div className='col-lg-7'>
            { content.p2desc && content.p2desc.map((arr) => <p className={language} key={arr}>{arr}</p>)}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
if (!customElements.get('andthenPage')) { customElements.define('andthenPage', AndthenPage); }
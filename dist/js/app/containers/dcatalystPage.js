"use strict";
const introDcaImg = '../../../../assets/images/dcatalyst/eCommunication_solution.webp';
const emailIcon = '../../../../assets/images/dcatalyst/email-icon.svg';
const shareIcon = '../../../../assets/images/dcatalyst/share-icon.svg';
const callCenterIcon = '../../../../assets/images/dcatalyst/call-center-icon.svg';
const smsIcon = '../../../../assets/images/dcatalyst/sms-icon.svg';
const surveyIcon = '../../../../assets/images/dcatalyst/survey-icon.svg';
const qrIcon = '../../../../assets/images/dcatalyst/qr-icon.png';
const dynamicContent = '../../../../assets/images/dcatalyst/dynamic_content.webp';
const dynamicContentPersonalised = '../../../../assets/images/dcatalyst/dynamic_content_personalised.webp';
const dynamicContentQr = '../../../../assets/images/dcatalyst/dynamic_content_qr.webp';
const mobileInbox01 = '../../../../assets/images/dcatalyst/mobile-inbox-01.png';
const mobileInbox02 = '../../../../assets/images/dcatalyst/mobile-inbox-02.png';


const DcatalystPage = () => {
    function ScrollToTopOnMount() {
        useEffect(() => {
        gsap.to(window, {scrollTo: 0});
        }, []);
        ScrollTrigger.refresh();
        console.log("ScrollToTopOnMount")
        return null;
        
    }
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    const mainHeaderImgFadeOut = window.innerHeight > window.innerWidth && window.innerWidth < 920 
    ? ".AED--container" : ".AED--container"
  return (
    <div id="dcatalystPage">
      <ScrollToTopOnMount/>
      <div id="dcaTop"></div>
      <TopDca />
      <ArrowBtn btnType="scrollTopBtn" />
      <Header 
        headerImgSlideIn =".gs-dcaStart" 
        secHeaderImgFadeOut=".dcaHeaderContent" 
        mainHeaderImgFadeOut={mainHeaderImgFadeOut}
        headerImg1={dcaHeaderImg} 
        headerImg2={dcaHeaderImg} 
        headerImg3={tecHeaderImg1}
        headerImg3Link="/">
        <div className="dcaHeaderContent"> 
          <h1 className='title__dBlue'>Andthen Enterprise + Dcatalyst</h1>
        </div>
      </Header>
      <AndthenEnterpriseDcatalyst/> 
      <IntroducingDcatalyst />
      <EmailWithDynamicContent />
      <MobileInbox />
      <DcatalystCoreTechnology />
      <CTA url="http://www.dcatalyst.biz/" btnStyle1="btn--DcaColor">
        {language == "en"?
        <a href='http://www.dcatalyst.biz/' target="_blank">
            <p className='en'>Please visit&nbsp;
                <span className="dca--dBlue">http://www.dcatalyst.biz/</span>
                <br/>for more information
            </p>
        </a>
        :
        <a href='http://www.dcatalyst.biz/' target="_blank">
            <p className="th">การจัดการระบบทางเลือก ทางการสื่อสาร และการวางระบบ
                <br/>ข้อมูลเพิ่มเติม &nbsp;
                <span className="dca--dBlue">http://www.dcatalyst.biz/</span>
            </p>
        </a>
        }
      </CTA>
      <Contact />
    </div>
  )  
}
const TopDca = () => {return(<div className="gs-dcaStart"></div>)}
const Top2Dca = () => {return(<div className="gs-dcaSec"></div>)}

const AndthenEnterpriseDcatalyst = React.forwardRef((props, ref) => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/dcatalystPage/aed.json")
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
    <div className='section__padding' id="AED">
      <div className='AED--container container' ref={ref}>
        <div className='row AED--content'>
          <div className='col-lg black__text'><h1>Andthen Enterprise + Dcatalyst</h1>
            { content.p && content.p.map((arr) => <p className={language} key={arr}>{arr}</p>)}
          </div>
          <div className='col-lg'>
          </div>
        </div>
      </div>
    </div>
  )
})

const IntroducingDcatalyst = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/dcatalystPage/id.json")
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
    <div className="ID--container" id="ID">
      <div className='ID--content container-fluid'>
        <div className='row section__padding_small'>
          <div className='ID--img_wrapper position-relative p-0'>
            <img src={introDcaImg} />
            <div className="ID--text_wrapper">
              <div className="title__white">Dcatalyst <br/>e-Communication <br/>Solutions</div>
              <h3 className={`white--text ${language}`}>{content.p1}</h3>
            </div>
          </div>
        </div>
        <div className='row section__padding'>
          <div className="col-lg-6"></div>
          <div className="col-lg-5 z-2">
            { content.p2 && content.p2.map((arr) => <p className={language} key={arr}>{arr}</p>)}
          </div>
        </div>
        {/* icon */}
        <div className="container">
          <div className="row bold-dBlue__text">
            <h1 className={language}>{ content.l3 && content.l3.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mt-2'>
            { content.p3 && content.p3.map((arr) => 
                <div className='col' key={arr.img}>
                    <div className="card shadow-lg">
                        <div className="ID--icon"><img src={arr.img}/></div>
                        <p className={language}>{arr.p}</p>
                    </div>
                </div>
            )}
          </div>
        </div>
    </div>
  </div>
  )
}

const EmailWithDynamicContent = () => {

    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/dcatalystPage/ewdc.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
    
    const scrollStart = window.innerWidth < 992 ? "top 12%" :
    window.innerWidth < 480 ? "top 15%" : "top 8%";
    const y1 = window.innerWidth < 480 ? -140 : -170;
    const y2 = window.innerWidth < 480 ? -290 : -340;
    const y3 = window.innerWidth < 480 ? -430 : -510;
    const y4 = window.innerWidth < 480 ? -580 : -680;
    const pin = window.innerWidth < 1200 ?  ".EWDC--content" :  ".EWDC--img_wrapper";
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: pin,
                pin: true,
                start: scrollStart,
                end: "+=1600",
                scrub: 5
            }
        })
        .to('#text1', { opacity: 0, ease: "none" }, 1)
        .to('.gs-text', {y: y1, ease: "none" }, 1)
        .to('#text2', {opacity: 0, ease: "none" }, 2)
        .to('.gs-text', {y: y2, ease: "none" }, 2)
        .to('#text3', { opacity: 0, ease: "none" }, 3)
        .to('.gs-text', {  y: y3, ease: "none" }, 3)
        .to('#EWDC-img1', { opacity: 0, ease: "none" }, 3)
        .to('#text4', { opacity: 0, ease: "none" }, 4)
        .to('.gs-text', {  y: y4, ease: "none" }, 4)
        .to('#EWDC-img2', { opacity: 0, ease: "none" }, 4)
        .to('#text5', { opacity: 1, ease: "none" }, 5)
    }, []);
    ScrollTrigger.refresh();

   
    return(
        <div className="EWDC--container section__padding" id="EWDC">
            <div className='EWDC--content container'>
                <div className="grey__medium">
                    <p style={{marginBottom: 0}}>{content.l1}</p>
                    <h1 className={`title__black ${language} ${language == "en" ? "mt-0" : "mt-4"}`}>{ content.l2 }</h1>
                    <h5 className={language}>{ content.l3 && content.l3.map((arr) => <span key={arr}>{arr}<br/></span>)}</h5>
                    <div className='EWDC--img_wrapper' >
                        <img src={dynamicContentQr} id="EWDC-img3" />
                        <img src={dynamicContentPersonalised} id="EWDC-img2"/>
                        <img src={dynamicContent} id="EWDC-img1" />
                        <div className="bold-white__text text-center text--wrapper gs-text">
                            <h1 id="text1" className={language}>{ content.p1 && content.p1.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
                            <h1 id="text2" className={language}>{ content.p2 && content.p2.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
                            <h1 id="text3" className={language}>{ content.p3 && content.p3.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
                            <h1 id="text4" className={language}>{ content.p4 && content.p4.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
                            <h1 id="text5" className={language}>{ content.p5 && content.p5.map((arr) => <span key={arr}>{arr}<br/></span>)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MobileInbox = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/dcatalystPage/mi.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])

  const xPercent = window.innerWidth < 992 ? 10 : 30;
  useEffect(() => {
    gsap.set('#message', { opacity: 0, yPercent:30, xPercent:30})
    gsap.set('#phone', { opacity: 0})
    gsap.timeline({
      scrollTrigger: {
        trigger: ".MI--container",
        pin: ".MI--container",
        start: "top 15%",
        end: "+=800",
        scrub: 2
      }
    })
    .to('#message', { opacity: 1, ease: "none" ,yPercent:50, xPercent:xPercent})
    .to('#message', { duration:0.5, opacity: 1, ease: "none" ,yPercent:0, xPercent:0}, 0)
    .to('#phone', {duration:0.5, opacity: 1, ease: "none" }, 1)
    .to('#phone', {opacity: 1, ease: "none" }, 2)
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className="MI--container section__padding" id="MI">
    <div className='MI--content container'>
      <div className='row'>
      <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div className="MI--img_wrapper">
            <img src={mobileInbox01} id="message"/>
            <img src={mobileInbox02} id="phone"/>
          </div>
        </div>
        <div className="col-sm-6 bold-purple__text gs--mi-text">
          <h1 className={`title__black ${language}`} style={{marginBottom: '3px'}}>{ content.l}</h1>
          <h2 className={`mb-sm-5 mb-4 ${language}`}>{ content.p1}</h2>
          { content.p2 && content.p2.map((arr) => <p className={language} key={arr}>{arr}</p>)}
        </div>
      </div>
    </div>
  </div>
  )
}

const DcatalystCoreTechnology = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/dcatalystPage/dct.json")
      .then(response => response.json())
      .then(data => {
        if (language == "en"){
          setContent(data.en)
        }else if(language == "th"){
          setContent(data.th)
        }
      })
    },[language])
  const pin = window.innerWidth < 992 ? false : ".gs-title";
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        delay:1,
        toggleActions: "restart pause reverse pause",
        trigger: ".gs-title",
        pin:pin,
        scrub: 1,
        start: "top 22%",
        end: "+=500"
      }
    })
  }, []);
  ScrollTrigger.refresh();
  return(
    <div className="section__padding_small" id="DCT">
      <div className="DCT--container section__padding">
        <div className='DCT--content container-fluid'>
          <div className="row pb-5">
            <div className="col-xl-1"></div>
            <div className="col-lg-3 gs-title title">
              <p className="DCT--subtitle">Dcatalyst</p>
              <h1 className={`title__purple ${language}`}>{ content.l}</h1>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 bold-white__text scolling--text">
                { content.p && content.p.map((arr) => <h2 className={language} key={arr}>{arr}</h2>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


if (!customElements.get('dcatalystPage')) { customElements.define('dcatalystPage', DcatalystPage); }

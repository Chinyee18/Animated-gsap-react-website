"use strict";

const BenefitsofEMSImg = '../../../../assets/images/tecnatives/benefitsofEMS.jpg';
const arrow = '../../../../assets/images/tecnatives/arrow3.png';


const BenefitsofEMS = () => {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        ScrollTrigger.refresh();
        return null;
    }

    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/moreInfoOnNt/boe.json")
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
        <div>
        <Menubar2/>
          <ScrollToTopOnMount/>
          <ArrowBtn btnType="scrollTopBtn" />
          <div className='section__padding'>
            <div className='container boe--container' >
              <div className='row boe--content '>
                <h1 className={`title__purple ${language}`} style={{marginBottom: '3px'}}>{ content.la}</h1>
                <div className="bold-purple__text mb-4"><h2 className={language}>{ content.lb }</h2></div>
                <div className='col-lg-4'>
                  <div className={`box ${window.innerWidth < 992  ? 'arrow-bottom' : 'arrow-right'}`} id="box3">
                    <div className="bold-white__text"><h2 className={language}>{ content.l1 }</h2></div>
                    { content.p1 && content.p1.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className={`box ${window.innerWidth < 992  ? 'arrow-bottom' : 'arrow-right'}`} id="box2">
                  <div className="bold-white__text"><h2 className={language}>{ content.l2 }</h2></div>
                    { content.p2 && content.p2.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div class="box " id="box1">
                  <div className="bold-white__text"><h2 className={language}>{ content.l3 }</h2></div>
                    { content.p3 && content.p3.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='section__padding green__bg mt-5'>
            <div className='container boe--container' >
              <div className='row boe--content green__bg pt-5'>
                <div className='col-lg-9'>
                  <div className="bold-white__text"><h2 className={language}>{ content.l4 }</h2></div>
                  <p className={language}>{ content.p4 }</p>
                </div>
                <div className='col-lg-7 mb-5 mt-4'>
                  <div className='box arrow-bottom' id="box6">
                    <div className="bold-white__text"><h2 className={language}>{ content.l4a }</h2></div>
                    <p className={language}>{ content.p4a }</p>
                  </div>
                  <div className='box arrow-bottom' id="box5">
                    <div className="bold-white__text"><h2 className={language}>{ content.l4b }</h2></div>
                    { content.p4b && content.p4b.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                   <div className='box' id="box4">
                    <div className="bold-white__text"><h2 className={language}>{ content.l4c }</h2></div>
                    { content.p4c && content.p4c.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                </div>
                <div className='col-lg-5 mb-5 mt-4'>
                  <img src={BenefitsofEMSImg}></img>
                </div>
              </div>
              <div className='other__page'>
                <Link to="nativeTraining">
                <div className='d-sm-flex mb-5 prev'>
                    <ArrowBtn btnType="ctaBtn" direction="left"/>
                    <p className="my-auto mx-3"> &nbsp;Previous</p>
                  </div>
                </Link>
                <Link to="howDoesItWork" >
                <div className='d-sm-flex mb-5 next text-end'>
                    <ArrowBtn btnType="ctaBtn" direction="right"/>
                    <p className="my-auto mx-3">Next &nbsp;</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}

if (!customElements.get('benefitsofEMS')) { customElements.define('benefitsofEMS', BenefitsofEMS); }
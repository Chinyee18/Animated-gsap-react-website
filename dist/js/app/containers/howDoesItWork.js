
"use strict";

const elec1Icon = '../../../../assets/images/tecnatives/elec1.png';
const elec2Icon = '../../../../assets/images/tecnatives/elec2.png';
const muscle1Icon = '../../../../assets/images/tecnatives/muscle1.png';
const muscle2Icon = '../../../../assets/images/tecnatives/muscle2.png';
const strength1Icon = '../../../../assets/images/tecnatives/strength1.png';
const strength2Icon = '../../../../assets/images/tecnatives/strength2.png';
const arrow1 = '../../../../assets/images/tecnatives/arrow1.png';
const arrow2 = '../../../../assets/images/tecnatives/arrow2.png';


const HowDoesItWork = () => {
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
      fetch("./dist/lang/moreInfoOnNt/hdiw.json")
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
            <div className='section__padding white__bg hdiw--white'></div>
            <div className='section__padding green__bg'>
              <div className='container hdiw--container' >
                <div className='row hdiw--content text-center'>
                    <h1 className={`title__white ${language} mb-5`}>{ content.l }</h1>
                  <div className='col-lg-3'>
                    <div className="top--title">
                      <img className='icon' src={elec1Icon} />
                      <div className="bold-white__text"><h2 className={language}>{ content.l1a }</h2></div>
                    </div>
                    <img className='icon2' src={elec2Icon} />
                    <p className={language}>{ content.p1a }</p>
                  </div>
                  <div className='col-lg-1'>
                    <img className='arrow' src={arrow1} />
                  </div>
                  <div className='col-lg-3'>
                    <div className="top--title">
                      <img className='icon' src={elec1Icon} />
                      <div className="bold-white__text"><h2 className={language}>{ content.l1b }</h2></div>
                    </div>
                    <img className='icon2' src={elec2Icon} />
                    <p className={language}>{ content.p1b }</p>
                  </div>
                  <div className='col-lg-1'>
                    <img className='arrow' src={arrow1} />
                  </div>
                  <div className='col-lg-3'>
                    <div className="top--title">
                      <img className='icon' src={elec1Icon} />
                      <div className="bold-white__text"><h2 className={language}>{ content.l1c }</h2></div>
                    </div>
                    <img className='icon2' src={elec2Icon} />
                    <p className={language}>{ content.p1c }</p>
                  </div>
                </div>
                <div className='row hdiw--content text-center'>
                  <div className='col-lg-3 blue--bg'>
                    <div className="bold-white__text"><h2 className={language}>{ content.l2a }</h2></div>
                    <br/>{ content.p2a && content.p2a.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                  <div className='col-lg-1'>
                    <img className='arrow' src={arrow2} />
                  </div>
                  <div className='col-lg-4 blue--bg'>
                    <div className="bold-white__text"><h2 className={language}>{ content.l2b }</h2></div>
                    <br/>{ content.p2b && content.p2b.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                  <div className='col-lg-1'>
                    <img className='arrow' src={arrow2} />
                  </div>
                  <div className='col-lg-3 blue--bg'>
                    <div className="bold-white__text"><h2 className={language}>{ content.l2c }</h2></div>
                    <br/>{ content.p2c && content.p2c.map((arr) => <p className={language} key={arr}>{arr}</p>)}
                  </div>
                </div>
                <div className='other__page'>
                  <Link to="benefitsofEMS">
                  <div className='d-sm-flex mb-5 prev'>
                      <ArrowBtn btnType="ctaBtn" direction="left"/>
                      <p className="my-auto mx-3"> Previous</p>
                    </div>
                  </Link>
                  <Link to="ntTechnology" >
                  <div className='d-sm-flex mb-5 next text-end'>
                      <ArrowBtn btnType="ctaBtn" direction="right"/>
                      <p className="my-auto mx-3">Next </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    )
}

if (!customElements.get('howDoesItWork')) { customElements.define('howDoesItWork', HowDoesItWork); }
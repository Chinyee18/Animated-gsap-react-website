
"use strict";

const ntTechnologyImg = '../../../../assets/images/tecnatives/NTTechnology.jpg';


const NtTechnology = () => {
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
      fetch("./dist/lang/moreInfoOnNt/ntt.json")
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
            <div className='section__padding' id="Nt">
                <div className='container ntt--container' >
                    <div className='row ntt--content'>
                        <div className='col-lg-7'>
                            <div className='white__bg'> 
                                <h1 className={`title__green ${language}`}>{ content.l }</h1>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l1 }</h2></div>
                                <p className={language}>{ content.p1 && content.p1.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l2 }</h2></div>
                                <p className={language}>{ content.p2 && content.p2.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l3 }</h2></div>
                                <p className={language}>{ content.p3 && content.p3.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l4 }</h2></div>
                                <p className={language}>{ content.p4 && content.p4.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l5 }</h2></div>
                                <p className={language}>{ content.p5 && content.p5.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l6 }</h2></div>
                                <p className={language}>{ content.p6 && content.p6.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l7 }</h2></div>
                                <p className={language}>{ content.p7 && content.p7.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l8 }</h2></div>
                                <p className={language}>{ content.p8 && content.p8.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l9 }</h2></div>
                                <p className={language}>{ content.p9 && content.p9.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                            <div className="green__bg">
                                <div className="bold-white__text"><h2 className={language}>{ content.l10 }</h2></div>
                                <p className={language}>{ content.p10 && content.p10.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            </div>
                        </div>
                        <div className='col-lg-5 tnt-img'>
                            <img className='sticky-sm-top' src={ntTechnologyImg} />
                        </div>
                    </div>
                    <div className='other__page'>
                        <Link to="howDoesItWork">
                        <div className='d-sm-flex mb-5 prev'>
                            <ArrowBtn btnType="ctaBtn" direction="left"/>
                            <p className="my-auto mx-3"> &nbsp;Previous</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

if (!customElements.get('ntTechnology')) { customElements.define('ntTechnology', NtTechnology); }
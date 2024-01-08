"use strict";

const NativeTrainingImg = '../../../../assets/images/tecnatives/nativeTraining.jpg';


const NativeTraining = () => {
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
      fetch("./dist/lang/moreInfoOnNt/tnt.json")
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
                <div className='container tnt--container' >
                    <div className='row tnt--content'>
                        <div className='col-lg-7'>
                            <div className='white__bg'> 
                                <h1 className={`title__green ${language}`}>{ content.l }</h1>
                                <div className={`bold-green__text ${language}`}><h2>{ content.l1 }</h2></div>
                            </div>
                            
                            <p className={`green__bg ${language}`}>{ content.p1 && content.p1.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            <p className={`green__bg ${language}`}>{ content.p2 && content.p2.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                            <p className={`green__bg ${language}`}>{ content.p3 && content.p3.map((arr) => (<span key={arr}>{arr}<br/><br/></span> )) }</p>
                        </div>
                        <div className='col-lg-5 tnt-img'>
                            <img className='sticky-sm-top' src={NativeTrainingImg} />
                        </div>
                    </div>
                    <div className='other__page'>
                        <div></div>
                        <Link to="benefitsofEMS" >
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

if (!customElements.get('nativeTraining')) { customElements.define('nativeTraining', NativeTraining); }
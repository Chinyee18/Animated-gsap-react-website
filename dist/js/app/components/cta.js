
"use strict";

const CTA = ({url,children,btnStyle1,btnChildren,btnStyle2,btnOnClick,btnStyle3}) => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

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
    <div className='CTA--container section__padding'>
      <div className='container'>
        <div className='text-center'><h1 className={`title__black ${language}`}>{content.l}</h1></div>
        <div className='CTA--content'>
          <div className='CTA--text'>
            {children}
          </div>
          {/* arrow button at right side of children */}
          {btnStyle1?
          (<a href={url} target="_blank">
            <ArrowBtn btnStyle={btnStyle1} btnType="ctaBtn"/>
          </a>):null}
        </div>
        {/* arrow button at below children */}
        {btnStyle3 ? 
        (<div className='CTA--content'>
            <a href={url} target="_blank">
                <ArrowBtn btnStyle={btnStyle3} btnType="ctaBtn"/>
            </a>
        </div>): null}
        {/* button at below children */}
        {btnStyle2 ?
        (<div className='CTA--content mt-5'>
            <Button children={btnChildren} 
            btnStyle={btnStyle2} 
            onClick={btnOnClick} />
        </div>): null}
      </div>
    </div>
  )
}

if (!customElements.get('cta')) { customElements.define('cta', CTA); }
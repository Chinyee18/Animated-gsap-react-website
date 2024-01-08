"use strict"
const Contact = () => {
    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/contact.json")
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
      <div className='section__padding CU--container py-5' id="CU">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <h1 className={`title__black ${language}`}>{content.l}</h1>
            </div>
            <div className='col-lg-4 CU--content'>
                <p className={language}>{content.p1}</p>
                <p className={language}>{ content.p2 && content.p2.map((arr) => (<span key={arr}>{arr}<br/></span>)) }
                    {/* Andthen Enterprise,<br/>No. 725, S-Metro, <br/>20th floor, Sukhumvit Road, <br/>Khlong Toey Nua,<br/>Bangkok, 10110<br/> */}
                    <br/>{content.p3}
                    <br/><br/><a href="mailto: enquiries@andthen.co.th" target="_blank"></a>{content.p4}
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
if (!customElements.get('contact')) { customElements.define('contact', Contact); }
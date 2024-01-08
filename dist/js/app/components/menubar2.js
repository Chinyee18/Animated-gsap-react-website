"use strict";

const Menubar2 = ({onClickScrollTo}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
        setIsActive(!isActive);
    }

    const closeMenu = () => {
        setNavbarOpen(false);
        setIsActive(false);
        //window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        //menubar change background color at end of .AETE--container
        gsap.set(".gs-bgColor", {backgroundColor: 'transparent'});
        gsap.to(".gs-bgColor", { backgroundColor: '#fff', ease: "none",
          scrollTrigger: {
            // trigger: `${bgColorFadeOut}`,
            start: "+=100",
            end: "+=100",
            toggleActions: "restart pause reverse pause",
            scrub: 1
          }
        })
    }, []);

    const [content, setContent] = useState({});
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;

    useEffect(() => {
      fetch("./dist/lang/moreInfoOnNt/menubar2.json")
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
           <nav className="menubar gs-bgColor menubar--2">
                <div className="menubar--container" >
                    <NavLink to={"/nativeTraining"} className="nav--link me-4" activeClassName="active" exact>
                      <p className={language}>{ content.p1 }</p>
                    </NavLink>
                    <NavLink to={"/benefitsofEMS"} className="nav--link me-4" activeClassName="active" exact>
                      <p className={language}>{ content.p2 }</p>
                    </NavLink>
                    <NavLink to={"/howDoesItWork"} className="nav--link me-4" activeClassName="active" exact>
                      <p className={language}>{ content.p3 }</p>
                    </NavLink>
                    <NavLink to={"/ntTechnology"} className="nav--link" activeClassName="active" exact>
                      <p className={language}>{ content.p4 }</p>
                    </NavLink>
                </div>
          </nav>
          
        </div>
      ) 
}

if (!customElements.get('menubar2')) { customElements.define('menubar2', Menubar2); }
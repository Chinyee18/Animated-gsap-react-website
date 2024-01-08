"use strict";

const andthenLogo = '../../../../assets/images/logo/andthen_logo.svg';
const tecnativesLogo = '../../../../assets/images/logo/tecnatives-logo-Nt-black.svg';
const dcatalystLogo = '../../../../assets/images/logo/dcatalyst-logo-black.svg';

const Menubar = ({onClickScrollTo}) => {
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
    
    return (
        <div >
          <nav className="menubar gs-bgColor">
            {/* <div className='container'> */}
                <div className="menubar--container" >
                    <NavLink to="/andthen" activeClassName="active" className="ath--logo-container" exact>
                        <img src={andthenLogo} className="ath-logo logo" alt='' onClick={closeMenu}/>
                    </NavLink>
                    <NavLink to="/" activeClassName="active" className="tec--logo-container" exact>
                        <img src={tecnativesLogo} className="tec-logo logo" alt=''onClick={closeMenu}/>
                    </NavLink>
                    <NavLink to="/dcatalyst" activeClassName="active" className="dca--logo-container" exact>
                        <img src={dcatalystLogo} className="dca-logo logo" alt=''onClick={closeMenu}/>
                    </NavLink>
                    
                    <div className='mr-auto'>
                        <LanguageSelect />
                        {/* <div className="hamburger" onClick={handleToggle}>
                            <div className={`menu-icon ${isActive ? 'active' : ''}`}>
                                <input className="menu-icon__cheeckbox" type="checkbox" />
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            {/* </div> */}
          </nav>
          {/* mobile nav menu*/}
          {/* <div className={`menuNav ${navbarOpen ? "showMenu section__padding" : ""}`}>
            <Menulist onClickCloseMenu={handleToggle} onClickScrollTo={onClickScrollTo}/>
          </div> */}
        </div>
      ) 
}

if (!customElements.get('menubar')) { customElements.define('menubar', Menubar); }
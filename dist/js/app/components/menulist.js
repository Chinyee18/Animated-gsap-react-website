"use strict"
const tecnativeMenuList = [
    { link:"/", id : "#tecTop", menuText: "Andthen Enterprise + Tecnative EMS" },
    { link:"/", id : "#AETE", menuText: "Andthen Enterprise + Tecnative EMS" },
    { link:"/", id : "#IT", menuText: "Introducing Tecnative" },
    { link:"/", id : "#WF", menuText: "Wireless Freedom" },
    { link:"/", id : "#MURF", menuText: "Muscle up, Reduce Fat" },
    { link:"/", id : "#PAST", menuText: "Proven & Safe Technology" },
    { link:"/", id : "#NS", menuText: "Nt System" },
    { link:"/", id : "/", menuText: "Tecnative EMS Solution" },
    { link:"/", id : "#CU", menuText: "Contact Us" }
]
const dcatalystMenuList = [
    { link:"/dcatalyst", id : "#dcaTop", menuText: "Andthen Enterprise + Dcatalyst" },
    { link:"/dcatalyst", id : "#AED", menuText: "Andthen Enterprise + Dcatalyst" },
    { link:"/dcatalyst", id : "#ID", menuText: "Introducing Dcatalyst" },
    { link:"/dcatalyst", id : "#EWDC", menuText: "Email with Dynamic Content" },
    { link:"/dcatalyst", id : "#MI", menuText: "Mobile Inbox: More than jusy SMS" },
    { link:"/dcatalyst", id : "#DCT", menuText: "Dcatalyst Core Technology" },
    { link:"/dcatalyst", id : "#DES", menuText: "Dcatalyst eCommunication Solutions" },
    { link:"/dcatalyst", id : "#CU", menuText: "Contact Us" }
]
const andthenMenuList = [
    { link:"/andthen", id : "#athTop", menuText: "Andthen Enterprise" },
    { link:"/andthen", id : "#OB", menuText: "Our Business" },
    { link:"/andthen", id : "#AU", menuText: "About Us" },
    { link:"/andthen", id : "#CU", menuText: "Contact Us" }
]

const MList = (props) => { 
    const executeScroll = () => {
        document.querySelector(props.id).scrollIntoView({ behavior: "smooth" });
      };
      
    return (
        <li><Link to={props.link+props.id} onClick={executeScroll}>{props.menuText}</Link></li>
    );
  }

const Menulist = ({children, onClickCloseMenu, onClickScrollTo}) => {
    return(
        <div className='container menu--list'>
            <div className='row'>
                <div className={`col-md-4 logo--column ${children ? "showColumn" : "columnHidden"}`}>
                    {children}
                </div>
                <div className='col-md-4'>
                    <ul className='no__bullets' onClick={onClickCloseMenu}>
                        {tecnativeMenuList.map((p, i) => (
                            <MList {...p} key={i} onClick={onClickScrollTo}/>
                        ))} 
                    </ul>
                </div>
                <div className='col-md-4'>
                    <ul className='no__bullets' onClick={onClickCloseMenu}>
                        {dcatalystMenuList.map((p, i) => (
                            <MList {...p} key={i} onClick={onClickScrollTo} />
                        ))} 
                    </ul>
                </div>
            </div>
            <div className='row mt-3'>
                <div className={`col-md-4 logo--column ${children ? "showColumn" : "columnHidden"}`}></div>
                <div className='col-md-4'>
                    <ul className='no__bullets' onClick={onClickCloseMenu}>
                        {andthenMenuList.map((p, i) => (
                            <MList {...p} key={i} onClick={onClickScrollTo}/>
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    )
  }


if (!customElements.get('menulist')) { customElements.define('menulist', Menulist); }
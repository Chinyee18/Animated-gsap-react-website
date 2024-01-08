"use strict"

const andthenLogoFooter = '../../../../assets/images/logo/andthen_logo_text.svg';
const tecnativesLogoFooter = '../../../../assets/images/logo/tecnatives-logo-Nt-black.svg';
const dcatalystLogoFooter = '../../../../assets/images/logo/dcatalyst-logo-black.svg';

const Footer = ({onClickScrollTo}) => {
    return(
        <div className="section__padding footer--container pb-2">
            {/* <Menulist onClickScrollTo={onClickScrollTo}> */}
                <div className="logo--container">
                    <Link to="andthen" className="andthen--logo">
                        <img src={andthenLogoFooter}/>
                    </Link>
                    <Link to="/" className="tecnatives--logo">
                        <img src={tecnativesLogoFooter}/>
                    </Link>
                    <Link to="dcatalyst" className="dcatalyst--logo ">
                        <img src={dcatalystLogoFooter}/>
                    </Link>
                </div>
            {/* </Menulist> */}
            <div className="container text-sm-center mt-4">
                <p className="copyright-text">Copyright(c) Andthen Enterprise. All Rights Reserved</p>
            </div>
        </div>
    )
  }
if (!customElements.get('footer')) { customElements.define('footer', Footer); }
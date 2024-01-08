"use strict";
const ABSTYLE = ['btn--GreyColor', 'btn--TecColor', 'btn--DcaColor'];
const arrowDirection = ['right', 'left'];

const ArrowBtn = ({btnStyle, btnType, direction}) => {
    const checkBtnStyle = ABSTYLE.includes(btnStyle) ? btnStyle : ABSTYLE[0];
    const checkBtnDirection = arrowDirection.includes(direction) ? direction : arrowDirection[0];

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 1000){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 1000){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
    
  return (
    <div>
        { btnType == `ctaBtn` ? (
            <button className={`circle-btn--container ${checkBtnDirection}`}>
                <div className={`circle-btn--outer ${checkBtnStyle}`}>
                    <div className="circle-arrow--icon">
                        <div className="circle-arrow--bar"></div>
                        <div className="circle-arrow--triangle"></div>
                    </div>
                </div>
            </button>
        ) : null }
       
        { btnType == "scrollTopBtn" ? (
            <button className="circle-btn--container scroll--top gs-scrollTopBtn" onClick={scrollTop} style={{ display: showScroll ? 'block' : 'none'}}>
                <div className={`circle-btn--outer ${checkBtnStyle}`}>
                    <div className="circle-arrow--icon">
                        <div className="circle-arrow--triangle"></div>
                    </div>
                </div>
            </button>          
        ) : null }
    </div>
  )
}

if (!customElements.get('arrowBtn')) { customElements.define('arrowBtn', ArrowBtn); }
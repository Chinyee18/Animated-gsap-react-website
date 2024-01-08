"use strict";
const STYLE = ['btn--outlineGreyColor', 'btn--outlineTecColor', 'btn--outlineDcaColor', 'btn--outlineWhiteTecColor' , 'btn--outlineWhiteDcaColor'];

const Button = ({children, btnStyle, onClick}) => {
  //let navigate = useNavigate();
  const languageContext = useContext(LanguageContext);
  const language = languageContext.userLanguage;
  
  const checkBtnStyle = STYLE.includes(btnStyle) ? btnStyle : STYLE[0];
  return (
      <button className={`cus--btn ${checkBtnStyle} ${language}`} onClick={onClick}>{children}</button>
  )
}

if (!customElements.get('button')) { customElements.define('button', Button); }
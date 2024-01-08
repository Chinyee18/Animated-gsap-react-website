"use strict";
const LanguageSelect = (props) => {
   
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    useEffect(() => {
        document.getElementById('en').style.color = '#a9a9a9';
        document.getElementById('en').style.fontWeight = '400';
        document.getElementById('th').style.color = '#a9a9a9';
        document.getElementById('th').style.fontWeight = '400';
        document.getElementById(userLanguage).style.color = 'rgb(62 62 62)';
        document.getElementById(userLanguage).style.fontWeight = 'bold';
      }, [userLanguageChange]);

    return (
    <div className="language-btn">
        {Object.entries(languageOptions).map(([id, name]) => (
            <span onClick={() => userLanguageChange(id)} key={id} id={id}>{name}</span>
        ))}
    </div> 
  )
}

if (!customElements.get('languageSelect')) { customElements.define('languageSelect', LanguageSelect); }
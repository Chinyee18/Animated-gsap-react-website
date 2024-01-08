// it provides the language context to app
function LanguageProvider({ children }) {

    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
    // const [userLanguage, setUserLanguage] = useState( 'en');

    const provider = {
        userLanguage,
        // dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
          const newLanguage = languageOptions[selected] ? selected : 'en'
          setUserLanguage(newLanguage);
           window.localStorage.setItem('rcml-lang', newLanguage);
        }
      };
      
        return (
            <LanguageContext.Provider value={provider}>
                { children }
            </LanguageContext.Provider>
        )
      
  };

  if (!customElements.get('languageProvider')) { customElements.define('languageProvider', LanguageProvider); }
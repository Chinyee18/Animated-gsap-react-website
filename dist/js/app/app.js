"use strict";
const {useState, useEffect, useRef, forwardRef, Fragment, useId, createContext, useContext} = React;
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const HashRouter = ReactRouterDOM.HashRouter;
const NavLink = ReactRouterDOM.NavLink;
const withRouter = ReactRouterDOM.withRouter;

const languageOptions = {
    en: 'EN',
    th: 'TH'
  };
  
  const LanguageContext = createContext({
    language: 'en'
  });


const MainReact = () => {
  return (
    <div>
      <HashRouter >
        <LanguageProvider>
            <Menubar />
            <Switch> 
              <Route exact path="/" component={Tecnatives} />
              <Route path="/dcatalyst" component={Dcatalyst}/>
              <Route path="/andthen" component={Andthen} />
              <Route path="/nativeTraining" component={NativeTraining} />
              <Route path="/ntTechnology" component={NtTechnology} />
              <Route path="/howDoesItWork" component={HowDoesItWork} />
              <Route path="/benefitsofEMS" component={BenefitsofEMS} />
              {/* <Route path="*" component={NoPage}/>  */}
            </Switch> 
            <Footer />
        </LanguageProvider>
      </HashRouter>
    </div>
  )
}

const Tecnatives = () => <TecnativesPage />
const Dcatalyst = () => <DcatalystPage />
const Andthen = () => <AndthenPage />
// const MoreInfoOnNt = () => <MoreInfoOnNt />

ReactDOM.render(<MainReact />, document.getElementById("root-react"));
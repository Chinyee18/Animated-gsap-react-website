
const wf1 = '../../../../assets/images/tecnatives/wf_galleryImg1.webp';
const wf2 = '../../../../assets/images/tecnatives/wf_galleryImg2.webp';
const wf3 = '../../../../assets/images/tecnatives/wf_galleryImg3.webp';
const wf4 = '../../../../assets/images/tecnatives/wf_galleryImg4.webp';
const wf5 = '../../../../assets/images/tecnatives/wf_galleryImg5.webp';
const wf6 = '../../../../assets/images/tecnatives/wf_galleryImg6.webp';
const wf7 = '../../../../assets/images/tecnatives/wf_galleryImg7.webp';
const wf8 = '../../../../assets/images/tecnatives/wf_galleryImg8.webp';
const wf9 = '../../../../assets/images/tecnatives/wf_galleryImg9.webp';

const ntSuit = '../../../../assets/images/tecnatives/ntSuit.webp';
const ntCore = '../../../../assets/images/tecnatives/ntCore.webp';
const ntApp = '../../../../assets/images/tecnatives/ntApp.webp';
const ntLicense = '../../../../assets/images/tecnatives/ntLicense.webp';

const ntSyetemList = [
    { 
      id: 1,
      imageUrl: ntSuit,
      description: {
        title:'Nt suit',
        en:{
            desc1: 'Unique in workmanship and function: the antibacterial impulse surfaces do not require moistening and are easy to wash.',
            desc2:''
        },
        th:{
            desc1: 'มีเอกลักษณ์เฉพาะในเรื่องของการทำงานรวมถึงฟังก์ชันต่างๆ : ป้องกันเกิดการติดเชื้อจากแบคทีเรียและไม่จำเป็นต้องให้มีความชื้นขณะใช้งาน ง่ายต่อการทำความสะอาด',
            desc2:''
        }
      }
    },{ 
      id: 2,
      imageUrl: ntCore,
      description: {
        title:'Nt Core',
        en:{
            desc1:'The heart of the system. Generates body-like impulses and measures body feedback for optimal EMS stimulation.',
            desc2:''
        },
        th:{
            desc1: 'ปัจจัยสำคัญของระบบ คือการวิเคราะห์ร่างกายและประมวลผลต่างๆของร่างกาย เพื่อการกระตุ้นกระแสไฟฟ้า EMS ที่เหมาะสมของการใช้งานในแต่ละครั้ง',
            desc2:''
        }
      }
    },{ 
      id: 3,
      imageUrl: ntApp,
      description: {
        title:'Nt App',
        en:{
            desc1: 'Controls and manages your training wherever you need it: on your smartphone and tablet, on iOS and Android.',
            desc2: 'Allows individual and group training in one product. Up to 4Nt Cores can be controlled by one Nt App.'
        },
        th:{
            desc1: 'จะทำการควบคุมการเทรนในรูปแบบต่างๆของคุณ ให้อิสระในการเทรนไม่ว่าที่ไหนที่คุณต้องการ คุณสามารถใช้ได้ทั้งบนสมาร์ทโฟนหรือแท็บเล็ตของคุณ บนระบบปฏิบัติการ iOS และ Android สามารถควบคุม',
            desc2:'การเทรนเป็นรายบุคคลและกลุ่มได้สูงสุดถึง 4 เครื่องในเวลาเดียวกัน 4Nt สามารถควบคุมได้ด้วยแอป Nt เพียงเครื่องเดียว'
        }
      }
    },{ 
      id: 4,
      imageUrl: ntLicense,
      description: {
        title:'Nt LICENSE',
        en:{
            desc1:'The Nt license identifies the system against the services of the Nt Cloud and technical support.',
            desc2:''
        },
        th:{
            desc1: 'ใบรับรองของ Nt สามารถให้บริการผ่านแอพพิลเคชั่นของ Nt Cloud การรวมไปถึงการสนับสนุนทางด้านเทคนิคต่างๆ',
            desc2:''
        }
      }
    }
]

const wirelessFreedomList = [
  { id: 1, imageUrl: wf1 },
  { id: 2, imageUrl: wf2 },
  { id: 3, imageUrl: wf3 },
  { id: 4, imageUrl: wf4 },
  { id: 5, imageUrl: wf5 },
  { id: 6, imageUrl: wf6 },
  { id: 7, imageUrl: wf7 },
  { id: 8, imageUrl: wf8 },
  { id: 9, imageUrl: wf9 }
]

const mobile1Col = 'row-cols-1 row-cols-sm-2';
const mobile2Cols = 'row-cols-2';
const colNum = [mobile1Col, mobile2Cols];

const GalleryList = ({imageUrl, description, id}) => {
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;
    const [content, setContent] = useState({});
    const [descOpen, setDescOpen] = useState(false);
  
    const toggle = () => {
      setDescOpen(!descOpen)
    }

    useEffect(() => {
        if(description){
            if (language == "en"){setContent(description.en)}
            else if(language == "th"){setContent(description.th)}
        }
      }, [language]);

    
  return (
    <div className={`col gallery--col img${id}`} >
      <div className="gallery--img">
        <img src={imageUrl}></img>
        {  content.hasOwnProperty('desc1') ? (
          <div>
            <h3 className={`desc--title ${language}`}>{description.title}</h3>
            <GalleryDesc title={description.title} desc1={content.desc1} desc2={content.desc2} url={description.url} showHideDesc={descOpen ? "d-block" : "d-none"}/>
            <div className={`addCloseBtn ${descOpen ? "open" : ""}`}><CloseBtn onClick={toggle} /></div>
          </div>
        ) : null
        }
      </div>
    </div>
  );
}

const GalleryDesc = ({ title, desc1, desc2, url, showHideDesc}) => {
    const languageContext = useContext(LanguageContext);
    const language = languageContext.userLanguage;
  return(
    <div className={`gallery--desc ${showHideDesc}`}>
      <h3 className={`galleryDesc--title ${language}`}>{title}</h3><br/><p className={language}>{desc1}</p>
      { desc2 ? (<p className={language}><br/>{desc2}</p>) : null }
      <br/><br/>
      { url ? (<Button children="Read More" btnStyle="btn--outlineWhiteTecColor" link={url}/>) : null }
    </div>
  );
}

const Gallery = ({list, gsGalleryIdName, numOfRColInMobile}) => {
  const checkColNum = colNum.includes(numOfRColInMobile) ? numOfRColInMobile : colNum[0];
  const y = window.innerWidth < 550 ? "-=10" : "+=50";
  const y2 = window.innerWidth < 550 ? "-=10" : "-=100";
  // const y2 = window.innerWidth < 550 ? "-=10" : "-=100";
  useEffect(() => {
    gsap.to(".gallery--img img",{
        y:"-=40",
      scrollTrigger:{
        trigger: `#${gsGalleryIdName}`,
        start:"top top",
        scrub:1
      }
    })
    gsap.utils.toArray([".img1",".img3",".img5",".img7",".img9"]).forEach(effect => {
      gsap.to(effect,{
        y:y,
        scrollTrigger:{
            trigger: `#${gsGalleryIdName} .gallery--img`,
            start:"top top",
            scrub:1,
            duration:0.2
        }
      })
    });
    gsap.utils.toArray([".img2",".img4",".img6",".img8",".img10"]).forEach(effect => {
      gsap.to(effect,{
        y:y2,
        scrollTrigger:{
          trigger: `#${gsGalleryIdName} .gallery--img img`,
            start:"top top",
            scrub:1,
            duration:1
        }
      })
    });
  }, []);
  return (
    <div className={`row ${checkColNum} gallery--ImgWrapper`} id={gsGalleryIdName}>
      {list.map((p, i) => (
        <GalleryList {...p} key={i} />
      ))} 
    </div>
  );
}


if (!customElements.get('gallery')) { customElements.define('gallery', Gallery); }
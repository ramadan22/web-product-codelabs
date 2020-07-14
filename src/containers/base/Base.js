import { React, Element, axios, useEffect, useState } from '../../libraries'
import 'font-awesome/css/font-awesome.min.css'
import { Helmet } from 'react-helmet'
import BannerContainer from '../banner/BannerContainer'
import Navbar from '../nav/NavContainer'
import ContactUsContainer from '../contactus/ContactUsContainer'
import SectionContainer from '../section/SectionContainer'
import FooterContainer from '../footer/FooterContainer'
import { useLocation } from 'react-router-dom'
import GlobalStyle from '../../assets/style/GlobalStyle'
import { Page404 } from '../../components/Page404'

const Base = (props) => {
  const [bannerData, setBannerData] = useState([])
  const [contentData, setContentData] = useState([])
  const [contactUsData, setContactUsData] = useState([])
  const [navData, setNavData] = useState([])
  const [themeData, setThemeData] = useState([])
  const [seoData, setSeoData] = useState([])
  const [statusData, setStatusData] = useState(null)
  const [idProductData, setIdProductData] = useState(null)
  const [linkDownload, setLinkDownload] = useState({})

  const params = useLocation()

  useEffect(() => {
    axios.get(`http://128.199.125.236/web-products/webproducts-gateway/public/api/show/${params.pathname.split("/").pop()}`)
      .then((response) => {
        if (response.data.STATUS === 200) {
          setBannerData(response.data.DATA.banner);
          setContentData(response.data.DATA.contents);
          setContactUsData(response.data.DATA.contact);
          setNavData(response.data.DATA.nav);
          setThemeData(response.data.DATA.theme.layout);
          setSeoData(response.data.DATA.seo);
          setIdProductData(response.data.DATA.id);
          setLinkDownload(response.data.DATA.download);
          setStatusData(2);
        }
      }).catch(function (error) {
        setStatusData(1);
      });
  }, [params.pathname]);

  return (
    <>
      {statusData ? (
        statusData > 1 ? (
          <>
            <Helmet>
              <title>{seoData.meta_title}</title>
              <meta name="description" content={seoData.meta_description}></meta>
              <meta name="keywords" content={seoData.meta_keyword}></meta>
              <meta name="rating" content="General"></meta>
              <meta name="robots" content="All"></meta>
              <meta property="og:url" content={params}></meta>
              <meta property="og:title" content={seoData.meta_title}></meta>
              <meta property="og:description" content={seoData.meta_description}></meta>
              {/* <meta property="og:image" content="https://m.citytours.sg/assets/img/favicon.ico" /> */}

              <meta name="twitter:card" content="summary_large_image"></meta>
              <meta name="twitter:title" content={seoData.meta_title}></meta>
              <meta name="twitter:description" content={seoData.meta_description}></meta>
            </Helmet>
            <GlobalStyle background={themeData.background_color} color={themeData.font_color} />
            <Element name="home" className="element">
              <Navbar navDataArray={[...navData]} />
            </Element>
            <BannerContainer 
              image={bannerData.b_image} 
              title={bannerData.b_title} 
              description={bannerData.b_desc} 
              altImage={bannerData.b_image_alt} 
              linkDownload={linkDownload} />
            {
              contentData.map(row => (
                <Element key={row.id} name={row.nav.nav_url.substr(1)} className="element">
                  <SectionContainer
                    idProduct={idProductData} 
                    key={row.id}
                    id={row.nav.nav_url.substr(1)}
                    title={row.c_title}
                    description={row.c_desc}
                    displayType={row.display_type}
                    display={row.display}
                    thumbnail={[...row.detail]}
                    font_color={row.theme.layout.font_color}
                    background_color={row.theme.layout.background_color}
                    font_color_thumbnail={row.theme.layout.font_color_detail}
                    background_color_thumbnail={row.theme.layout.background_color_detail} />
                </Element>
              ))
            }
            <Element name="contactus" className="element">
              <ContactUsContainer idProduct={idProductData} />
            </Element>
            <FooterContainer
              addreass={contactUsData.c_address}
              email={contactUsData.c_email}
              phone={contactUsData.c_phone} 
              linkDownload={linkDownload} />
          </>
        ) : (
            <Page404 />
          )
      ) : (
          <>
            <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
              <span className="text-green-500 opacity-75 top-1/2 my-0 text-center block relative w-100 h-0" style={{ top : "50%" }}>
                <i className="fa fa-circle-o-notch fa-spin fa-5x"></i>
              </span>
            </div>
          </>
        )}
    </>
  );
}

export default Base;
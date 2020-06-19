import { React, Element, axios, useEffect, useState } from './libraries';
import './styles/app.css';
import BannerContainer from './containers/banner/BannerContainer';
import Navbar from './containers/nav/NavContainer';
import ContactUsContainer from './containers/contactus/ContactUsContainer';
import SectionContainer from './containers/section/SectionContainer';
import FooterContainer from './containers/footer/FooterContainer';

function App() {
  // const url = new URL(window.location.href);
  // const pathname = url.pathname.slice(1).split('/');

  const [bannerData, setBannerData] = useState([]);
  const [contentData, setContentData] = useState([]);
  const [contactUsData, setContactUsData] = useState([]);
  
  useEffect(() => {
    axios.get('http://128.199.125.236/web-products/webproducts-gateway/public/api/show/pos')
      .then((response) => {
        setBannerData(response.data.DATA.banner);
        setContentData(response.data.DATA.contents);
        setContactUsData(response.data.DATA.contact);
      });
  }, []);

  return (
    <>
      <Navbar />
      <BannerContainer image={bannerData.b_image} title={bannerData.b_title} description={bannerData.b_desc} altImage={bannerData.b_image_alt} />
      {
        contentData.map(row => (
          <SectionContainer 
            key={row.id} 
            title={row.c_title} 
            description={row.c_desc} 
            displayType={row.display_type} 
            thumbnail={[...row.detail]} />
        ))
      }
      <Element name="contactus" className="element">
        <ContactUsContainer />
      </Element>
      <FooterContainer 
        addreass={contactUsData.c_address} 
        email={contactUsData.c_email} 
        phone={contactUsData.c_phone} />
    </>
  );
}

export default App;
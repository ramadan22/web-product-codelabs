import { React } from '../../libraries';
import logo_pos from '../../assets/images/logo_pos.png';
import instagram_logo from '../../assets/images/instagram_logo.webp';
import youtube_icon from '../../assets/images/youtube.webp';
import googleButton from '../../assets/images/google_play.png';

export const FooterComponent = (props) => {
    const { addreass, email, phone } = props;

    return(
        <>
           <div className="w-full flex flex-wrap">
                <div className="w-1/3 pr-5">
                    <img src={logo_pos} alt="logo" className="mb-5" />
                    <p className="text-sm mb-4 text-gray-500">{addreass}</p>
                    <img src={instagram_logo} alt="social media" className="inline mr-2" />
                    <img src={youtube_icon} alt="social media" className="inline" />
                </div>
                <div className="w-1/3 pl-10">
                    <h4 className="font-bold mb-5">Info</h4>
                    <p className="text-sm text-gray-500">{email}</p>
                    <p className="mt-5 text-sm text-gray-500">{phone} /<br />021 2273 4809</p>
                </div>
                <div className="w-1/3 pl-5">
                    <h4 className="font-bold mb-5">Support & Download</h4>
                    <p><img src={googleButton} alt="google button" /></p>
                </div>
           </div>
        </>
    );
}

FooterComponent.defaultProps = {
    addreass: 'Jalan Mandar III Blok DC-10 No 66 - Bintaro Sektor 3A - Bintaro',
    email: 'info@codelabs.co.id',
    phone: '082227333311'
}
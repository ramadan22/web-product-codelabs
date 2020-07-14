import { React } from '../../libraries'
import logo_pos from '../../assets/images/logo_pos.png'
import instagram_logo from '../../assets/images/instagram_logo.webp'
import youtube_icon from '../../assets/images/youtube.webp'
import googleButton from '../../assets/images/google_play.png'
// import { Link } from 'react-router-dom'

export const FooterComponent = (props) => {
    const { addreass, email, phone, linkDownload } = props

    return(
        <>
           <div className="w-full flex flex-wrap">
                <div className="w-full xl:pr-5 xl:w-1/3">
                    <img src={logo_pos} alt="logo" className="mb-5" />
                    <p className="text-sm mb-4" style={{color:'#AAAAAA'}}>{addreass}</p>
                    <img src={instagram_logo} alt="social media" className="inline mr-2" />
                    <img src={youtube_icon} alt="social media" className="inline" />
                </div>
                <div className="w-full xl:pl-10 xl:w-1/3">
                    <h4 className="font-bold mb-1 mt-4 xl:mb-5 xl:mt-0">Info</h4>
                    <p className="text-sm" style={{color:'#AAAAAA'}}>{email}</p>
                    <p className="mt-0 mb-4 xl:mt-5 xl:mb-0 text-sm" style={{color:'#AAAAAA'}}>{phone} /<br />021 2273 4809</p>
                </div>
                <div className="w-full xl:pl-5 xl:w-1/3">
                    <h4 className="font-bold mb-5">Support & Download</h4>
                    <p>
                        <a href={linkDownload.android_url} target='_blank' rel='noopener noreferrer'>
                            <img src={googleButton} alt="google button" />
                        </a>
                    </p>
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
import { React } from '../../libraries';
import googleButton from '../../assets/images/google_play.png';
import imageDefault from '../../assets/images/default.png';

export const BannerComponent = (props) => {
    const { image, title, description, altImage } = props;

    return (
        <>
            <div className="flex">
                <div className="flex content-center flex-wrap pr-20 w-1/2">
                    <h1 className="w-full text-5xl mb-5 leading-tight">{title}</h1>
                    <p className="w-full mb-8 w-2/3">{description}</p>
                    <div className="w-full">
                        <img src={googleButton} alt="google button" />
                    </div>
                </div>
                <div className="w-1/2 pl-20">
                    <img src={image} alt={altImage} className="banner-image" />
                </div>
            </div>
        </>
    )
}

BannerComponent.defaultProps = {
    image: imageDefault,
    altImage: 'alt description',
    title: 'Bawa Wirausaha Anda Maju Bersama POS',
    description: 'Tentukan jenis bisnis Anda, dan lihat fungsi berbeda yang dapat di sesuaikan untuk majukan bisnis Anda',
}
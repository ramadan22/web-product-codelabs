import { React } from '../../libraries'
import googleButton from '../../assets/images/google_play.png'
import imageDefault from '../../assets/images/default.png'

export const BannerComponent = (props) => {
    const { image, title, description, altImage, linkDownload } = props

    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row">
                <div className="flex content-center flex-wrap xl-pr-20 xl:w-1/2 lg:w-1/2 md:w-3/5 sm:w-3/5">
                    <h1 className="w-full xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl mb-5 leading-tight">{title}</h1>
                    <p className="w-full mb-8 w-2/3">{description}</p>
                    <div className="w-full">
                        <a href={linkDownload.android_url} rel='noopener noreferrer'><img src={googleButton} alt="google button" /></a>
                    </div>
                </div>
                <div className="xl:w-1/2 lg:w-1/2 mx-auto pl-5 xl:pl-20 md:w-2/5 sm:w-2/5">
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
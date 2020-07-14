import { React } from '../../libraries';
import '../../containers/banner/BannerContainerStyle.css';
import { BannerComponent } from '../../components';

class BannerContainer extends React.Component {
    render() {
        const { image, title, description, altImage, linkDownload } = this.props;

        return (
            <>
                <div className="banner-container xl:px-32 xl:pb-20 xl:pt-40 lg:pt-32 md:pt-32 sm:pt-32 px-6 pb-10 pt-24">
                    <div className="container mx-auto xl:px-20">
                        <BannerComponent 
                            image={image} 
                            title={title} 
                            description={description} 
                            altImage={altImage} 
                            linkDownload={linkDownload} />
                    </div>
                </div>
            </>
        );
    }
}

export default BannerContainer;
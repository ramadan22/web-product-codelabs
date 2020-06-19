import { React } from '../../libraries';
import '../../containers/banner/BannerContainerStyle.css';
import { BannerComponent } from '../../components';

class BannerContainer extends React.Component {
    render() {
        const { image, title, description, altImage } = this.props;

        return (
            <>
                <div className="banner-container px-32 py-20">
                    <div className="container px-20">
                        <BannerComponent 
                            image={image} 
                            title={title} 
                            description={description} 
                            altImage={altImage} />
                    </div>
                </div>
            </>
        );
    }
}

export default BannerContainer;
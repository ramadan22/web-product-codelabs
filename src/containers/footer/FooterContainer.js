import { React } from '../../libraries';
import { FooterComponent } from '../../components';

class Footer extends React.Component {
    render() {
        const { addreass, email, phone, linkDownload } = this.props;
        return(
            <>
                <div className="footer-container w-full xl:px-32 xl:py-20 py-5" style={{backgroundColor: '#f5f6f8'}}>
                    <div className="container mx-auto xl:px-20 px-6">
                        <FooterComponent 
                            addreass={addreass} 
                            email={email} 
                            phone={phone} 
                            linkDownload={linkDownload} />
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
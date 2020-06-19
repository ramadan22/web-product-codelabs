import { React } from '../../libraries';
import { FooterComponent } from '../../components';

class Footer extends React.Component {
    render() {
        const { addreass, email, phone } = this.props;
        return(
            <>
                <div className="footer-container w-full bg-gray-100 px-32 py-20">
                    <div className="container px-20">
                        <FooterComponent 
                            addreass={addreass} 
                            email={email} 
                            phone={phone} />
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
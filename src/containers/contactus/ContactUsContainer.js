import { React } from '../../libraries';
import { ContactUsComponent } from '../../components';

class ContactUsContainer extends React.Component {
    render() {
        return(
            <>
                <div id="contactus" className="contactus-container w-full px-32">
                    <div className="container px-20">
                        <ContactUsComponent />
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUsContainer;
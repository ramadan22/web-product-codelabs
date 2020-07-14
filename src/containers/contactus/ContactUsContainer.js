import { React } from '../../libraries';
import { ContactUsComponent } from '../../components';

class ContactUsContainer extends React.Component {
  render() {
    const {
      idProduct
    } = this.props;

    return (
      <>
        <div id="contactus" className="contactus-container w-full px-0 xl:px-32">
          <div className="container mx-auto px-6 xl:px-20">
            <ContactUsComponent idProduct={idProduct} />
          </div>
        </div>
      </>
    );
  }
}

export default ContactUsContainer;
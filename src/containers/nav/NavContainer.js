import { React } from '../../libraries';
import { NavComponent } from '../../components';

class NavContainer extends React.Component {
    render() {
        return(
            <>
                <div className="nav-container flex content-center flex-wrap w-full px-32 h-20">
                    <div className="container px-20">
                        <NavComponent />
                    </div>
                </div>
            </>
        );
    }
}

export default NavContainer;
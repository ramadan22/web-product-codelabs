import { React } from '../../libraries';
import { NavComponent } from '../../components';

class NavContainer extends React.Component {
    render() {

        const { navDataArray } = this.props;

        return(
            <>
                <div className="fixed z-10 bg-white shadow nav-container flex content-center flex-wrap w-full px-6 md:px-10 md:px-16 lg:px-32 lg:h-20">
                    <div className="container mx-auto xl:px-20 lg:px-2">
                        <NavComponent navDataArray={[...navDataArray]} />
                    </div>
                </div>
            </>
        );
    }
}

export default NavContainer;
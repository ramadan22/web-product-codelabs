import { React, Link } from '../../libraries';
import logo_pos from '../../assets/images/logo_pos.png';

export const NavComponent = (props) => {

    const { navDataArray } = props;

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap xl:pt-6 md:pt-4 sm:pt-3 pt-2 xl:pb-6 md:pb-3 sm:pb-3 pb-2">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img src={logo_pos} alt="logo alt" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
                <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        
                    </div>
                    <div>
                        <Link 
                            activeClass="active" 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            className="block mt-4 lg:inline-block lg:mt-0 mr-5 text-sm cursor-pointer">Home</Link>
                        {
                            navDataArray.map(row => (
                                <Link 
                                    key={row.id} 
                                    activeClass="active" 
                                    to={row.nav_url.substr(1)} 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-80} 
                                    duration={500} 
                                    className="block mt-4 lg:inline-block lg:mt-0 mr-5 text-sm cursor-pointer">{row.nav_title}</Link>
                            ))
                        }
                        
                        <Link 
                            activeClass="active" 
                            to="contactus" 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            className="block mt-4 lg:inline-block lg:mt-0 mr-5 text-sm cursor-pointer">Kontak Kami</Link>
                        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-5 rounded mt-5 lg:mt-0">Coba Gratis</button>
                        {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
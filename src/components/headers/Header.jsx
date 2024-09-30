import { useEffect,useRef,useState } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { navbarLinkList } from '../../constants/navbarLinkList';
import useDarkMode from '../../hooks/useDarkMode';
import { motion } from 'framer-motion';
import Container from '../containers/Container';
import { IconMoon,IconSun } from '@tabler/icons-react';


const NavBarLinkList = ( { onHide } ) => navbarLinkList.map( ( item,index ) => (
    <li className='list-none' key={ item.label } >
        <NavLink
            className='capitalize font-bold text-dark dark:text-white !text-opacity-40 [&.active]:!text-opacity-100 hover:text-opacity-80 transition-all duration-300'
            to={ item.link }>
            { item.label }
        </NavLink>
    </li>
) )

const Header = () => {
    const [ isMenuOpen,setIsMenuOpen ] = useState( false );
    const [ isDarkMode,toggleDarkMode ] = useDarkMode();
    const headerRef = useRef( null );
    const { pathname } = useLocation();

    useEffect( () => {
        setIsMenuOpen( false );
    },[ pathname ] )

    const toggleMenu = () => {
        setIsMenuOpen( prevMode => !prevMode )
    };

    function onWindowScroll () {
        if ( headerRef.current ) {
            if ( window.scrollY > 100 ) {
                headerRef.current.setAttribute( 'data-active','' )
            } else {
                headerRef.current.hasAttribute( 'data-active' )
                    ? headerRef.current.removeAttribute( 'data-active' )
                    : null
            }
        }
    }
    useEffect( () => {
        document.addEventListener( 'scroll',onWindowScroll )
        return () => {
            document.removeEventListener( 'scroll',onWindowScroll )
        }
    },[] )

    return (
        <>
            <motion.div
                className='fixed top-0 start-0 end-0 w-full z-50'
                variants={ {
                    hidden: { opacity: 0,y: -50 },
                    visible: { opacity: 1,y: 0 },
                } }
                initial="hidden"
                animate="visible"
                transition={ { type: 'just',duration: 1,delay: 0.3 } }
                viewport={ { once: true } }
            >
                <header ref={ headerRef } className='transition-all duration-500 h-20 data-[active]:h-14 data-[active]:shadow-lg  data-[active]:bg-white data-[active]:dark:bg-dark'>
                    <Container className='h-full'>
                        <nav className='flex gap-8 items-center h-full'>
                            <div className='me-auto'>
                                <NavLink to='/'>
                                    <img className='block dark:hidden w-44' src="assets/logos/brand.svg" alt="" />
                                    <img className='hidden dark:block w-44' src="assets/logos/brand-dark.svg" alt="" />
                                </NavLink>
                            </div>
                            <ul className='hidden md:flex gap-8 items-center ms-auto '>
                                <NavBarLinkList onHide={ () => setIsMenuOpen( false ) } />
                            </ul>
                            <div>
                                <div
                                    onClick={ toggleDarkMode }
                                    className="relative rounded-full cursor-pointer flex items-center justify-center border size-8"
                                >
                                    <div className={ `absolute transition-transform duration-500 ${isDarkMode ? 'scale-100' : 'scale-0'}` }>
                                        <IconSun className="size-6 stroke-4 fill-white" />
                                    </div>
                                    <div className={ `absolute transition-transform duration-500 ${isDarkMode ? 'scale-0' : 'scale-100'}` }>
                                        <IconMoon className="size-6 stroke-0 fill-dark" />
                                    </div>
                                </div>
                            </div>

                            <div className='md:hidden'>
                                <MenuIcon open={ isMenuOpen } onClick={ toggleMenu } />
                            </div>
                        </nav>
                    </Container>
                </header>

            </motion.div>
            <Offcanvas open={ isMenuOpen } onClick={ toggleMenu } />
        </>
    )
}

export default Header

const Offcanvas = ( { open = false,onHide } ) => {

    useEffect( () => {
        if ( open ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    },[ open ] )

    return (
        <motion.div className={ `fixed inset-0 pt-20 py-5 z-40 bg-white dark:bg-dark transition-all duration-500 shadow-lg ${open ? 'translate-y-0 scale-y-100 opacity-100 ' : 'translate-y-full scale-y-0 opacity-0 '}` }>
            <Container>
                <ul className='space-y-2'>
                    <NavBarLinkList onHide={ onHide } />
                </ul>
            </Container>
        </motion.div>
    )
}

const MenuIcon = ( { open = false,onClick } ) => {
    return (
        <div className="cursor-pointer" onClick={ onClick }>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={ `transition-transform duration-300 ease-in-out ${open ? 'rotate- 45' : ''}` }
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M4 6h16"
                    className={ `transition-transform duration-300 ease-in-out ${open ? 'translate-x-2 rotate-45' : ''}` }
                />
                <path
                    d="M7 12h13"
                    className={ `transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}` }
                />
                <path
                    d="M10 18h10"
                    className={ `transition-transform duration-300 ease-in-out ${open ? '-translate-x-4 scale-x-150 translate-y-4 -rotate-45' : ''}` }
                />
            </svg>
        </div>
    );
};


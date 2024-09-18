import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navbarLinkList } from '../../constants/navbarLinkList';
import useDarkMode from '../../hooks/useDarkMode';
import { AnimatePresence,motion } from 'framer-motion';
import Container from '../containers/Container';
import Button from '../buttons/Button';
import { IconMenu,IconMoon,IconSun } from '@tabler/icons-react';

const NavBarLinkList = () => navbarLinkList.map( ( item,index ) => (
    <li className='list-none' key={ item.label } >
        <NavLink
            onClick={ () => setIsMenuOpen( false ) }
            className='capitalize font-bold text-dark dark:text-white !text-opacity-40 [&.active]:!text-opacity-100 hover:text-opacity-80 transition-all duration-300'
            to={ item.link }>
            { item.label }
        </NavLink>
    </li>
) )

const Header = () => {
    const [ isMenuOpen,setIsMenuOpen ] = useState( false );
    const [ isDarkMode,toggleDarkMode ] = useDarkMode();

    const toggleMenu = () => setIsMenuOpen( prevMode => !prevMode );

    return (
        <>
            <motion.header
                className='sticky top-0 start-0 end-0 w-full z-50 bg-white dark:bg-dark border-b border-dashed border-gray-400'
                variants={ {
                    hidden: { opacity: 0,y: -100 },
                    visible: { opacity: 1,y: 0 },
                } }
                initial="hidden"
                animate="visible"
                transition={ { type: "spring",stiffness: 100,duration: 0.5 } }
                viewport={ { once: true } }
            >
                <Container className=''>
                    <nav className='flex gap-4 items-center h-20'>
                        <div className='me-auto'>
                            <NavLink to='/'>
                                <img className='block dark:hidden' src="/assets/logos/brand.svg" alt="" />
                                <img className='hidden dark:block' src="/assets/logos/brand-dark.svg" alt="" />
                            </NavLink>
                        </div>
                        <ul className='hidden md:flex gap-10 items-center ms-auto '>
                            <NavBarLinkList />
                        </ul>
                        {/* https://drive.google.com/file/d/1SS5A2yYU8kg0t9xFDug6jjrDveI75xMk/view?usp=drive_link */ }
                        {/* <Button Component={ Link } target='_blank' to='https://drive.google.com/file/d/1SS5A2yYU8kg0t9xFDug6jjrDveI75xMk/view?usp=drive_link'>
                        Download CV
                        </Button> */}
                        <div>
                            <Button
                                onClick={ toggleDarkMode }
                                className="transition-all duration-300 rounded-full relative"
                                varient='none'
                            >
                                <IconMoon className={ `block size-6 transition-all duration-500 stroke-current stroke-0 fill-white ${isDarkMode ? 'scale-y-100 opacity-100' : 'scale-y-0 h-0 opacity-0'}` } />
                                <IconSun className={ `block size-6 transition-all duration-500 stroke-current stroke-4 fill-dark ${isDarkMode ? 'scale-y-0 h-0 opacity-0' : 'scale-y-100 opacity-100'}` } />
                            </Button>
                        </div>

                        <div className='md:hidden'>
                            <MenuIcon open={ isMenuOpen } onClick={ toggleMenu } />
                        </div>
                    </nav>
                </Container>


            </motion.header>
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
        <motion.div className={ `fixed inset-0 mt-20 py-5 z-40 bg-white dark:bg-dark transition-all duration-500 shadow-lg ${open ? 'translate-y-0 scale-y-100 opacity-100 ' : 'translate-y-full scale-y-0 opacity-0 '}` }>
            <Container>
                <ul className='space-y-2'>
                    <NavBarLinkList />
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


import { useState } from 'react'
import { Navbar,NavbarBrand,NavbarContent,NavbarItem,Link,NavbarMenuItem,NavbarMenuToggle,NavbarMenu,Button } from "@nextui-org/react";
import { NavLink,useLocation } from 'react-router-dom';
import { navbarLinkList } from '../../constants/navbarLinkList';
import useDarkMode from '../../hooks/useDarkMode';
import { IconMoon,IconSun } from '@tabler/icons-react';

const Header = () => {
    const { pathname } = useLocation()
    const [ isMenuOpen,setIsMenuOpen ] = useState( false );
    const [ isDarkMode,toggleDarkMode ] = useDarkMode();

    const NavBarLinkList = () => navbarLinkList.map( ( item,index ) => (
        <NavbarItem key={ item.label } >
            <Link as={ NavLink } onClick={ () => setIsMenuOpen( false ) } className='capitalize [&.active]:font-bold transition-all duration-1000' color={ pathname === item.link ? "" : 'foreground' } to={ item.link }>
                { item.label }
            </Link>
        </NavbarItem>
    ) )

    return (
        <>
            {/* <nav className='flex gap-4 items-center h-28'>
                <NavLink to='/' className=' text-center' >
                    <div className='text-2xl font-medium'>&lt;RR/&gt;</div>
                </NavLink>
                <div className='flex gap-4 items-center ms-auto'>
                    <NavLink className='' to='/'>About</NavLink>
                    <NavLink className='' to='/projects'>Work</NavLink>
                    <NavLink className='' to='/contact'>Testimonial</NavLink>
                    <NavLink className='' to='/resume'>Contact</NavLink>
                </div>
                <Button>
                    Download CV
                </Button>
            </nav> */}

            {/* <Navbar
                // shouldHideOnScroll 
                className=''
            >
                <NavbarBrand>
                    <AppLogo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavBarLinkList />
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={ Link } href="/assets/pdf/resume/Rajat-Resume-2xp.pdf" >
                        Download CV
                        </Button>
                        </NavbarItem>
                        </NavbarContent>
                        </Navbar> */}


            <Navbar
                isMenuOpen={ isMenuOpen }
                // shouldHideOnScroll
                onMenuOpenChange={ setIsMenuOpen }>
                <NavbarContent>
                    <NavbarBrand as={ NavLink } to='/'>
                        <AppLogo />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {/* <NavbarItem>
                        <Link color="foreground" href="#">
                        Features
                        </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                        Customers
                        </Link>
                        </NavbarItem>
                        <NavbarItem>
                        <Link color="foreground" href="#">
                        Integrations
                        </Link>
                        </NavbarItem> */}
                    <NavBarLinkList />
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <NavbarItem>
                        <Button
                            onClick={ toggleDarkMode }
                            className="transition-all duration-300"
                            variant="ghost"
                            isIconOnly
                        >
                            { isDarkMode ? <IconSun /> : <IconMoon /> }
                            {/* { isDarkMode ? 'Light Mode' : 'Dark Mode' } */ }
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color='primary' as={ Link } href="/assets/pdf/resume/Rajat-Resume-2xp.pdf" >
                            Download CV
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    <NavBarLinkList />
                </NavbarMenu>
                <NavbarContent className="sm:hidden" justify='end'>
                    <NavbarMenuToggle
                        aria-label={ isMenuOpen ? "Close menu" : "Open menu" }
                    />
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default Header

const AppLogo = () => {
    return (
        <div className='flex items-center gap-2'>
            <div>
                <p className='text-3xl/none font-medievalSharp tracking-[-0.4em] me-3'>
                    RR
                </p>
            </div>
            <div>
                <p className='text-base font-medium'>Rajat Karmokar</p>
                <p className='text-xs/none tracking-[0.13em] font-light '>React Developer</p>
            </div>
        </div>
    )
}
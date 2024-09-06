import { useEffect,useState } from 'react';

const useDarkMode = () => {
    const [ isDarkMode,setIsDarkMode ] = useState( () => {
        const savedMode = localStorage.getItem( 'dark-mode' );
        return savedMode !== null ? JSON.parse( savedMode ) : window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
    } );

    useEffect( () => {
        const htmlElement = document.documentElement;

        if ( isDarkMode ) {
            htmlElement.classList.add( 'dark' );
        } else {
            htmlElement.classList.remove( 'dark' );
        }

        localStorage.setItem( 'dark-mode',JSON.stringify( isDarkMode ) );
    },[ isDarkMode ] );

    const toggleDarkMode = () => setIsDarkMode( prevMode => !prevMode );

    return [ isDarkMode,toggleDarkMode ];
};

export default useDarkMode;

import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [ isDarkMode,setIsDarkMode ] = useLocalStorage( 'dark-mode', false );

    useEffect( () => {
        if ( isDarkMode ) {
            document.documentElement.classList.add( 'dark' );
        } else {
            document.documentElement.classList.remove( 'dark' );
        }
    },[ isDarkMode ] );

    const toggleDarkMode = () => setIsDarkMode( prevMode => !prevMode );

    return [ isDarkMode,toggleDarkMode ];
};

export default useDarkMode;

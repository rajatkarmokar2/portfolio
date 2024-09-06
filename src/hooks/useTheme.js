import { useEffect,useState } from 'react'

const useTheme = () => {
    const [ theme,setTheme ] = useState( 'light' )

    useEffect( () => {
        console.log( localStorage.theme );

        if ( theme === "system" ) {
            if ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
                document.documentElement.classList.add( 'dark' )
                localStorage.theme = 'dark'
            } else {
                document.documentElement.classList.remove( 'dark' )
                localStorage.theme = 'light'
            }
        } else {
            if ( theme === 'dark' ) {
                document.documentElement.classList.add( 'dark' )
                localStorage.theme = 'dark'
            } else if ( theme === 'light' ) {
                document.documentElement.classList.remove( 'dark' )
                localStorage.theme = 'light'
            } else {
                if ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
                    document.documentElement.classList.add( 'dark' )
                    localStorage.theme = 'dark'
                } else {
                    document.documentElement.classList.remove( 'dark' )
                    localStorage.theme = 'light'
                }
            }
        }
    },[ theme ] )

    return { theme,setTheme }
}

export default useTheme

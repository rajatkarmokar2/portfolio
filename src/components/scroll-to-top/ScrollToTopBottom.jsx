import React,{ useState,useEffect } from 'react';
import { Button } from '@nextui-org/react'; // Assuming you're using NextUI for the button
import { IconArrowUp } from '@tabler/icons-react'; // Using an up arrow icon

const ScrollToTopButton = () => {
    const [ isVisible,setIsVisible ] = useState( false );

    // Toggle visibility of the button when scrolling
    useEffect( () => {
        const toggleVisibility = () => {
            if ( window.pageYOffset > 300 ) {
                setIsVisible( true );
            } else {
                setIsVisible( false );
            }
        };

        window.addEventListener( 'scroll',toggleVisibility );

        return () => {
            window.removeEventListener( 'scroll',toggleVisibility );
        };
    },[] );

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth',
        } );
    };

    return (
        <Button
            isIconOnly
            className={ `fixed bottom-4 right-4 z-50 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
                }` }
            onClick={ scrollToTop }
        >
            <IconArrowUp />
        </Button>
    );
};

export default ScrollToTopButton;

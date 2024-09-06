import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const {pathname}=useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Smooth scroll to top
  }, [pathname]); // Empty dependency array ensures this runs only once when the component mounts
};

export default useScrollToTop;

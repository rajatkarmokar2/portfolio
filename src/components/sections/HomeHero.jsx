import React,{ useEffect,useState } from 'react'
import Container from '../containers/Container'
import { motion } from "framer-motion"
import { skillList } from '../../constants/skillList'
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'

const HomeHero = () => {
    return (
        <section className=''>
            <Container>
                <div className='md:h-[500px] max-h-max grid grid-cols-1 md:grid-cols-2 items-center gap-4 gap-y-10'>
                    <div className=''>
                        <div className='text-center md:text-start space-y-3 '>
                            <motion.div
                                variants={ {
                                    hidden: { opacity: 0,y: -100 },
                                    visible: { opacity: 1,y: 0 },
                                } }
                                initial="hidden"
                                whileInView="visible"
                                transition={ { type: "spring",stiffness: 100,duration: 0.5,delay: 0.6 } }
                                viewport={ { once: true } }
                            >
                                <div className=' bg-grad ient-text animate-gr adient-text bg-clip-text text-tra nsparent'>
                                    <p className='text-[clamp(36px,5vw,56px)] leading-tight'>
                                        HEY! <b className='font-bold'>I'm Rajat,</b>
                                    </p>
                                    <p className='text-[clamp(44px,5vw,64px)] leading-tight'>
                                        <b className='font-bold'>Website</b> Developer
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className='lg:w-[400px]'
                                variants={ {
                                    hidden: { opacity: 0,scaleX: 0.5,transformOrigin: 'left center' },
                                    visible: { opacity: 1,scaleX: 1 },
                                } }
                                initial="hidden"
                                whileInView="visible"
                                transition={ { type: "spring",stiffness: 100,duration: 0.5,delay: 0.8 } }
                                viewport={ { once: true } }
                            >
                                <p>
                                    Create your Design live with my personal touch of Web development skills.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={ {
                                    hidden: { opacity: 0,y: 100 },
                                    visible: { opacity: 1,y: 0 },
                                } }
                                initial="hidden"
                                whileInView="visible"
                                transition={ { type: "spring",stiffness: 100,duration: 0.5,delay: 1.5 } }
                                viewport={ { once: true } }
                            >
                                <Button className='mt-3' Component={ Link } to="https://drive.google.com/file/d/1SS5A2yYU8kg0t9xFDug6jjrDveI75xMk/view?usp=drive_link" >
                                    Download CV
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.div
                            variants={ {
                                hidden: { y: 100,opacity: 0 },
                                visible: { y: 0,opacity: 1 },
                            } }
                            initial="hidden"
                            whileInView="visible"
                            transition={ { type: "spring",stiffness: 100,duration: 0.5,delay: 1 } }
                            viewport={ { once: true } }
                        >
                            {/* <img className='rounded-full max-w-[200px] md:max-w-full' src="assets/images/profile/profile-pic.png" /> */ }
                            <img className='w-full rounded-[10vw_5vw] transition-all duration-1000' src="assets/images/29169113_7520071.jpg" alt='' />
                        </motion.div>
                        {/* <motion.div
                            transition={ { repeat: Infinity,duration:3 } }
                            animate={ {
                                y: [ 0,50,0,-50,0 ],
                                opacity: [ 0,0,1,0,0 ],
                            } } className='absolute size-[100px] -translate- x-1/2 -translate-y- 1/2 top-0 start-0  bg-violet-300'></motion.div> */}
                        {/* <div className='absolute size-[100px] -translate- x-1/2 translate-y- 1/2 right-0 bottom-0 bg-violet-300'></div> */ }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeHero

const skills = [
    {
        name: 'Sr. Front End Developer.',
    },
    {
        name: 'React js Developer.',
    },
    {
        name: 'Next js Developer.',
    },
    {
        name: 'React Native Developer.',
    },
    {
        name: 'Ionic Developer.',
    },
    {
        name: 'Node js Developer.',
    },
]

const TypingAnimation = () => {
    const [ displayedText,setDisplayedText ] = useState( '' );
    const [ currentIndex,setCurrentIndex ] = useState( 0 );
    const [ charIndex,setCharIndex ] = useState( 0 );
    const [ isDeleting,setIsDeleting ] = useState( false );

    useEffect( () => {
        const handleTyping = () => {
            const currentSkill = skills[ currentIndex ];
            const currentName = currentSkill.name;
            const typingSpeed = isDeleting ? 50 : 100;

            if ( !isDeleting && charIndex < currentName.length ) {
                setDisplayedText( ( prev ) => prev + currentName[ charIndex ] );
                setCharIndex( ( prev ) => prev + 1 );
            } else if ( isDeleting && charIndex > 0 ) {
                setDisplayedText( ( prev ) => prev.slice( 0,-1 ) );
                setCharIndex( ( prev ) => prev - 1 );
            } else if ( !isDeleting && charIndex === currentName.length ) {
                setTimeout( () => setIsDeleting( true ),3000 );
            } else if ( isDeleting && charIndex === 0 ) {
                setIsDeleting( false );
                setCurrentIndex( ( prev ) => ( prev + 1 ) % skills.length );
            }
        };

        const typingTimeout = setTimeout( handleTyping,isDeleting ? 50 : 150 );
        return () => clearTimeout( typingTimeout );
    },[ charIndex,isDeleting,currentIndex ] );

    return (
        <motion.span
            className={ `font-bold bg-g radient-purple-text bg-clip-text text-t ransparent ${skillList[ currentIndex ].color}` }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5,delay: currentIndex } }
        >
            { displayedText }
            <motion.span
                className="border-1 inline-block w-0 overflow-hidden leading-none border-black dark:border-white ml-1"
                animate={ { opacity: [ 0,1,0 ] } }
                transition={ { repeat: Infinity,duration: 1 } }
            >Cursor</motion.span>
        </motion.span>
    );
};

import React,{ useEffect,useState } from 'react'
import Container from '../containers/Container'
import { motion } from "framer-motion"
import { skillList } from '../../constants/skillList'
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'

const HomeHero = () => {
    return (
        <section className='relative'>
            <Container>
                <div className='min-h-max h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-4 gap-y-10 py-32'>
                    <div className=''>
                        <div className='text-center lg:text-start space-y-3 '>
                            <motion.div
                                variants={ {
                                    hidden: { opacity: 0,y: -100 },
                                    visible: { opacity: 1,y: 0 },
                                } }
                                initial="hidden"
                                animate="visible"
                                transition={ { type: 'just',duration: 0.5,delay: 0.6 } }
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
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                } }
                                initial="hidden"
                                animate="visible"
                                transition={ { type: 'just',duration: 0.5,delay: 0.8 } }
                                viewport={ { once: true } }
                            >
                                <p>
                                    Create your Design live with my personal touch of Web development skills.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={ {
                                    hidden: { opacity: 0,y: 10 },
                                    visible: { opacity: 1,y: 0 },
                                } }
                                initial="hidden"
                                animate="visible"
                                transition={ { type: 'just',duration: 0.5,delay: 1.5 } }
                                viewport={ { once: true } }
                            >
                                <Button className='mt-3' component={ Link } target='_blank' to="https://drive.google.com/file/d/1SS5A2yYU8kg0t9xFDug6jjrDveI75xMk/view?usp=drive_link" >
                                    Download CV
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    <div className='relative m-auto'>
                        <motion.div
                            variants={ {
                                hidden: { y: 100,opacity: 0 },
                                visible: { y: 0,opacity: 1 },
                            } }
                            initial="hidden"
                            animate="visible"
                            transition={ { type: 'just',duration: 0.5,delay: 1 } }
                            viewport={ { once: true } }
                        >
                            {/* <img className='rounded-full max-w-[200px] lg:max-w-full' src="assets/images/profile/profile-pic.png" /> */ }
                            <img className='size-[300px] transition-all duration-1000 drop-shadow-2xl'
                                // src="assets/images/29169113_7520071.jpg" 
                                src="assets/images/profile/profile-pic.png"
                                alt=''
                            />
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

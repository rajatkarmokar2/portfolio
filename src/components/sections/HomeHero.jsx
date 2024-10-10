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
                <div className='min-h-max h-screen py-20 flex flex-col justify-center items-center'>
                        <div className='text-center space-y-3 '>
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

                            <motion.div className='inline-block lg:w-[400px]'
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
                                <Button className='mt-3' component={ Link } target='_blank' to="https://drive.google.com/file/d/1KvgLPZFaPCDMPg9H2q1loIdRH1DRNyZI/view?usp=sharing" >
                                    Download CV
                                </Button>
                            </motion.div>
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

import React,{ useEffect,useState } from 'react';
import HeroH1 from '../headings/HeroH1';
import { motion } from 'framer-motion';
import { skillList } from '../../constants/skillList';
import Container from './../containers/Container';

const HomeSkills = () => {
    const [ radius,setRadius ] = useState( 0 );
    const [ rotate,setRotate ] = useState( 0 );
    const maxRadius = 'calc(var(--width)/2)';
    const speed = 0.005;

    useEffect( () => {
        const expandTimeout = setTimeout( () => {
            setRadius( maxRadius );
        },2000 );
        let interval = setInterval( () => {
            setRotate( ( prevAngle ) => prevAngle + speed );
        },16 );
        return () => {
            clearInterval( interval ); // Cleanup interval on component unmount
            clearTimeout( expandTimeout ); // Cleanup timeout
        };
    },[ speed ] );

    return (
        <div className='bg-blue-50 dark:bg-blue-900 overflow-hidden py-6 lg:py-0'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <motion.div className='relative'
                            initial={ {
                                scale: 0.5,
                                opacity: 0,
                            } }
                            whileInView={ {
                                scale: 1,
                                opacity: 1,
                            } }
                            transition={ { type: 'just',duration: 1,delay: 0.5 } }
                            viewport={ { once: true } }
                        >
                            <div className='absolute inset-0 flex justify-center items-center '>
                                <motion.div initial={ { scale: 0 } } animate={ { scale: [ 1,1.05,1 ] } } transition={ { delay: 1.3,repeat: Infinity,duration: 2,type: 'spring' } } className='absolute h-[180%] aspect-square bg-blue-100 dark:bg-blue-800 mx-auto rounded-full'></motion.div>
                                <motion.div initial={ { scale: 0 } } animate={ { scale: [ 1,1.05,1 ] } } transition={ { delay: 1.2,repeat: Infinity,duration: 2,type: 'spring' } } className='absolute h-[160%] aspect-square bg-blue-200 dark:bg-blue-700 mx-auto rounded-full'></motion.div>
                                <motion.div initial={ { scale: 0 } } animate={ { scale: [ 1,1.05,1 ] } } transition={ { delay: 1.1,repeat: Infinity,duration: 2,type: 'spring' } } className='absolute h-[140%] aspect-square bg-blue-300 dark:bg-blue-600 mx-auto rounded-full'></motion.div>
                                <motion.div initial={ { scale: 0 } } animate={ { scale: [ 1,1.05,1 ] } } transition={ { delay: 1.0,repeat: Infinity,duration: 2,type: 'spring' } } className='absolute h-[120%] aspect-square bg-blue-400 dark:bg-blue-500 mx-auto rounded-full'></motion.div>
                                <motion.div className='absolute h-[100%] transition-all duration-300 scale-100 gro up-hover:scale-[1.0] aspect-square bg-blue-500 dark:bg-white mx-auto rounded-full'></motion.div>
                            </div>

                            <div className='py-14'>
                                <div className="p-4 flex justify-center items-center relative aspect-square w-[var(--width)] mx-auto overflow-visible rounded-full" style={ { "--width": 'clamp(200px,30vw,400px)' } }>
                                    <div className={ `absolute size-full rounded-full grid place-items-center shadow-lg text-6xl font-semibold bg-white dark:bg-dark text-dark dark:text-white ${radius ? 'scale-100' : 'scale-0'}` }>
                                        Skills
                                    </div>

                                    { skillList.map( ( skill,index ) => {
                                        return (
                                            <div key={ index } className='absolute flex items-center justify-center'>
                                                <div
                                                    key={ index }
                                                    className="absolute will-change-transform transition-transform duration-100 peer z-10"
                                                    style={ {
                                                        "--index": index,
                                                        '--color': skill.color,
                                                        "--radius": radius,
                                                        "--rotate": index + rotate,
                                                        // "transitionDelay": `${index/100}s`,
                                                        "--angle": `calc(var(--rotate)*${360 / skillList.length}*1deg)`,
                                                        "--x": `calc(cos(var(--angle))*var(--radius))`,
                                                        "--y": `calc(sin(var(--angle))*var(--radius))`,
                                                        transform: `translateX(var(--x)) translateY(var(--y))`,
                                                    } }
                                                >
                                                    {/* <Tooltip showArrow content={ skill.name }> */ }
                                                    <div className='!size-14 bg-white dark:bg-dark grid place-items-center transition-all cursor- pointer lg:!size-20 rounded-full hover :scale-150'>
                                                        <skill.icon
                                                            stroke={ 1 }
                                                            className="size-2/3 stroke-dark dark:stroke-white transition-all !duration-700"
                                                        />
                                                    </div>
                                                    {/* </Tooltip> */ }
                                                </div>
                                                {/* <div className='absolute text-6xl text-center font-semibold text-gray-500 opacity-0 peer-hover:opacity-100 peer-hover:bg-white peer-hover:dark:bg-black transition-all duration-1000 size-[var(--width)] pointer-events-none flex items-center justify-center rounded-full'>
                                                    <HeroH1>{ skill.name }</HeroH1>
                                                </div> */}
                                            </div>
                                        );
                                    } ) }
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={ {
                            opacity: 0,
                            x: -50,
                        } }
                        whileInView={ {
                            opacity: 1,
                            x: 0,
                        } }
                        transition={ { type: "just",duration: 1,delay: 1.5 } }
                        viewport={ { once: true } }
                        className=' sm:m-auto relative bg-white dark:bg-darkblue rounded-xl p-5 shadow-lg dark:shadow-slate-900'>
                        <table>
                            <tbody>
                                { skillList.map( ( skill,index ) => {
                                    return (
                                        <motion.tr
                                            initial={ {
                                                // scale: 0.5,
                                                opacity: 0
                                            } }
                                            whileInView={ {
                                                // scale: 1,
                                                opacity: 1,
                                            } }
                                            transition={ { type: 'just',duration: 1,delay: ( index / 10 ) + 1 } }
                                            viewport={ { once: true } }
                                            key={ index } >
                                            <td className=' text-sm md:text-base text-nowrap font-medium py-1 pe-5'>{ skill.name }</td>
                                            {/* <td className='text-xl font-medium px-2'>:</td> */ }
                                            <td className='text-xl font-medium w-full'>
                                                <div className='sm:w-[200px] rounded-md overflow-hidden h-2 bg-dark dark:bg-white !bg-opacity-20'>
                                                    <motion.div
                                                        viewport={ { once: true } }
                                                        whileInView={ { width: [ 0,skill.level + '%' ] } }
                                                        transition={ { type: 'just',duration: 1,delay: ( index / 10 ) + 2 } }
                                                        className='h-full bg-dark dark:bg-white' ></motion.div>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    );
                                } ) }
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default HomeSkills
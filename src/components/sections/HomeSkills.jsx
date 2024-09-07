import { Button,Card } from '@nextui-org/react';
import React,{ useEffect,useState } from 'react'
import HeroH1 from '../headings/HeroH1';
import { motion } from 'framer-motion';
import { skillList } from '../../constants/skillList';

// const HomeSkills = () => (
//     <Container>
//         <SectionH1>Skills</SectionH1>
//         <div className="">
//             <Card isPressable className={ `p-4 flex justify-center items-center relative bg-white aspect-square w-full max-w-[500px] mx-auto overflow-visible rounded-full` } >
//                 <p className='absolute text-4xl'>Skills</p>
//                 { skillList.map( ( skill,index ) => (
//                     <Tooltip key={ index } showArrow content={ skill.name }>
//                         <Button isIconOnly className={ `absolute flex !size-20 items-center gap-2 top-[calc(var(--p)*15%)] left-[]` } style={ { '--color': skill.color,'--p': index } }>
//                             <skill.icon stroke={ 1 } className={ `size-16 stroke- [var(--color)] transition-all !duration-700` } style={ { '--color': skill.color } } />
//                         </Button>
//                     </Tooltip>
//                 ) ) }
//             </Card>
//         </div>
//     </Container>
// );

const HomeSkills = () => {
    const [ radius,setRadius ] = useState( 0 );
    const [ rotate,setRotate ] = useState( 0 );
    const maxRadius = 'calc(var(--width)/2)';
    const speed = 0.005;

    useEffect( () => {
        let interval
        const expandTimeout = setTimeout( () => {
            setRadius( maxRadius );
            interval = setInterval( () => {
                setRotate( ( prevAngle ) => prevAngle + speed );
            },16 );
        },2000 );
        return () => {
            clearInterval( interval ); // Cleanup interval on component unmount
            clearTimeout( expandTimeout ); // Cleanup timeout
        };
    },[ speed ] );

    return (
        <div className='bg-blue-50 dark:bg-blue-900 relative overflow-hidden group'>
            <div className='absolute inset-0 flex justify-center items-center '>
                <div className='absolute h-[180%] transition-all duration-300 group-hover:scale-[1.8] aspect-square bg-blue-100 dark:bg-blue-800 mx-auto rounded-full'></div>
                <div className='absolute h-[160%] transition-all duration-300 group-hover:scale-[1.6] aspect-square bg-blue-200 dark:bg-blue-700 mx-auto rounded-full'></div>
                <div className='absolute h-[140%] transition-all duration-300 group-hover:scale-[1.4] aspect-square bg-blue-300 dark:bg-blue-600 mx-auto rounded-full'></div>
                <div className='absolute h-[120%] transition-all duration-300 group-hover:scale-[1.2] aspect-square bg-blue-400 dark:bg-blue-500 mx-auto rounded-full'></div>
                <div className='absolute h-[100%] transition-all duration-300 group-hover:scale-[1.0] aspect-square bg-blue-500 dark:bg-white mx-auto rounded-full'></div>
            </div>
            <div className='py-14'>
                <Card className="p-4 flex justify-center items-center relative aspect-square w-[var(--width)] mx-auto overflow-visible rounded-full" style={ { "--width": 'clamp(200px,30vw,400px)' } }>
                    <p className={ `absolute text-6xl font-semibold text-gray-500 ${radius ? 'scale-100' : 'scale-0'}` }>
                        <HeroH1>Skills</HeroH1>
                    </p>

                    { skillList.map( ( skill,index ) => {
                        return (
                            <div className='absolute flex items-center justify-center'>
                                <motion.div
                                    key={ index }
                                    className="absolute transition-transform duration-100 peer z-10"
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
                                    <Button isIconOnly className='!size-14 lg:!size-20 rounded-full hover:scale-150'>
                                        <skill.icon
                                            stroke={ 1 }
                                            className="size-2/3 stroke- [var(--color)] transition-all !duration-700"
                                        />
                                    </Button>
                                    {/* </Tooltip> */ }
                                </motion.div>
                                <p className='absolute text-6xl font-semibold text-gray-500 opacity-0 peer-hover:opacity-100 peer-hover:bg-white peer-hover:dark:bg-black transition-all duration-1000 size-[var(--width)] pointer-events-none flex items-center justify-center rounded-full'>
                                    <HeroH1>{ skill.name }</HeroH1>
                                </p>
                            </div>
                        );
                    } ) }
                </Card>
            </div>
        </div>
    );
};

export default HomeSkills
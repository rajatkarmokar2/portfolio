import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS,RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend } from 'chart.js';
import { IconBrandJavascript,IconBrandHtml5,IconBrandCss3,IconBrandReact,IconBrandNodejs,IconBrandNextjs,IconBrandReactNative,IconBrandTailwind,IconBrandBootstrap } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import SectionH1 from '../components/headings/SectionH1';

ChartJS.register( RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend );

const skills = [
    {
        name: "React Js",
        icon: <IconBrandReact size={ 30 } className="text-sky-500" />,
        color: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        level: 80,
    },
    {
        name: "JavaScript",
        icon: <IconBrandJavascript size={ 30 } className="text-yellow-500" />,
        color: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        level: 70,
    },
    {
        name: "HTML",
        icon: <IconBrandHtml5 size={ 30 } className="text-red-500" />,
        color: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        level: 90,
    },
    {
        name: "CSS",
        icon: <IconBrandCss3 size={ 30 } className="text-blue-500" />,
        color: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        level: 90,
    },
    {
        name: "React Native",
        icon: <IconBrandReactNative size={ 30 } className="text-sky-500" />,
        color: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        level: 50,
    },
    {
        name: "Next.js",
        icon: <IconBrandNextjs size={ 30 } className="text-black" />,
        color: 'rgba(99, 132, 255, 0.2)',
        borderColor: 'rgba(99, 132, 255, 1)',
        level: 70,
    },
    {
        name: "Node.js",
        icon: <IconBrandNodejs size={ 30 } className="text-green-500" />,
        color: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        level: 60,
    },
    {
        name: "Tailwind",
        icon: <IconBrandTailwind size={ 30 } className="text-lightblue-500" />,
        color: 'rgba(0, 206, 209, 0.2)',
        borderColor: 'rgba(0, 206, 209, 1)',
        level: 90,
    },
    {
        name: "Bootstrap",
        icon: <IconBrandBootstrap size={ 30 } className="text-purple-500" />,
        color: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        level: 90,
    },
];

const chartAnimation = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        scale: [ 0.5,1 ],
        transition: { duration: 1 }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            transition: { duration: 1 }
        },
    },
};

const fadeIn = {
    hidden: {
        opacity: 0,
        scale: 1.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1,}
    },
};

const SkillRadarChart = () => {

    const data = {
        labels: skills.map( skill => skill.name ),
        datasets: [
            {
                label: 'Skill Level (%)',
                data: skills.map( skill => skill.level / 10 ),
                backgroundColor: skills.map( skill => skill.color ),
                borderColor: skills.map( skill => skill.borderColor ),
                borderWidth: 2,
                fill: true
            },
        ],
        // datasets: skills.map( skill => ( {
        //     label: skill.name,
        //     data: [ skill.level ],
        //     backgroundColor: skill.color,
        //     borderColor: skill.borderColor,
        //     borderWidth: 2,
        //     fill: true,
        // } ) ),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Skill Levels (Radar Chart)',
            },
            filler: {
                propagate: false
            },
        },
        interaction: {
            // intersect: false
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 10,
            },
        },
        elements: {
            point: {
                radius: 10,
                hoverRadius: 15,
            }
        }
    };

    return (
        <div className='py-20'>
            <SectionH1>Skills</SectionH1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <motion.div
                    className="dark:bg-[linear-gradient(35deg,skyblue_0%,#fff)] rounded-full p-4 lg:p-6 "
                    variants={ chartAnimation }
                    initial='hide'
                    whileInView='show'
                    viewport={ { once: true,amount: 0.2 } }
                >
                    <Radar data={ data } options={ options } />
                </motion.div>
                <motion.div
                    variants={ staggerContainer }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true,amount: 1 } }
                    className="grid grid-cols-3 gap-4 lg:gap-6 mb-8"
                >
                    { skills.map( ( skill,index ) => (
                        <motion.div key={ index } variants={ fadeIn } className="flex flex-col items-center justify-center">
                            { skill.icon }
                            <p className="mt-2 font-semibold">{ skill.name }</p>
                        </motion.div>
                    ) ) }
                </motion.div>
            </div>
        </div>
    );
};

export default SkillRadarChart;

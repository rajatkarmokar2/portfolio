import React,{ useEffect,useState } from 'react';
import { Button,Card,CardBody,Image } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { projectList } from './../constants/projectList';
import { skillList } from '../constants/skillList';
import { motion } from 'framer-motion';
import Container from '../components/containers/Container';
import ProjectCard from '../components/cards/ProjectCard';
import HeroH1 from '../components/headings/HeroH1';
import SectionH1 from '../components/headings/SectionH1';
import HomeHero from '../components/sections/HomeHero';
import HomeProjects from '../components/sections/HomeProjects';
import HomeSkills from '../components/sections/HomeSkills';

const Home = () => {
    return (
        <>
            <div className="min-h-screen space-y-20 py-6">
                <HomeHero />
                <HomeSkills />
                <HomeProjects />
            </div>
        </>
    )
}

export default Home


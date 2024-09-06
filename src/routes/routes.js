import { lazy } from 'react'

const Home = lazy( () => import( '../pages/Home' ) )
const Projects = lazy( () => import( '../pages/Projects' ) )
const Contact = lazy( () => import( '../pages/Contact' ) )
const Resume = lazy( () => import( '../pages/Resume' ) )
const Error404 = lazy( () => import( '../pages/Error404' ) )
const Coming = lazy( () => import( '../pages/Coming' ) )
const ProjectDetails = lazy( () => import( '../pages/ProjectDetails' ) )
const Loading = lazy( () => import( '../pages/Loading' ) )

export const routes = [
    {
        path: '/coming',
        title: 'Coming',
        component: Coming,
    },
    {
        path: '/loading',
        title: 'Loading',
        component: Loading,
    },
    {
        path: '*',
        title: 'Error404',
        component: Error404,
    },
]

export const layoutRoutes = [
    {
        path: '/',
        title: 'Home',
        component: Home,
    },
    {
        path: '/projects',
        title: 'Projects',
        component: Projects,
    },
    {
        path: '/projects/:projectId',
        title: 'Projects Details',
        component: ProjectDetails,
    },
    {
        path: '/contact',
        title: 'Contact',
        component: Contact,
    },
    {
        path: '/resume',
        title: 'Resume',
        component: Resume,
    },
]
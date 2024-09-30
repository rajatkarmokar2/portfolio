import { lazy } from 'react'
import Demo from '../pages/Demo'

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
        element: <Coming />,
    },
    {
        path: '/loading',
        title: 'Loading',
        element: <Loading />,
    },
    {
        path: '/demo',
        title: 'Demo',
        element: <Demo />,
    },
    {
        path: '*',
        title: 'Error404',
        element: <Error404 />,
    },
]

export const layoutRoutes = [
    {
        path: '/',
        title: 'Home',
        element: <Home />,
    },
    {
        path: '/projects',
        title: 'Projects',
        element: <Projects />,
    },
    {
        path: '/projects/:projectId',
        title: 'Projects Details',
        element: <ProjectDetails />,
    },
    {
        path: '/contact',
        title: 'Contact',
        element: <Contact />,
    },
    {
        path: '/resume',
        title: 'Resume',
        element: <Resume />,
    },
]
import { lazy,Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import Loading from './pages/Loading'
import { layoutRoutes,routes } from './routes/routes'
import useScrollToTop from './hooks/useScrollToTop'
const Layout = lazy( () => import( './layouts/Layout' ) )
import './App.css'

function App () {
  useScrollToTop()
  return (
    <div className='font-manrope text-darkblue dark:text-white bg-white dark:bg-dark min-h-screen'>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            { layoutRoutes.map( ( item ) => (
              <Route
                key={ item.path }
                path={ item.path }
                element={ item.element }
              />
            ) ) }
          </Route>

          { routes.map( ( item ) => (
            <Route
              key={ item.path }
              path={ item.path }
              element={ item.element }
            />
          ) ) }
        </Routes>
      </Suspense>
    </div>
  )
}

export default App





import './App.css'
import { lazy,Suspense } from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import Loading from './pages/Loading'
import { layoutRoutes,routes } from './routes/routes'
import { Helmet } from 'react-helmet'
const Layout = lazy( () => import( './layouts/Layout' ) )

const routesObject = Object.groupBy( [ ...layoutRoutes,...routes ],( { path } ) => path )

function App () {
  const { pathname } = useLocation()

  return (
    <>
      <Helmet>
        <title>{ routesObject[ pathname ][ 0 ].title }</title>
      </Helmet>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            { layoutRoutes.map( ( item ) => (
              <Route
                key={ item.path }
                path={ item.path }
                element={ <item.component /> }
              />
            ) ) }
          </Route>
          { routes.map( ( item ) => (
            <Route
              key={ item.path }
              path={ item.path }
              element={ <item.component /> }
            />
          ) ) }
        </Routes>
      </Suspense>
    </>
  )
}

export default App





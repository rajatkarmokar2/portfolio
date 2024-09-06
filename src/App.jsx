import './App.css'
import { lazy,Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import Loading from './pages/Loading'
import { layoutRoutes,routes } from './routes/routes'
import { Helmet } from 'react-helmet'
const Layout = lazy( () => import( './layouts/Layout' ) )

function App () {
  return (
    <>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            { layoutRoutes.map( ( item ) => (
              <Route
                key={ item.path }
                path={ item.path }
                element={<item.component />}
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





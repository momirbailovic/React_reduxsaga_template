//@flow
import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Home = React.lazy(() => import('../containers/home'))
const Versus = React.lazy(() => import('../containers/versus/index.jsx'))
const Profile = React.lazy(() => import('../containers/profile/index.jsx'))
const NotFound = React.lazy(() => import('../components/notFound/NotFound'))

const Loading = () => {
  return <div className="appHeader">...loading</div>
}

type Props = {}
const ProjectRoutes = (props: Props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/versus" exact component={Versus} />
          <Route path="/profile" exact component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default ProjectRoutes

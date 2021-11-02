import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import Loader from '../components/loader';
// Import Containers
const HomePage = React.lazy(() => import('../containers/HomePage'));
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'));
const DetailPage  = React.lazy(() => import('../containers/ContestDetailPage'))
const ContestByType  = React.lazy(() => import('../containers/ContestByType'))
const UserHistory  = React.lazy(() => import('../containers/UserHistory'))
const AdminHistory  = React.lazy(() => import('../containers/AdminHistory'))

const Routes = () => (
  <Suspense fallback={Loader}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contest-detail-page/:id" component={DetailPage} />
      <Route exact path="/contests/:type" component={ContestByType} />
      <PrivateRoute exact path="/user-history" component={UserHistory} />
      <PrivateRoute exact path="/admin-history" component={AdminHistory} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
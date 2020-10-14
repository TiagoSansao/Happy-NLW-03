import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanageMap} />
        <Route path="/orfanatos/criar" component={CreateOrphanage}/>
        <Route path="/orfanatos/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
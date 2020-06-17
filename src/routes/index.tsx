import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';

export default function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} />
      <Route path="/product/:slug" component={Detail} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

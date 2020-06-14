import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:slug" component={Detail} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

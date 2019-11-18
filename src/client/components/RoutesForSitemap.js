import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { perspectiveConfig } from '../configs/sotasurmat/PerspectiveConfig';
import { rootUrl } from '../configs/config';

const tabRoutes = id => {
  const tabs = perspectiveConfig.find(p => p.id === id).tabs;
  return (
    <React.Fragment>
      {tabs.map(tab =>
        <Route
          key={tab.id}
          path={`${rootUrl}/${id}/faceted-search/${tab.id}`}
        />
      )}
    </React.Fragment>
  );
};

const router = (
  <Switch>
    <Route path={`${rootUrl}/feedback`} />
    <Route path={`${rootUrl}/instructions`} />
    {perspectiveConfig.map(perspective => {
      let routes = [];
      routes.push(
        <Route
          key={perspective.id}
          path={`${rootUrl}/${perspective.id}/faceted-search`}
        />);
      routes.push(tabRoutes(perspective.id));
      return routes;
    })}
  </Switch>
);

export default router;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
  ProductVisualizationPage,
  ProductListingPage,
} from 'pages'
import { HeaderComponent } from 'components'


function App() {
  return (
    <div className="app">
      <HeaderComponent />

      <main className="app__main">
        <Switch>
          <Route
            path="/visualize"
            component={ProductVisualizationPage}
          />
          <Route
            path="/listing"
            // exact={true}
            component={ProductListingPage}
          />
          <Redirect to="listing" />
        </Switch>
      </main>
    </div>

  );
}

export default App;

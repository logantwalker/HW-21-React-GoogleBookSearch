import React from "react";
import Home from './pages/Home/Home';
import Saved from './pages/Saved/Saved';
import NoMatch from './pages/NoMatch';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="/">Google Books Search</a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem href="/">
            Search
            </NavItem>
          <NavItem href="/saved">
            Saved
          </NavItem>

        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

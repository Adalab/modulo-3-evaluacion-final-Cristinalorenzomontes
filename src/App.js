import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../src/components/home";
import About from "../src/components/about";
import Pricing from "../src/components/pricing";

class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

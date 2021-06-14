import HomeScreen from "./Components/Screen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HearderView from "../src/Components/Screen/HearderView";
import SingleCard from "./Components/Screen/SingleCard";
import CartList from "./Components/Screen/CartList";

function App() {
  return (
    <>
      <Router>
        <HearderView />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/watch" component={CartList} />
          <Route exact path="/singleView/:id" component={SingleCard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

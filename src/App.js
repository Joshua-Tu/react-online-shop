import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicList = props => {
  console.log(props);

  return (
    <div>
      <h1>Topic List</h1>
      <Link to={`${props.match.url}/1`}>TO TOPIC 1</Link>
      <Link to={`${props.match.url}/2`}>TO TOPIC 2</Link>
      <Link to={`${props.match.url}/3`}>TO TOPIC 3</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);

  return (
    <div>
      <Link to="/">Go Back Home</Link>
      <button onClick={() => props.history.push("/topics")}>Topic List</button>
      <h1>Topic Detail</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/topics" exact component={TopicList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;

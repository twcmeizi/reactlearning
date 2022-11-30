import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      {/* <Switch> */}
        <Route  path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/topics/:id" component={Topic2} />
        {/* <Route path="/test" component={Test} /> */}
        <Route path="/test/:id(a|b)" component={Topic2} />
        <Redirect to='/' ></Redirect>
      {/* </Switch> */}
    </div>

  </Router>
);
const Test = ({ match }) => {
  console.log("test")
  return <div>test</div>
}
const Test2 = ({ match }) => {
  console.log("test2")
  return <div>test</div>
}
const Topic2 = ({ match }) => {
  return <div>{match.params.id}</div>
}
const Home = (props) => {
  console.log(props); return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
const About = (props) => {
  console.log(props); return (
    <div>
      <h2>About</h2>
    </div>
  );
}

const SelectTopic = () => (
  <div>
    selectTopic
  </div>
)

const Topics = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} component={SelectTopic} render={() => {
          return <div>4444</div>
        }} /> */}
    </div>
  );
}

const Topic = ({ match }) => {
  console.log(match); return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
import "./App.css";
import Home from "./components/Home";
import Index from "./components/Index";
import { Route, Switch } from "react-router-dom";
import Description from "./components/Description/Description.js";
import Post from "./components/Post/Post";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Index} />
        <Route exact path="/addgame" component={Post} />
        <Route exact path="/description/:id" component={Description} />
        <Route exact path="/*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;

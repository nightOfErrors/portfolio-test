import './App.css';
import Home from './components/home';
import AboutNskills from './components/aboutAndSkills';
import Projects from './components/projects';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-skills" component={AboutNskills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

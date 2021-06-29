import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import '../styles/App.css';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
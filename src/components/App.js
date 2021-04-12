import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import '../styles/App.css';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
      <Navbar />
    </div>
    </>
  );
}

export default App;
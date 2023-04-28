import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import School from './School';
import Companies from './Companies';
import SchoolDetails from './SchoolDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/School">
            <School />
          </Route>
          <Route path='/Companies'>
            <Companies />
          </Route>
          <Route path="/School/:id">
            <SchoolDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

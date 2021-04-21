import './App.css';
import Signup from './page/Signup';
import Signin from './page/Signin';
import Listbuku from './page/Listbuku';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact={true} component= {Listbuku}/>
        <Route path="/Signup" component= {Signup}/>
        <Route path="/Signin" component= {Signin}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
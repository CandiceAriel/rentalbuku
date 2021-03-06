import './App.css';
import Signup from './page/Signup';
import Signin from './page/Signin';
import Listbuku from './page/Listbuku';
import Transaksi from './page/Transaksi';
import Addbuku from './page/Addbuku';
import Member from './page/Member';
import Listpeminjaman from './page/Listpeminjaman';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact={true} component= {Listbuku}/>
        <Route path="/Signup" component= {Signup}/>
        <Route path="/Signin" component= {Signin}/>
        <Route path="/Transaksi" component= {Transaksi}/>
        <Route path="/Peminjaman" component= {Listpeminjaman}/>
        <Route path="/Addbuku" component= {Addbuku}/>
        <Route path="/Member" component= {Member}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
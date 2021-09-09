import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import store from './redux/cofigureStore';
import { getAnime } from './redux/api/api';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(getAnime());

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

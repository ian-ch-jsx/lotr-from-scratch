import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/books">Books</NavLink>
        </div>
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

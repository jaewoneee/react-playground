import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
// components
import Header from './common/AppHeader';
import Main from '../pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/:id">
          <div>Hello</div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;

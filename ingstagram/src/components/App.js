import { Switch, Route } from 'react-router-dom';

// style
import '../styles/reset.scss';
import '../styles/style.scss';

// components
import Header from './common/Header';
import Navigation from './common/Navigation'
import Main from '../pages/MainPage';
import Upload from '../pages/UploadPage'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/upload" component={Upload}></Route>
      </Switch>
      <Navigation></Navigation>
    </div>
  );
}

export default App;

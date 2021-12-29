import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
// style
import '../styles/reset.scss';
import '../styles/style.scss';
// components
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation'
import Main from '../pages/MainPage';
import Upload from '../pages/UploadPage'

function App() {
    const state = useSelector((state) => state.isDarkMode );

  return (
    <div className={classnames('App', { 'dark' : state })}>
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

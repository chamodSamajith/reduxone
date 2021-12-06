import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div>
        <Postform/>
        <hr/>
        <Posts/>
      </div>
    </div>
    </Provider>
  );
}

export default App;

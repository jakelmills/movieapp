import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home'
import Movie from './components/Movie'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import reducers from './reducers';
import routeSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(routeSaga)

function App() {
  
  return (
    <Provider store = {store}>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={((<Header/>), (<Home/>) )} />
          </Routes>
        </div>
      </BrowserRouter>     
  );
}

export default App;

import './App.css';
import { BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Main from './Main';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>     
  );
}

export default App;

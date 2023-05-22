import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import SearchAddress from './pages/searchAddress';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/address' element={<SearchAddress/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './styles/global.scss'
import HomePage from './components/pages/home/home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App



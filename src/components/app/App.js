import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from '../../pages/MainPage';

import DownloadPage from '../../pages/dowloadPage/DownloadPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/download' element={<DownloadPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
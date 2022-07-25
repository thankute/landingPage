import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className={'wrapper'}>
          <Header />
          <Routes>
            <Route path='/landingPage' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

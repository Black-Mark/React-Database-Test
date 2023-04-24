import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpListing from './EmpListing';

function App() {
  return (
    <>
    <div className='App'>
      <h1>React JS Crud Operations</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EmpListing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;

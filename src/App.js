import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';
import Pagenotfound from './pagenotfound';
function App() {
  return (
    <>
    <div className='App'>
      <h1>React JS Crud Operations</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EmpListing />} />        
            <Route path='/employee/create' element={<EmpCreate />} />
            
            <Route path='/employee/edit/:empid' element={<EmpEdit />} />
            <Route path='/employee/view/:empid' element={<EmpView />} />
            <Route path='/*' element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;

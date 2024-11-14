import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CertainUser from './components/CertainUser';
import PersonList from './components/PersonList';

function App() {
  return (

    <BrowserRouter>
      <div className='w-full h-full p-96  bg-sky-900 rounded-md'>

        <Routes>
          <Route path="/certainUser/:userID" element={<CertainUser />} />
          <Route path='/' element={<PersonList />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

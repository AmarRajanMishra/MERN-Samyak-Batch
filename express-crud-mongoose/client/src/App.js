
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './component/UserList';
import AddUser from './component/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/add' element={<AddUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

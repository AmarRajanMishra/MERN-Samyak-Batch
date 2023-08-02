
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AddUser />} />
        <Route path='/users' element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;

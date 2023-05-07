import './App.css';
import Login from './Chat/Login/Login';
import SignUp from './Chat/Login/Signup';
import { Route,Routes } from 'react-router-dom';
import Chat from './Chat/Chat.js';
import { UserAuthContextProvider } from './Chat/Login/UserAuthContext';
import ProtectedRoute from './Chat/Login/ProtectedRoute';

function App() {
 
  return (
   <div className="App">
    <UserAuthContextProvider>
      <Routes>
      <Route path="/home" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>
        <Route path='/' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        
      </Routes>
    </UserAuthContextProvider>
   </div>
  );
}

export default App;

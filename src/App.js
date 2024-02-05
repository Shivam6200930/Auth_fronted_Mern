import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import PageNotFound from './components/pageNotFound/pageNotFound';
import Layout from './components/Layout/Layout';
import ChangeUserPassword from './components/changeUserPassword/ChangeUserPassword';
import Edit from './components/Edit/Edit';
import Profile from './components/Profile/Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route
           path="/" element={<Layout/>}>
              <Route index element={<Homepage/>}></Route>
              <Route path="/changeuserpassword" element={<ChangeUserPassword/>}></Route>
           </Route>
           <Route path="*" element={<PageNotFound/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/edit" element={<Edit/>}></Route>

      </Routes>
      </Router>
     
    </>
  );
}
export default App;
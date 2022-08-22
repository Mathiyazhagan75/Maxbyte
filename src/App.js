import React from 'react';
import Home from "./pages/home/Home"
import Addshift from './pages/shift/shiftTiming/Addshift/Addshift';
import Model from './pages/modelshift/model';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
//import 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>    
      <Sidebar>
      <Navbar/>  
         <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="shift">
            <Route path="new" element={<Addshift/>}/>
            </Route>
            <Route path="model" element={<Model/>}> 
            </Route>
          </Route>
         </Routes> 
         </Sidebar>
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import Home from "./pages/home/Home"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


 
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="users">
            </Route>
          </Route>
          <Route path="products">
            </Route>
         </Routes>      
    </Router>
    </div>
  );
}

export default App;

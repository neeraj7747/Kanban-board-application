import './App.css';
import { useState} from "react";
import Display from './components/Display';
import DisplayStatus from './components/DisplayStatus';
import DisplayUser from './components/DisplayUser';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  }
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Display check={check} toggleCheck={toggleCheck} />} />
        {/* <Route path="/" element={<Display />}/> */}
        <Route path="/user" element={<DisplayUser check={check} toggleCheck={toggleCheck}/>}/>
        <Route path="/status" element={<DisplayStatus check={check} toggleCheck={toggleCheck}/>}/>
      </Routes>
    </Router>



      {/* <Cards title="Card 1" tag="Feature Request" id="Cam 11(id)" /> */}
          
    </>
  );
}

export default App;

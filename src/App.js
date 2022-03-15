import React, {useState , useEffect} from 'react';
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import './styles/App.css';


const url = ' '


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)



return (
    <>  <header>
   <h1>sidebar/modal - context API</h1>
  </header>

    <div>this continues my attempts to make barebones versions of projects from John Smilga's React Tutorial with little to no help/reference and other places - stricly for coding practice/learning concepts. if anyone sees these, please disregard the styling/formatting etc. :) </div>
<br></br>
<div>this one was more of a learning experience rather than practice as i did not properly watch the Context API tutorial videos. however, at a certain point, i didn't require the video's help to complete this project.</div>
<br></br>
<Home></Home>
<Modal></Modal>
<Sidebar></Sidebar>
<br></br>
  

<div className="container">


  </div>
 
</>
)}
  


export default App;

import React, {useState , useEffect} from 'react';
import './styles/App.css';


const url = ' https://dog.ceo/api/breeds/image/random/3 '


function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)


const fetchDogs = async() => {
  try {
    
  const response = await fetch (url) ;
  const newDogs = await response.json();
  setDogs(newDogs)
setLoading(false)

  }
  catch (error) {
console.log(error)
  }
}

useEffect(() => {
  fetchDogs()
 } , []);


if (loading)  {
return (<div>
  loading..
</div>) }


return (
    <>  <header>
    ugly basic tabs project - fetches 3 dog Pics from API, displays them in separate tabs
  </header>

<div className="container">

<div><img src={dogs.message[value]}></img></div>
  </div>

 {dogs.message.map((dog, index)=> {
 return <div> <button onClick={()=>(setValue(index))}>dog {index +1}</button> </div>})}

</>
)}
  


export default App;

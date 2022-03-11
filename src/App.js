import React, {useState} from 'react';
import './styles/App.css';
import Menu from './components/Menu.js'
import Types from './components/Types.js'

import data from './components/data.js'

const allTypes= ['all', ...new Set (data.map((item) => item.type
))]
console.log(allTypes)


function App() {
  const [menuItems, setMenuItems] = useState(data);
    const [mealType, setType] = useState(allTypes);

    const filterItems = (type) => {
      if (type == 'all') {
        setMenuItems(data)
      }
      else {
const newItems = data.filter((item) => item.type == type)
setMenuItems(newItems)
      }
    }


  return (
    <>  <header>
    menu
  </header>
<Types filterItems={filterItems} types={mealType}></Types>


<div className="container">
<Menu items={menuItems}></Menu>
  </div>


</>

  )
}

export default App;

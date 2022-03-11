import React, {useState} from 'react';


function Menu({items}) {


  return (
    <> 
      {items.map((item)=> {
    const {name, type, id} = item;
return <div> {id} {name}  {type}

</div>
  })}
</>
  )
}

export default Menu;

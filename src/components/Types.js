import React, {useState} from 'react';


function Types({ filterItems, types}) {

  return (
    <> 
     <div>
         {types.map((type)=> {
           return  <button onClick={() =>filterItems(`${type}`)}>{type}</button>
         })}
  
 
 </div>

</>

  )
}

export default Types;

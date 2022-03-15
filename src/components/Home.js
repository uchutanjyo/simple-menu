import React, {useContext} from 'react'
import { AppContext, useGlobalContext } from './context';


const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();

    return (
        <>
<button onClick={openModal}>open modal</button>
<br></br>
<button onClick={openSidebar}>open sidebar</button>
</>
    )
}

export default Home;
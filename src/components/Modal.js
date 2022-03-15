import React, {useContext} from 'react'
import { useGlobalContext } from './context';

const Modal = () => {
  const  { isModalOpen, closeModal} = useGlobalContext()
    return (
        <div className={`${isModalOpen ? 'modal show-modal' : 'modal'}`}>
            <h1>modal</h1>
            <button onClick={closeModal}>close modal</button>

        </div>
    )
}

export default Modal;
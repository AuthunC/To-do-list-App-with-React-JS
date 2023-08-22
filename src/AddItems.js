import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef=useRef();
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
            type="text" 
            placeholder='Add Items' 
            autoFocus required
            ref={inputRef}
            value={newItem} 
            onChange={(e)=>setNewItem(e.target.value)}/>
            <button onClick={()=>inputRef.current.focus()}>
            <FaPlus className='plusIcon' />
            
            </button>
            
        </form>
    )
}

export default AddItems
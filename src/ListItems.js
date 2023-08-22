import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const ListItems = ({items,handleChange,handleDelete}) => {
    return (
        <ul className='itemParent'>
                {items.map((item) =>(
                    <li className='item' key={item.id}>
                        <div className='input-label-container'>
                            <input 
                                className='check'
                                type="checkbox"
                                onChange={() => handleChange(item.id)}
                                checked={item.checked} 
                            />
                            <label className='label' style={(item.checked)?{textDecoration:'line-through'}: null}>{item.item}</label>
                        </div>
                        <FaTrashAlt 
                            className='icon'
                            role='button'
                            onClick={()=>handleDelete(item.id)}
                            aria-label={'Delete ${item.item}'}
                        />
                    </li>
                ))}
            </ul>
    )
}

export default ListItems
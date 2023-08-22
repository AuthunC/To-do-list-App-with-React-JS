import React from 'react'
import { useState } from 'react';

import ListItems from './ListItems';

const Body = ({items,handleChange,handleDelete}) => {

    // let [name,setName]=useState("Cars");
    // function Cars(){    
    //     const names=["Cars","Bikes","Cycles"];
    //     const rand=Math.floor(Math.random()*3);
    //     setName(names[rand]);
    // }
    
    // function handleClick(){
    //     console.log("Thank You");
    // }
    // function  handleDoubleClick(name){
    //     console.log(`Thank You ${name}`);
    // }

    
    return (
        <>
            {/* <p onDoubleClick={() => handleDoubleClick('Authun')}>We sell Cars</p>
            <button onClick={handleClick}>Click Me</button>
            <p>I love {name}</p>
            <button onClick={Cars}>Change</button> */}
            {(items.length) ? (
                <ListItems 
                    items={items}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>No Items in the list</p>
            )
        }
        </>
    );
}

export default Body;
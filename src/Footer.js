import React from 'react'

const Footer = ({length}) => {
    // let date=new Date();
  return (
    <footer className='foot'><p className='foot_text'>{length} List {length===1 ? "item" :"items"}</p></footer>
    // <footer className='foot'>{Copyright &copy {date.getFullYear}}</footer>
  );
}

export default Footer;
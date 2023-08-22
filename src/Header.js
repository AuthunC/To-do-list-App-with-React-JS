import React from 'react';
const Header = ({title}) => {
    return (
        <header className='head'><h1>{title}</h1></header>
    );
}

Header.defaultProps = {
    title:"My to-do list"
}
export default Header;
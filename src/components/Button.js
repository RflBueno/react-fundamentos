import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from '../context/ThemeContext'


export default function Button(props) {
    const { theme } = useContext(ThemeContext);

    return(
        <button 
        onClick={props.onClick} 
        style={{
            backgroundColor: theme === 'dark' ? '#000' : '#FFF',
            color: theme === 'dark' ? '#FFF' : '#000',
            // border: 'none',
            // padding: '10px 20px',
            // borderRadius: '5px',
            // cursor: 'pointer',
        }}
        >{props.children}</button>
    );
}



Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}
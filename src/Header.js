import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

export default function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: '#EAE4D5',
                color: '#000000',
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <header>
                <h1>{props.title}</h1>
                <Button onClick={onToggleTheme}>Mudar tema</Button>
                {props.children}
            </header>
        </div>
    );
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};
Header.defaultProps = {
    title: ` JStack's App `,
};
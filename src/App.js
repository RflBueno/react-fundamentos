import React, { Fragment } from 'react';



const category = 'Posts da semana';

// Functional component
function App() {
    return (
        <>
        <h1>JStack's App</h1>
        <h2>{category}</h2>
        
        <hr/>

        <article>
            <strong>Post 1</strong>
        </article>
        </>
    );
}


export default App;
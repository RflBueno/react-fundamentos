import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';



function App() {


    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Título da notícia 01', subtitle: 'Subtítulo da notícia 01', likes: 10, read: false, removed: false },
        { id: Math.random(), title: 'Título da notícia 02', subtitle: 'Subtítulo da notícia 02', likes: 20, read: true, removed: false },
        { id: Math.random(), title: 'Título da notícia 03', subtitle: 'Subtítulo da notícia 03', likes: 30, read: false, removed: false },
    ]);


    console.log({ posts });


    

    function handleRefresh() {
        // posts.push({ id: Math.random(), title: `Título da notícia ${posts.length + 1}`, subtitle: `Subtítulo da notícia ${posts.length + 1}`, likes: 40, });

        // console.log({ posts });

        setPosts((prevState) => [...prevState, { id: Math.random(), title: `Título da notícia ${prevState.length + 1}`, subtitle: `Subtítulo da notícia ${prevState.length + 1}`, likes: 40, }]);
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => (
                post.id === postId
                 ? { ...post, removed: true } : post
            )
        ));
    }

    return (
        <ThemeProvider>

        <Header>
            <Title as="h2">Posts da semana
                <button onClick={handleRefresh}>Atualizar</button>
            </Title>
        </Header>

        <hr/>

        {posts.map(post => (
            <Post
                key={post.id}
                onRemove={handleRemovePost}
                likes={post.likes}
                post={post}
            />
        ))}
        
        </ThemeProvider>
    );
}


export default App;
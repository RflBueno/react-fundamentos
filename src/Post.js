import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import PostHeader from './PostHeader.js';
import styles from './Post.scss';


export default function Post(props) {
    
    return(
        <article className={styles.post}>
            <PostHeader 
                onRemove={props.onRemove}
                post={{
                    id: props.post.id,
                    title: props.post.title,
                    read: props.post.read,
                }}
            />
            <br />
            <span>{props.post.likes / 2} Média</span>
        </article>
    );  
}


Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
};
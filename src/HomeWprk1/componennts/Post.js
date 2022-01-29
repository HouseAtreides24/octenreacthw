import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            {item.id}--{item.userId}--{item.title}
        </div>
    );
};

export default Post;
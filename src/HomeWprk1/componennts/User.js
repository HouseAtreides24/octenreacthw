import React from 'react';

const User = ({item}) => {
    return (
        <div>
            {item.id}--{item.name}--{item.username}
        </div>
    );
};

export default User;
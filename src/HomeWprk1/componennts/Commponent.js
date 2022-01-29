import React from 'react';

const Commponent = ({item}) => {
    return (
        <div>
            {item.name}--{item.email}--{item.body}
        </div>
    );
};

export default Commponent;
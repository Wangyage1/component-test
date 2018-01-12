import React from 'react';

const Icon = ({ name, size = 'default', onClick = () => true, style = {} }) => {
    return (
        <span
            className={`icon icon-${size} ${name}`}
            onClick={onClick}
            style={style}
        />
    );
};

export default Icon;

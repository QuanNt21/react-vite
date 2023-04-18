import React from 'react';
import "./MyComponent.scss"

const MyComponent = (props) => {
    return (
        <div className='my-component'>
            {props.count}
        </div>
    );
};

export default MyComponent;
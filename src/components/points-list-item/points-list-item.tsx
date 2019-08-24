import React from 'react';


const PopintsListItem = (props: { name: string }): JSX.Element => { 
    return (
        <li className="list-group-item">{ props.name }</li>
    );
};

export default PopintsListItem;
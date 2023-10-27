import React from 'react';

export default function Button(props) {
    return (
        <button onClick = {props.ratStart} className = "button">{props.children}</button>
    );
}
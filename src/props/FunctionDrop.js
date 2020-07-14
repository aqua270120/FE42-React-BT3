import React from 'react'

export default function FunctionDrop(props) {
    return (
        <div>
            <h3>Functions Drops</h3>
            <div>{props.name} - {props.lop}</div>
            <div>{props.children}</div>
        </div>
    )
}

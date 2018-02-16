import React from 'react'

export default function (props) {
    return (
        <button type="button" className={'btn btn-success'} {...props}>{props.children}</button>
    )
}
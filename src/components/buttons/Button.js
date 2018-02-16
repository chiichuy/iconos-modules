import React from 'react'

export default function (props) {
    return (
        <button type="button" className={'btn btn-primary'} {...props}>{props.children}</button>
    )
}
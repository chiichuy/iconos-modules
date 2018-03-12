import React from 'react'

export default function({title, id, name, required=false, value, onChange = () => {}}, errorMessage, hasError = false, classNames = 'col') {
    return (
        <div className={classNames}>
            <label htmlFor={id}>{title}</label>

            <input type="text"
                   className={`form-control ${hasError ? 'is-invalid': ''}`}
                   id={id}
                   placeholder={title}
                   name={name}
                   required={required}
                   value={ value }
                   onChange={onChange}/>

            <div className="invalid-feedback">
                {errorMessage}
            </div>
        </div>
    )
}
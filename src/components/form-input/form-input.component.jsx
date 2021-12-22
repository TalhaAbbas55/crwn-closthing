import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherprops }) => {
    return (
        <div className="group">
            <input onChange={handleChange} {...otherprops} className="form-input" />
            {label ? (
                <label className={`${otherprops.value.length ? 'shrink' : ''
                    } form-input-label`}
                >{label}</label>
            ) : null}
        </div>
    )

}

export default FormInput;
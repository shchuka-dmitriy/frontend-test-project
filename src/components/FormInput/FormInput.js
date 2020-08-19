import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {
    const { label, input, type, classes, meta: {touched, active, error} } = props;
    const inputClassName = classNames(classes.input, {
        [classes.valid]: active && !error,
        [classes.notValid]: touched && error
    });

    return (
        <div className={classes.container}>
            <input {...input} placeholder={label} type={type}
                   className={ inputClassName }/>
            {classes.warning && (touched && (error && <span className={classes.warning}>{error}</span>))}
        </div>
    )
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    classes: PropTypes.shape({
        container: PropTypes.string,
        input: PropTypes.string,
        valid: PropTypes.string,
        notValid: PropTypes.string,
        warning: PropTypes.string
    })
};

export default FormInput;
import React from 'react';
import styles from '../../assets/styles/Form.module.sass';
import Error from '../../components/Error/Error';
import {connect} from 'react-redux';
import {authActionLogin, authActionRegister, clearAuth} from "../../actions/actionCreator";
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';

class Form extends React.Component {

    componentWillUnmount() {
        this.props.authClear();
    }

    /**
     * @description By condition dispatch one of actions: login or register
     * @param {Object} values
     */
    onClickedHandler = (values) => {
        this.props.isAuth
            ? this.props.loginRequest(values)
            : this.props.register(values);
    };

    render() {
        const formFieldClasses = {
            container: styles.inputContainer,
            input: styles.input,
            warning: styles.fieldWarning,
            valid: styles.valid,
            notValid: styles.notValid
        };
        const {error, isFetching} = this.props.auth;
        const {handleSubmit, submitting, authClear} = this.props;

        return (
            <div className={styles.loginForm}>
                {error && <Error data={error.data} status={error.status} clearError={authClear}/>}
                <form onSubmit={handleSubmit(this.onClickedHandler)}>
                    <Field
                        name='username'
                        classes={formFieldClasses}
                        component={FormInput}
                        type='text'
                        label='Username'
                    />
                    <Field
                        name='password'
                        classes={formFieldClasses}
                        component={FormInput}
                        type='password'
                        label='Password'
                    />
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span>
                            {
                                isFetching ? 'Submitting...' :
                                    this.props.isAuth ? 'LOGIN' : 'Create Account'
                            }
                        </span>
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        loginRequest: (data) => dispatch(authActionLogin(data)),
        register: (data) => dispatch(authActionRegister(data)),
        authClear: () => dispatch(clearAuth())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'form',
    validate: customValidator(Schemes.LoginRegistrationSchema)
})(Form));
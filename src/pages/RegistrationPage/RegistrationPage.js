import React from 'react';
import Form from '../../components/Form/Form';
import styles from '../../assets/styles/LoginRegistrationPages.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import PropTypes from "prop-types";

const RegistrationPage = (props) => {
    props.clearError();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapperContainer}>
                <div className={styles.headerPage}>
                    <Link to={'/'}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}ek-logo1.png`} className={styles.logo} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.headerFormContainer}>
                    <h2 className={styles.formHeader}>
                        CREATE AN ACCOUNT
                    </h2>
                    <h4 className={styles.formUnderheader}>
                        We always keep your name and email address private.
                    </h4>
                    <Form isAuth={false}/>
                </div>
            </div>
        </div>
    )
};

RegistrationPage.propTypes = {
    clearError: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
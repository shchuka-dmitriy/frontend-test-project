import React from 'react';
import Form from '../../components/Form/Form';
import styles from '../../assets/styles/LoginRegistrationPages.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import PropTypes from 'prop-types';

const LoginPage = (props) => {
    props.clearError();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapperContainer}>
                <div className={styles.headerPage}>
                    <Link to={'/'}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}ek-logo1.png`} className={styles.logo} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}>
                            <span>Sign up</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.headerFormContainer}>
                    <h2 className={styles.formHeader}>LOGIN TO YOUR ACCOUNT</h2>
                    <Form isAuth={true}/>
                </div>
            </div>
        </div>
    )
};

LoginPage.propTypes = {
    clearError: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);
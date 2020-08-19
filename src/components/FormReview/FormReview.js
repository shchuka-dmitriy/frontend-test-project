import React, { useState } from 'react';
import styles from './FormReview.module.sass';
import '../../assets/styles/react-confirm-alert.css';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {confirmAlert} from 'react-confirm-alert';
import {createReviewAction, getProductByIdAction} from "../../actions/actionCreator";
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import CONSTANTS from "../../constants";
import Rating from "react-rating";
import Schemes from '../../validators/validationSchemes';

const FormReview = ({handleSubmit, productId, isFormRender, createReview, getProductById, reset}) => {

    const [rate, setRate] = useState( 0 );

    const formInputClassNames = {
        container: styles.inputContainer,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    /**
     * @description Changes numbers of stars - rate
     * @param {Number} value
     */
    const changeMark = (value) => {
        setRate(value);
    };

    const onSubmit = (reviewData) => {
        confirmAlert({
            message: 'Are you sure wish to create new review?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        createReview({
                            text: reviewData.text,
                            rate: rate,
                            productId: productId,
                        });
                        getProductById(productId);
                    }
                },
                {
                    label: 'No',
                }]
        });
        isFormRender();
        reset();
    };

    /**
     * @description Clear form fields
     */
    const onReset = () => {
      reset();
      setRate(0);
    };

    return (
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        name='text'
                        classes={formInputClassNames}
                        component={FormInput}
                        type='text'
                        label='Your review'
                    />
                    <span className={styles.fieldLabel}>Rate the product, please</span>
                    <Rating
                        fractions={1}
                        value={rate}
                        fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                        placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                        emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`} alt='star'/>}
                        onClick={changeMark}
                        placeholderRating={rate}
                    />
                    <div className={styles.choseAnswerContainer}>
                        <button type='submit' className={styles.submitContainer}>
                            <span className={styles.submitButton}>create new review</span>
                        </button>
                        <button type='button' className={styles.submitContainer} onClick={onReset}>
                            <span className={styles.submitButton}>clear fields</span>
                        </button>
                    </div>
                </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {productsStore, productByIdStore, reviewStore} = state;
    return {productsStore, productByIdStore, reviewStore}
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReviewAction(review)),
        getProductById: (id) => dispatch(getProductByIdAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'form',
    validate: customValidator(Schemes.ReviewSchema)
})(FormReview));
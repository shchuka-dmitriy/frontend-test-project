import React, { useState } from 'react';
import styles from "../../pages/ProductPage/ProductPage.module.sass";
import CONSTANTS from "../../constants";
import Rating from "react-rating";
import FormReview from "../FormReview/FormReview";
import PropTypes from 'prop-types';

const ProductInfo = ({currentProduct, productData, productId}) => {

    const [isRenderForm, setIsRenderForm] = useState( false );
    const isUserAuthorized = localStorage.getItem("accessToken");
    const {img, text, title} = currentProduct;

    const renderReviewForm = () => {
        setIsRenderForm(!isRenderForm)
    };

    /**
     * @description Calculates the average rating
     * @return {number}
     */
    const avgRate = () => {
        let rating = null;
        if (productData) {
            for (let i = 0; i < productData.length; i++) {
                rating += productData[i].rate;
            }
            return Math.round(rating/productData.length);
        }
    };

    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.productContainer}>
                <div className={styles.imageAndRatingContainer}>
                    <div>
                        <img src={!img ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.STATIC_IMAGES_PATH}${img}`}
                             className={styles.productImages} alt='Product'/>
                    </div>
                    <div className={styles.creativeRating}>
                        <Rating
                            initialRating={avgRate()}
                            fractions={1}
                            fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                            placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                            emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`}
                                              alt='star-outline'/>}
                            readonly={true}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.dataContainer}>
                        <span className={styles.label}>Title</span>
                        <span className={styles.data}>{title}</span>
                    </div>
                    <div className={styles.dataContainer}>
                        <span className={styles.label}>Description</span>
                        <span className={styles.data}>{text}</span>
                    </div>
                </div>
                {
                    isUserAuthorized &&
                    <div className={styles.createReviewButton} onClick={ () => renderReviewForm() }>
                        <span>Create review</span>
                    </div>
                }
            </div>

            <div className={styles.createReviewContainer}>
                {
                    isRenderForm && <FormReview isFormRender={renderReviewForm} productId={productId}/>
                }
            </div>
        </div>
    );
};

ProductInfo.propTypes = {
    currentProduct: PropTypes.object.isRequired,
    productData: PropTypes.array,
    productId: PropTypes.string.isRequired,
};

export default ProductInfo;
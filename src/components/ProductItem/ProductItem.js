import React from 'react';
import styles from './ProductItem.module.sass';
import {connect} from "react-redux";
import CONSTANTS from "../../constants";
import {getProductByIdAction} from "../../actions/actionCreator";
import Rating from "react-rating";
import history from "../../browserHistory";
import PropTypes from 'prop-types';

class ProductItem extends React.Component {

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        this.props.getProductById(this.props.data.id);
    };

    calculateAvgRating = () => {
        const {productData} = this.props;
        let rating = null;
        if (productData) {
            for (let i = 0; i < productData.length; i++) {
                rating += productData[i].rate;
            }
            rating = rating/productData.length;
            return Math.round(rating);
        }
    };

    /**
     * @description Redirect to Product info page
     * @param {Number} product_id
     */
    goToExtended = (product_id) => {
        history.push('/product/' + product_id);
    };

    /**
     *
     * @description Creates event element
     * @return {html} - Event element
     */
    renderProductItem = () => {
        const {id, img, text, title} = this.props.data;
        const rating = this.calculateAvgRating();
        return (
            <div onClick={() => this.goToExtended(id)} className={styles.productMainContainer}>
                <div>
                    <img src={!img ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.STATIC_IMAGES_PATH}${img}`}
                         className={styles.productImages} alt='Product'/>
                </div>

                <div className={styles.creativeRating}>
                    <Rating
                        initialRating={rating}
                        fractions={2}
                        fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                        placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                        emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`}
                                          alt='star-outline'/>}
                        readonly={true}
                    />
                </div>

                <div className={styles.descriptionContainer}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{text}</span>
                </div>
            </div>
        )
    };

    render()
    {
        return (
            <>
                {this.renderProductItem()}
            </>
        )
    }
}

ProductItem.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
};

const mapStateToProps = (state) => {
    return state.productByIdStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (id) => dispatch(getProductByIdAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Header from "../../components/Header/Header";
import styles from './ProductPage.module.sass';
import TryAgain from '../../components/TryAgain/TryAgain';
import {getProductByIdAction, getProductsAction} from "../../actions/actionCreator";
import classNames from 'classnames';
import moment from 'moment';
import BackButton from "../../components/BackButton/BackButton";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const ProductPage = (props) => {
    const [isRenderDescription, setIsRenderDescription] = useState( true );
    const [productId, setProductId] = useState( 0 );
    const {productsStore, productByIdStore, match: {params: {id}}, error} = props;
    const {productData} = productByIdStore;
    const {products} = productsStore;
    const currentProduct = products[productId];

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        props.getProducts();
        props.getProductById(props.match.params.id);
        const newProductId = props.match.params.id - 1;
        setProductId(newProductId);
    };

    const renderProductsReviews = () => {
        const {productData} = props.productByIdStore;
        if (productData) {
            return [...productData.values()].map(review =>
                <div className={styles.review} key={review.id}>
                    <span className={styles.text}>
                        {review.text}
                    </span>
                    <div className={styles.creatorInfo}>
                        <span className={styles.creatorName}>
                            {review.created_by.username}
                        </span>
                        <span>
                            {moment.utc((review.created_at)).format('MMMM Do YYYY')}
                        </span>
                    </div>
                </div>
            )
        }
    };

    const changeViewMode = () => {
        setIsRenderDescription(!isRenderDescription);
    };

    return (
        <div>
            <Header/>
            {error ? <div className={styles.tryContainer}><TryAgain getData={getData}/></div> :
                (
                    <div className={styles.mainInfoContainer}>
                        <div className={styles.mainContainerWrapper}>

                            <div className={styles.backButtonsContainer}>
                                <BackButton/>
                            </div>

                            <div className={styles.infoContainer}>
                                <div className={styles.buttonsContainer}>
                                    <span onClick={() => changeViewMode()} className={classNames(styles.btn,
                                        {[styles.activeBtn]: isRenderDescription})}>description</span>
                                    <span onClick={() => changeViewMode()} className={classNames(styles.btn,
                                        {[styles.activeBtn]: !isRenderDescription})}>reviews</span>
                                </div>
                                {
                                    isRenderDescription ?
                                        <ProductInfo currentProduct={currentProduct} productData={productData}
                                                     productId={id}/>
                                        :
                                        <div className={styles.reviewsContainer}>
                                            <span className={styles.reviewsCount}>
                                                Total reviews: {productData.length}
                                            </span>
                                            {renderProductsReviews()}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    const {productsStore, productByIdStore} = state;
    return {productsStore, productByIdStore};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsAction()),
        getProductById: (id) => dispatch(getProductByIdAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
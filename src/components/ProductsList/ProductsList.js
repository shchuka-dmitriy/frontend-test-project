import React from 'react';
import {connect} from 'react-redux';
import styles from './ProductsList.module.sass';
import {getProductsAction} from "../../actions/actionCreator";
import ProductItem from "../ProductItem/ProductItem";
import Spinner from '../../components/Spinner/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';

class ProductsList extends React.Component {

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        this.props.getProducts();
    };

    /**
     * @description Create list of html elements (products)
     * @return {html[]}
     */
    setProductsList = () => {
        const { products } = this.props;
        return [...products.values()].map(product =>
            <ProductItem id={product.id} key={product.id + 1} data={product}/>)
    };

    render() {
        const {error, isFetching} = this.props;

        return (
            <>
                <div className={styles.mainInfoContainer}>
                    {error ? <div className={styles.tryContainer}><TryAgain getData={this.getData}/></div> :
                        (
                            isFetching ?
                                <div className={styles.containerSpinner}>
                                    <Spinner/>
                                </div>
                                :
                                (
                                    <div className={styles.productsContainer}>
                                        {this.setProductsList()}
                                    </div>
                                )
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.productsStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
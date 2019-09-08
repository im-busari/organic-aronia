import React, { Component } from 'react'
import ProductList from '../components/Product/ProductList';

export default class Products extends Component {

    render() {

        const { t } = this.props;

        return (
            <div>
                
                <ProductList t={t} />
            </div>
        )
    }
}

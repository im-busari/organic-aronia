import React, { Component } from 'react'
import HeaderP from '../components/Product/HeaderP';
import ProductList from '../components/Product/ProductList';

export default class Products extends Component {

    state = {
        retail: true // to change the price only
    }

    changeToRetail = () => {
        this.setState({
            retail: true,
        }, () => { console.log (this.state.retail)})
    }

    changeToWholesale = () => {
        this.setState({
            retail: false,
        }, () => { console.log (this.state.retail)})
    }

    render() {

        const { t } = this.props;

        return (
            <div>
                
                <HeaderP changeToRetail={this.changeToRetail} changeToWholesale={this.changeToWholesale} t={t} />

                <ProductList t={t} retail={this.state.retail} />
            </div>
        )
    }
}

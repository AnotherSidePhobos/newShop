import Moment from 'react-moment';
import { connect, useDispatch, useSelector } from 'react-redux';
import {fetchAllProductsApiById} from './../../api/api';
import {fetchAllProductsById} from './../../redux/actions/actions';
import {addProductToCart} from './../../redux/actions/actions';


import React, { Component } from 'react'

class Detail extends Component {
    constructor(props){
        super(props)
        this.onAddClick = this.onAddClick.bind(this);
    }
    componentDidMount(){
        fetchAllProductsApiById(this.props.match.params.id)
        .then((response) => this.props.fetchAllProductsById(response))
    }
    onBackClick = () => {
        this.props.history.goBack();
    }
    onAddClick = (product) => {
        this.props.addProductToCart(product)
    }
    render() {
        debugger
        let dateString = this.props.product.date;
        let dateInMlsec = Date.parse(dateString);
        let dateNormal = new Date(dateInMlsec);
        let localDateString = dateNormal.toLocaleDateString()

        return (
            <div className='detail'>
                <h2>{this.props.product.title}</h2>
                <div className='line'>

                </div>
                    <div className='cont'>
                        <div className='main__info'>
                            <div>
                                <div className='price'><h4>{new Intl.NumberFormat().format(this.props.product.price) + 'rub'}</h4></div>
                            </div>
                            <div>
                                <img className='detail__img' src={this.props.product.img} alt={this.props.product.title}/>
                                <div>
                                        {this.props.product.date ? 'Date: ' + localDateString : ""}
                                </div>
                            </div>
                        </div>
                        <div className='additional__info'>
                            <div>
                                <h3>Description</h3>
                            </div>

                            <div>
                                {this.props.product.details}
                            </div>
                        </div>

                    </div>

                    <button onClick={() => {this.onAddClick(this.props.product)}} className='btn btn-success detail__add-btn'>Add to cart</button>
                    <button onClick={this.onBackClick} className='btn btn-secondary detail__add-btn'>back</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        product: state.products.product
    }
}
export default connect(mapStateToProps, {fetchAllProductsById, addProductToCart})(Detail); 

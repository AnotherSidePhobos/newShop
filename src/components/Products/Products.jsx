import React, { useEffect } from 'react'
import Product from './../Product/Product';
import Sidebar from './../Sidebar/Sidebar';
import {fetchAllProductsApi} from './../../api/api';
import {getTotalCountApi} from './../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllProducts} from './../../redux/actions/actions';
import {getTotalCount} from './../../redux/actions/actions';
import {setAllProducts} from './../../redux/actions/actions';
import Pagination from '../Pagination/Pagination';
import Carusel from '../Carusel/Carusel';


const Products = (props) => {


    const dispatch = useDispatch();
    const pageSize = useSelector(state => state.products.pageSize)
    const currentPage = useSelector(state => state.products.currentPage)
    const products = useSelector(state => state.products.productsArr)
    debugger
    useEffect(() => {
        debugger
        getTotalCountApi()
        .then((response) => dispatch(getTotalCount(response.length)))
        fetchAllProductsApi(currentPage, pageSize)
        .then((responce) => dispatch(fetchAllProducts(responce)))

        //all products to know amount
        getTotalCountApi()
        .then((responce) => dispatch(setAllProducts(responce)))
        

    }, [currentPage])
    

    return (
        <>
                <Carusel/>
            <div className='content'>
                <Sidebar/>
                <div className='products'>
                    {
                        !products.length
                        ? "There are not any products"
                        : products.map((product) => <Product product = {product}/>)
                    }
                </div>
            </div>
            
            <Pagination/>
        </>
    )
}


export default Products; 

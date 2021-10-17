import React from 'react'
import './Sidebar.css';
import {fetchAllProductsApiByCategory} from './../../api/api';
import {fetchAllProductsApi} from './../../api/api';
import {getAllWithoutAnyConditionApi} from './../../api/api';
import {fetchAllProductsByCat} from './../../redux/actions/actions';
import {getAllByPrice} from './../../redux/actions/actions';
import {getTotalCount} from './../../redux/actions/actions';
import {fetchAllProducts} from './../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const allProductsArr = useSelector(state => state.products.allProductsArr)
    
    const onlowClick = () =>{
        fetchAllProductsApiByCategory('low top sneakers')
        .then((response) => dispatch(fetchAllProductsByCat(response)))
        .then((response) => dispatch(getTotalCount(response)))
    }
    const onAllClick = () =>{
        fetchAllProductsApi(1, 6)
        .then((response) => dispatch(fetchAllProducts(response)))
        .then((response) => dispatch(getTotalCount(allProductsArr.length)))
    }

    const dispatch = useDispatch();
    const onhighClick = () => {
        debugger
        fetchAllProductsApiByCategory('high top sneakers')
        .then((response) => dispatch(fetchAllProductsByCat(response)))
        .then((response) => dispatch(getTotalCount(allProductsArr.length)))
    }



    const onChangePrice = (e) => {
        debugger
        if (e.target.value === '-') {
            fetchAllProductsApi(1, 6)
            .then((response) => dispatch(fetchAllProducts(response)))
            .then((response) => dispatch(getTotalCount(allProductsArr.length)))
            
        }else{

            getAllWithoutAnyConditionApi()
            .then((response) => dispatch(getAllByPrice(response, e.target.value)))
            .then((response) => dispatch(getTotalCount(allProductsArr.length)))
        }
        debugger
    }
    return (
        <div className='sidebar'>
                <h4>Categories</h4>
            <div className='sidebar_buttons'>
                <button onClick={onAllClick} className='btn btn-secondary'>All</button>
                <button onClick={onlowClick} className='btn btn-secondary'>low top sneakers</button>
                <button onClick={onhighClick} className='btn btn-secondary'>high top sneakers</button>
            </div>
                <h4 className='filters__title'>Sorting</h4>
            <div>
                <h5>by price</h5>
            <select onChange={onChangePrice} className='price__filter' name="price" id="s1">
                <option value="-" >reset</option>
                <option value="cheap" >cheap first</option>
                <option value="expensive">expensive first</option>
            </select>   
            </div>
        </div>
    )
}

export default Sidebar

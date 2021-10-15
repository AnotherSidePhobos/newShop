import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {setCurrentPage} from './../../redux/actions/actions';


const Pagination = () => {
debugger
    const totalItemsCount = useSelector(state => state.products.totalItemsCount)
    const currentPage = useSelector(state => state.products.currentPage)
    const pageSize = useSelector(state => state.products.pageSize)
    const dispatch = useDispatch();
    const countPages = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }
debugger

    const onPageClick = (page) => {
        dispatch(setCurrentPage(page))
    }
    const onNextClick = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(currentPage + 1))
    }
    const onPrevClick = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(currentPage - 1))
    }
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            {
                currentPage > 1 ?
                <li className="page-item">
                    <a className="page-link" href="/" onClick={onPrevClick} tabindex="-1">Previous</a>
                </li>
                :
                <li className="page-item disabled">
                    <a className="page-link" href="#" onClick={onPrevClick} tabindex="-1">Previous</a>
                </li>
            }
            {
                pages.map((page) => (
                    <li onClick={() => onPageClick(page)} className="page-item"><a className="page-link" href="#">{page}</a></li>
                ))
            }
            <li className="page-item">
            <a className="page-link" href='#' onClick={onNextClick}>Next</a>
            </li>
        </ul>
        </nav>
    )
}

export default Pagination

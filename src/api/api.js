import axios from "axios"


export const fetchAllProductsApi = (currentPage, pageSize) => {
    debugger
    return axios.get(`http://localhost:3003/products?_page=${currentPage}&_limit=${pageSize}`)
    .then(response => response.data)
}
export const getTotalCountApi = () => {
    debugger
    return axios.get(`http://localhost:3003/products`)
    .then(response => response.data)
}
import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div>
            {
                <div className='product'>
                    <h2>{product.title}</h2>
                    <div>
                        <Link to={`/detail/${product.id}`}>
                            <img src={product.img} alt={product.title}/>
                        </Link>

                    </div>
                    <h5>{new Intl.NumberFormat().format(product.price)} rub.</h5>
                    <div>
                        {product.details.length > 100 ? product.details.substr(0, 100) + '...' : product.details}
                    </div>
                    <div className='buttons'>
                        <div>
                            <button onClick={()=>alert('added to cart')} className='btn btn-success add__btn'>add to cart</button>
                        </div>
                        <div>
                            <Link to={`/detail/${product.id}`}>
                                <button className='btn btn-secondary more__btn'>more...</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product

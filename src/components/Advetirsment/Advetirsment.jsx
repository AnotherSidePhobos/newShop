import React from 'react'

const Advetirsment = (props) => {


    if (props.match.params.par === 'news') {
        return(
            <h3>Новинки этого года....блаблбабла</h3>
        )
    }else if (props.match.params.par === 'shopCard') {
        return(
            <h3>Сдеся мы расскажим как получить карту магазина</h3>
        )
    }else if (props.match.params.par === 'freeDelivery') {
        return(
            <h3>Чтобы получить товар на хату на нашей газельки, нужно заказать на 20 касиков, тада привезём</h3>
        )
    }


}

export default Advetirsment

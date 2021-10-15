import React from 'react'

const Detail = (props) => {
    console.log(props);
    const id = props.match.params.id;
    console.log(id);
    return (
        <div>
            Detail
        </div>
    )
}

export default Detail

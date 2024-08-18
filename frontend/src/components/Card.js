import React from 'react'

const Card = ({ data }) => {

    const { id, title, description } = data;
    return (
        <section className='card' key={id}>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='desc'>
                <p>{description}</p>
            </div>
        </section >
    )
}

export default Card;
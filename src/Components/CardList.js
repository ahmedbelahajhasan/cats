import React from 'react'
import CatCard from './Card'

const CardList = ({cats,match,history}) => {
    return (
        <div className='cards'>
            {
                cats.map((cat,key)=><CatCard cat={cat} key={cat.id}  />)
            }
        </div>
    )
}

export default CardList

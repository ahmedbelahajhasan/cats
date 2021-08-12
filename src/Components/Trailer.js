import React from 'react'

const Trailer = ({cats,match,history}) => {
    const cat=cats.find((x)=>x.id.toString()===match.params.id)
    return (
        <div>
           <h1>video</h1>
           <iframe width="500" height="506" src={cat.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Trailer

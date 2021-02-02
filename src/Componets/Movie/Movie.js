import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movies}) => {
    return (
        <div style={{
            marginTop:"60px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap"}}>
         {movies.map((el,i)=>(
         <div>
         <Link to={`/movie/${el.id}`}><h3>{el.title}</h3></Link> 
          <img width="300px" height="200px" src={el.image} alt="film"/> 
         </div>  
         ))}   
        </div>
    )
}

export default Movie

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import { getMovieWithParam } from '../../redux/action'

const categary = [
  { id: "1", name: "Music" },
  { id: "2", name: "Movie" },
  { id: "3", name: "Sport" },
  { id: "4", name: "Tech" },
  { id: "5", name: "Fashion" },
]
const URL = "/popularpage"

function Itemdata() {
  const data = categary.map((item, index) => {
    return <li className="nav-item" key={index}>
      <Link className="nav-link active" aria-current="page" to={`${URL}?categary=${item.name}`} key={index} >{item.name}</Link>
    </li>
  })
  return data;
}
Itemdata()

const Popularpage = () => {

  const [searchParam] = useSearchParams();
  const categary = searchParam.get("categary");
  console.log(categary, "get_categary_details")
  const { movie, movieParam } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    const categary = searchParam.get("categary");
    dispatch(getMovieWithParam({cate:categary||""}))
  }, [categary]); 


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-2">
          <Itemdata />
        </div>
        <div className="col-md-6">
          {movieParam.map((item, index) => {
            return <h1 key={index}>Popularity:-{item.popularity} </h1>
          })}
        </div>
      </div>
    </div>
  )
}

export default Popularpage
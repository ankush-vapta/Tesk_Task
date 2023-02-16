import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardComponent from '../card/Cardcomponent';



const Topratedpage = () => {
  const { cart } = useSelector(state => state.movieReducer);
  const [list, setList] = useState(true)


  useEffect(() => {

  }, [cart])
  return (
    <div className="container-fluid">
      <div className="row">
        {cart.length > 0 && cart.map((item, index) => (
          <CardComponent item={item} index={index} key={index} list={list} />
        ))}
      </div>
    </div>
  )
}

export default Topratedpage
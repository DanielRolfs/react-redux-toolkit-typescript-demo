 import React from 'react'
 import { useSelector, useDispatch } from 'react-redux'
 import { ordered, restocked } from './icecreamSlice'


 export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
  const dispatch = useDispatch()
   return (
     <div>
        <h2>Number of ice creams - {numOfIcecream} </h2>
        <button onClick={() => dispatch(ordered(1))}>Order ice cream</button>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
     </div>
   )
 }
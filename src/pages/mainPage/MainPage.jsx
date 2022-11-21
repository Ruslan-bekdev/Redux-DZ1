import {useDispatch,useSelector} from "react-redux";
const MainPage = () => {
  const dispatch = useDispatch();
  const number = useSelector(state => state.number);
  const increment = () => {
    dispatch({
      type: 'INCREMENT',
    })
  }
  const decrement = () => {
    dispatch({
      type: 'DECREMENT',
    })
  }
  return(
    <>
      <h1>{number}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default MainPage;
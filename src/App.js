import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/countOptions';
import { logout, login } from './actions/isLogged';
import isLoggedReducer from './reducers/isLogged';

function App() {
  // useSelector gives access to the whole state storage
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Logged in: {isLogged ? 'yes' : 'no'}</h1>
      {isLogged ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <h2>DATA:</h2>
          <div>Counter: {counter}</div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
}

export default App;

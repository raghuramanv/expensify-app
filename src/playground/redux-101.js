import { createStore } from 'redux';

// Action generators - function that returns action objects

//const incrementCount = (payload = {}) => ({

const incrementCount = ({ incrementBy = 1 } = {}) => ({  
  type: 'INCREMENT',
  incrementBy
//  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

// No = {} to set the default as we force the user to provide the value as parameter
const setCount = ({ count }) => ({
  type: 'SET',
  count  
});

// CreateStore takes two parameters state and action.
// This is called a REDUCER
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = ((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };  
    case 'RESET':
      return {
        count: 0
      }  
    case 'SET':
      return {
        count: action.count
      }  
    default:
      return state;
  }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions to be dispatched to change state. Actions like Increment, Decrement, Set, Reset

store.dispatch(incrementCount({ incrementBy: 9 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 127 }));

// const incrementCount = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };

// const add = (data) => {
//   return data.a + data.b;
// };
// console.log(add({a: 2, b: 24}));

// const addDestructured = ({ a, b }) => {
//   return a + b;
// };
// console.log(addDestructured({a: 2, b: 24}));
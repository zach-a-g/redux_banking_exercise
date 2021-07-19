'use strict'

// import { createStore } from "redux";

const { createStore } = redux;

console.log("App Started!!");

// Default state!
const defaultState = {
    balance: 0,
};

const actionIncrement = (amount) => {
    return {
       type: 'INCREMENT',
       payload: amount
    }
};

const actionDecrement = (amount) => {
    return {
       type:'DECREMENT',
       payload: amount
    }
};

// Reducer!
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + action.payload
            };
        case 'DECREMENT':
            return {
                balance: state.balance - action.payload
            };
        default: 
            return state;
    };
};

const store = createStore(account);

console.log('Store state value: ', store.getState());

console.log("Store value is: ", store.getState());

store.subscribe(() => {
    console.log('Subscribing to the state changes...')
    const state = store.getState();
    console.log('The current state in the store is: ', state);
});

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecrement);

store.dispatch(actionIncrement (100));
store.dispatch(actionIncrement (13));
store.dispatch(actionDecrement (50));

console.log('Store state value: ', store.getState());
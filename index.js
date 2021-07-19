'use strict'

import { createStore } from "redux";

console.log("App Started!!");

// Default state!
const defaultState = {
    balance: 0,
};

const actionIncrement = {
    type: 'INCREMENT'
};

const actionDecrement = {
    type:'DECREMENT'
};

// Reducer!
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + 1
            };
        case 'DECREMENT':
            return {
                balance: state.balance - 1
            };
        default: 
            return state;
    };
};

const store = createStore(account);

console.log("Store value is: ", store.getState());

store.subscribe(() => {
    console.log('Subscribing to the state changes...')
    const state = store.getState();
    console.log('The current state in the store is: ', state);
});

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecrement);

console.log('Store state value: ', store.getState());
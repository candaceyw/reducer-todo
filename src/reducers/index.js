const moment = require('moment')

export const initialState = {
  items: [
    {
      name: null,
      completed: false,
      id: Date.now(),
      timeCompleted: moment().format(),
      show: false

    },
  ],
};

// cases, ADD_TODO, COMPLETED_TODO, CLEAR_TODO

export const todoReducer = (state, action) => {
  switch (action.type) {
  
    case 'REFRESH_ITEMS':
      let localStorageState = action.payload
      return localStorageState

    case 'ADD_TODO':
      const newState = { ...state, items: [...state.items, action.payload] }
      const stateStringified = JSON.stringify(newState)
      localStorage.setItem("state", stateStringified);
      return newState
    
    case 'COMPLETED_TODO':

      const newStateCompleted = {...state, 
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item ) }
      const stateStringifiedCompleted = JSON.stringify(newStateCompleted)
      localStorage.setItem("state", stateStringifiedCompleted);
      return newStateCompleted
      // return {
      //   ...state, 
      //   items: state.items.map(item =>
      //     item.id === action.payload
      //       ? { ...item, completed: !item.completed }
      //       : item )
      // };

    case 'CLEAR_TODO':
      const newState2 = {...state, items: state.items.filter(item => !item.completed) }
      const stateStringified2 = JSON.stringify(newState2)
      localStorage.setItem("state", stateStringified2);
      return newState2

    default:
      return state;
  }
};

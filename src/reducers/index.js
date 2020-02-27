const moment = require('moment')

export const initialState = {
  items: 
  [
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
      
      // const stateStringified = JSON.stringify(state)
      // localStorage.setItem("state", stateStringified);
    case 'ADD_TODO':
      const newState = { ...state, items: [...state.items, action.payload] }
      const stateStringified = JSON.stringify(newState)
      localStorage.setItem("state", stateStringified);
      return newState
      // return { ...state, items: [...state.items, {name: action.payload, id: Date.now(), timeCompleted: momen().format(), completed: false,
      // }]};
      // return { ...state, items: [...state.items, action.payload] };

        // return {
        //   ...state,
        //   name: action.payload.items,
        //   id: Date.now(),
        //   completed: false,
        //   show: true
        // }
        
    case 'COMPLETED_TODO':
      // localStorage.setItem("items", JSON.stringify(action.payload.items));
      return {
        ...state, 
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item )
      };
    case 'CLEAR_TODO':
      return { ...state, items: state.items.filter(item => !item.completed) };
    default:
      return state;
  }
};

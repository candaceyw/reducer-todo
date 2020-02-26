export const initialState = {
  items: [
    // {
    //   name: 'Learn about reducers',
    //   completed: false,
    //   id: 3892987589,
    //   show: true
    // },
  ]
};

// cases, ADD_TODO, COMPLETED_TODO, CLEAR_TODO

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, items: [...state.items, action.payload] };
    case 'COMPLETED_TODO':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case 'CLEAR_TODO':
      return { ...state, items: state.items.filter(item => !item.completed) };
    default:
      return state;
  }
};

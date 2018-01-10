/* @flow */

type State = Array<Object>;

const INITIAL_STATE: State = [];

export default (state: State = INITIAL_STATE, action: { type: string, payload: {id?: Number, data:Object}}) => {
  switch (action.type) {
    case "LOAD_TODOS": {
      return action.payload.data;
    }
    case "ADD_TODO": {
      return [
        ...state,
        action.payload.data
      ];
    }
    case "EDIT_TODO": {
      const id = action.payload.data.id;
      return state.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return action.payload.data;
      });
    }
    case "REMOVE_TODO": {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
};

const initialState = {
  note_to_edit: {},
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_NOTE":
      return action.payload;

    default:
      return state;
  }
};

export default noteReducer;

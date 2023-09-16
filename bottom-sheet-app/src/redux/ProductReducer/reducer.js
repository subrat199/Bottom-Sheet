const initialState = {
    isOpen: false,
    snapPoints: [100,300, 700], // Define your snap points here
    currentSnapPoint: 700,
  };
 export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_BOTTOM_SHEET':
        return { ...state, isOpen: !state.isOpen };
      case 'SET_CURRENT_SNAP_POINT':
        return { ...state, currentSnapPoint: action.payload };
      default:
        return state;
    }
  };
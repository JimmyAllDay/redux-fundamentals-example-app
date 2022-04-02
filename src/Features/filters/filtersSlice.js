const initialState = {
  status: 'All',
  colors: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      }
    }
    case 'filters/statisFilterChanged': {
      //payload: filterValue
      console.log('filters/statisFilterChanged')
      return { ...state }
    }
    case 'filters/colorFilterChanged': {
      // payload: {color, changeType
      console.log('filters/colorFilterChanged')
      return { ...state }
    }

    default:
      return state
  }
}

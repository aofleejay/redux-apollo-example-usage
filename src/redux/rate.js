const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RATES_SUCCESS':
      return action.rates // Manipulate data here.

    default:
      return state
  }
}

export default reducer

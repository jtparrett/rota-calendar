///////////////////
// Bookings Reducer
///////////////////

// Action Interface
interface ActionProps {
  type: string,
  bookingId: string
}

// Reducer
export default (state = {}, action: ActionProps) => {
  switch(action.type){
    case 'CREATE_BOOKING':
      return {
        ...state,
        [action.bookingId]: true
      }
    break
    default:
      return state
  }
}
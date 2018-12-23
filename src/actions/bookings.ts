export const createBooking = (bookingId: string) => {
  return {
    type: 'CREATE_BOOKING',
    bookingId
  }
}
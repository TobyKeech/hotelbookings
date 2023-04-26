import Booking from "./Booking";

const BookingsList = ({bookings, removeBooking}) => {

    const hotelBookingsList = bookings.map((booking) =>{
        return <Booking booking={booking} key={booking._id} removeBooking = {removeBooking}/>
    
    });

    return ( 
        <>
            {hotelBookingsList}
        </>
     );
}
 
export default BookingsList;